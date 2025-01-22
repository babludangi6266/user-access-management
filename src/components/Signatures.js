import React from "react";
import "../styles/UserDetails.css";

function Signature() {
  return (
    <div className="user-details-container">
      <div className="user-details-grid">
        <div className="user-detail-label">Person:</div>
        <div className="user-detail-value">Reyan Young</div>
        {/* Add the rest of the details here */}
      </div>
    </div>
  );
}

export default Signature;
