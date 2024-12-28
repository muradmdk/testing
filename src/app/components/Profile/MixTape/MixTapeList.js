import React from "react";
import MixTapeCard from "./MixTapeCard";
import { CCol, CRow } from "@coreui/react";

function MixTapeList({ mixtapes, title }) {
  return (
    <>
      <h2 className="font-lato fw-700 fs-32 lh-38 color-blue">{title}</h2>
      <CRow>
        {mixtapes?.length > 0 ? (
          mixtapes.map((mixtape) => (
            <CCol lg={6} key={mixtape.id}>
              <MixTapeCard MixtapeData={mixtape} />
            </CCol>
          ))
        ) : (
          <div className="no-feed-wrapper text-center">
            <p className="mb-0">No Mixtape Available</p>
          </div>
        )}
      </CRow>
    </>
  );
}

export default MixTapeList;
