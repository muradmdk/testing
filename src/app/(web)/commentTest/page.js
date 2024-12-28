// Complete Code for Post Comment System

"use client";
import { useState } from "react";

// Dummy comment data with eleven different users
const dummyComments = [
  {
    id: 1,
    text: "This is the first comment",
    user: "User1",
    parentId: null,
    children: [
      {
        id: 2,
        text: "This is a reply to the first comment",
        user: "User2",
        parentId: 1,
        children: [
          {
            id: 3,
            text: "This is a reply to the reply",
            user: "User3",
            parentId: 2,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    text: "This is another top-level comment",
    user: "User4",
    parentId: null,
    children: [],
  },
  {
    id: 5,
    text: "This is a comment by User5",
    user: "User5",
    parentId: null,
    children: [
      {
        id: 6,
        text: "This is a reply by User6 to User5's comment",
        user: "User6",
        parentId: 5,
        children: [],
      },
    ],
  },
  {
    id: 7,
    text: "This is a top-level comment by User7",
    user: "User7",
    parentId: null,
    children: [],
  },
  {
    id: 8,
    text: "User8 commenting on the post",
    user: "User8",
    parentId: null,
    children: [
      {
        id: 9,
        text: "Reply by User9 to User8's comment",
        user: "User9",
        parentId: 8,
        children: [
          {
            id: 10,
            text: "Further reply by User10 to User9",
            user: "User10",
            parentId: 9,
            children: [
              {
                id: 11,
                text: "Reply by User11 to User10",
                user: "User11",
                parentId: 10,
                children: [],
              },
              {
                id: 12,
                text: "Reply by User12 to User10",
                user: "User12",
                parentId: 10,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Home = () => {
  const [comments, setComments] = useState(dummyComments);
  const [replyText, setReplyText] = useState("");
  const [replyTo, setReplyTo] = useState(null);

  // Function to add a new reply to the correct comment recursively
  const addReply = (parentId, newReply) => {
    const recursiveAdd = (commentList) => {
      return commentList.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            children: [...comment.children, newReply],
          };
        } else if (comment.children.length > 0) {
          return {
            ...comment,
            children: recursiveAdd(comment.children),
          };
        } else {
          return comment;
        }
      });
    };

    setComments((prevComments) => recursiveAdd(prevComments));
  };

  const handleAddComment = (text, parentId) => {
    const newComment = {
      id: Date.now(),
      text,
      user: "CurrentUser",
      parentId,
      children: [],
    };

    if (parentId === null) {
      setComments((prevComments) => [...prevComments, newComment]);
    } else {
      addReply(parentId, newComment);
    }
  };

  const handleReplySubmit = (e, comment) => {
    e.preventDefault();
    if (replyText) {
      handleAddComment(replyText, comment.id);
      setReplyText("");
      setReplyTo(null);
    }
  };

  const handleReply = (comment) => {
    setReplyTo(comment);
    setReplyText(`@${comment.user} `);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Post Comment System</h1>
      <CommentForm onSubmit={(text) => handleAddComment(text, null)} />
      <CommentList
        comments={comments}
        handleAddComment={handleAddComment}
        setReplyTo={setReplyTo}
        replyTo={replyTo}
        replyText={replyText}
        setReplyText={setReplyText}
        handleReplySubmit={handleReplySubmit}
        handleReply={handleReply}
      />
    </div>
  );
};

const CommentList = ({ comments, handleAddComment, setReplyTo, replyTo, replyText, setReplyText, handleReplySubmit, handleReply }) => (
  <div style={styles.commentList}>
    {comments.map((comment) => (
      <Comment
        key={comment.id}
        comment={comment}
        handleAddComment={handleAddComment}
        setReplyTo={setReplyTo}
        replyTo={replyTo}
        replyText={replyText}
        setReplyText={setReplyText}
        handleReplySubmit={handleReplySubmit}
        handleReply={handleReply}
      />
    ))}
  </div>
);

const Comment = ({ comment, handleAddComment, setReplyTo, replyTo, replyText, setReplyText, handleReplySubmit, handleReply }) => {
  const canReply = comment.user !== "CurrentUser";
  const isReplying = replyTo && replyTo.id === comment.id;

  return (
    <div style={{ ...styles.commentWrapper, marginLeft: comment.parentId ? (comment.parentId > 1 ? "20px" : "10px") : "0" }}>
      <div style={styles.commentContainer}>
        <div style={styles.comment}>
          <div style={styles.commentHeader}>
            <div style={styles.avatar}>{comment.user[0]}</div>
            <div>
              <span style={styles.commentUser}>{comment.user}</span>
              <p style={styles.commentText}>{comment.text}</p>
            </div>
          </div>
          {canReply && (
            <button onClick={() => handleReply(comment)} style={styles.replyButton}>
              Reply
            </button>
          )}
        </div>
        {isReplying && (
          <form onSubmit={(e) => handleReplySubmit(e, comment)} style={styles.replyFormWrapper}>
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder={`Reply to ${comment.user}...`}
              style={styles.input}
            />
            <button type="submit" style={styles.submitButton}>
              Reply
            </button>
          </form>
        )}
        {comment.children && comment.children.length > 0 && (
          <div style={styles.replyWrapper}>
            {comment.children.map((child) => (
              <Comment
                key={child.id}
                comment={child}
                handleAddComment={handleAddComment}
                setReplyTo={setReplyTo}
                replyTo={replyTo}
                replyText={replyText}
                setReplyText={setReplyText}
                handleReplySubmit={handleReplySubmit}
                handleReply={handleReply}
              />
            ))}
            {comment.children.length > 0 && (
              <form onSubmit={(e) => handleReplySubmit(e, comment)} style={styles.replyFormWrapper}>
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder={`Reply as CurrentUser...`}
                  style={styles.input}
                />
                <button type="submit" style={styles.submitButton}>
                  Reply
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const CommentForm = ({ onSubmit, placeholder }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder || "Write a comment..."}
        style={styles.input}
      />
      <button type="submit" style={styles.submitButton}>
        Post
      </button>
    </form>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f0f2f5",
  },
  title: {
    textAlign: "center",
    color: "#444",
    marginBottom: "20px",
  },
  commentList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  commentWrapper: {
    position: "relative",
    marginBottom: "15px",
  },
  commentContainer: {
    position: "relative",
    borderRadius: "8px",
    padding: "10px 15px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    zIndex: "2",
  },
  comment: {
    display: "flex",
    alignItems: "flex-start",
    paddingBottom: "5px",
  },
  commentHeader: {
    display: "flex",
    gap: "10px",
  },
  avatar: {
    width: "40px",
    height: "40px",
    backgroundColor: "#1877f2",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "16px",
  },
  commentUser: {
    fontWeight: "bold",
    color: "#365899",
    marginBottom: "3px",
  },
  commentText: {
    fontSize: "14px",
    margin: "0",
    color: "#333",
  },
  replyButton: {
    fontSize: "13px",
    color: "#65676b",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0",
    marginLeft: "45px",
    marginTop: "5px",
  },
  replyFormWrapper: {
    marginTop: "10px",
    marginLeft: "20px",
    display: "flex",
    alignItems: "center",
  },
  replyWrapper: {
    marginLeft: "20px",
  },
  commonReplyInputWrapper: {
    marginTop: "20px",
  },
  form: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  input: {
    flex: "1",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    backgroundColor: "#f0f2f5",
    marginRight: "10px",
  },
  submitButton: {
    padding: "6px 12px",
    fontSize: "14px",
    backgroundColor: "#1877f2",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Home;
