/* eslint-disable import/no-anonymous-default-export */
export default {
    control: {
      backgroundColor: '#fff',
      fontSize: 16,
      // fontWeight: 'normal',
    },
  
    '&multiLine': {
      control: {
        fontFamily: 'var(--font-lato), sans-serif',
        // minHeight: 60,
      },
      highlighter: {
        padding: 0,
        border: '1px solid transparent',
      },
      input: {
        padding: 0,
        border: '1px solid silver',
      },
    },
  
    '&singleLine': {
      display: 'inline-block',
      width: 180,
  
      highlighter: {
        padding: 1,
        border: '2px inset transparent',
      },
      input: {
        padding: 1,
        border: '2px inset',
      },
    },
  
    suggestions: {
      list: {
        backgroundColor: 'white',
        border: '0',
        fontSize: 16,
        borderRadius: '8px',
      },
      item: {
        padding: '5px 5px',
        borderBottom: '1px solid transparent',
        fontFamily: 'var(--font-lato), sans-serif',
        '&focused': {
          backgroundColor: '#EF5660',
          color: 'white',
        },
      },
    },
  }