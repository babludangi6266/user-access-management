import React from "react";
import "../styles/UserDetails.css";

function UserDetails() {
  return (
    <div className="user-details">
      <h2>User Details</h2>
      <div className="user-details-grid">
        <div className="user-detail-label">Person:</div>
        <div className="user-detail-value">Reyan Young</div>
        
        <div className="user-detail-label">First Name:</div>
        <div className="user-detail-value">Reyan</div>
        
        <div className="user-detail-label">Last Name:</div>
        <div className="user-detail-value">Young</div>
        
        <div className="user-detail-label">Employee ID:</div>
        <div className="user-detail-value">1234567890</div>
        
        <div className="user-detail-label">Email ID:</div>
        <div className="user-detail-value">Reyan123@gmail.com</div>
        
        <div className="user-detail-label">Branch:</div>
        <div className="user-detail-value">Biosciences Pvt. Ltd</div>
        
        <div className="user-detail-label">Department:</div>
        <div className="user-detail-value">Automation</div>
        
        <div className="user-detail-label">Role:</div>
        <div className="user-detail-value">
          Basic document rights - Document control
        </div>
        
        <div className="user-detail-label">Domain User:</div>
        <div className="user-detail-value">No</div>
        
        <div className="user-detail-label">Comments:</div>
        <div className="user-detail-value">New request</div>
      </div>
    </div>
  );
}

export default UserDetails;
