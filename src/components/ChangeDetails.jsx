import React from "react";

function ChangeDetails() {
  return (
    <div>
      <div className="change-details-nav">
        <button className="nav-btn">Open</button>
        <button className="nav-btn">Impact Assessment</button>
        <button className="nav-btn">Approval</button>
        <button className="nav-btn">Completed</button>
      </div>
      <div className="change-details-content">
        <div className="details-row">
          <strong>Name:</strong> DCC-000013
        </div>
        <div className="details-row">
          <strong>Description:</strong> Policy ensures controlled user access in Qssence for Anthem. System Admin manages new access, modification, and deactivations. Regular audits ensure compliance. Non-compliance results in disciplinary actions.
        </div>
        <div className="details-row">
          <strong>Reason:</strong> As part of Qssence implementation policy and work instructions are newly introduced access Anthem.
        </div>
        <div className="details-row">
          <strong>Scope:</strong> Global
        </div>
      </div>
    </div>
  );
}

export default ChangeDetails;
