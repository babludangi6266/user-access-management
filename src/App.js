
// import React, { useState } from "react";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import ContentArea from "./components/ContentArea";
// import "../src/styles/UserDetails.css";
// import "./App.css";

// function App() {
//   const stages = ["open", "impact-assessment", "approval", "completed"];
//   const [currentStage, setCurrentStage] = useState("open");
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   // const getStageColor = (stage) => {
//   //   if (stages.indexOf(stage) < stages.indexOf(currentStage)) return "green";
//   //   if (stage === currentStage) return "blue";
//   //   return "grey";
//   // };


//   // const handleStageButtonClick = () => {
//   //   setIsPopupOpen(true);
//   // };

//   // const handlePopupAction = () => {
//   //   const nextStageIndex = stages.indexOf(currentStage) + 1;
//   //   if (nextStageIndex < stages.length) {
//   //     setCurrentStage(stages[nextStageIndex]);
//   //   }
//   //   setIsPopupOpen(false);
//   // };

//   const getStageColor = (stage) => {
//     const currentIndex = stages.indexOf(currentStage);
//     const stageIndex = stages.indexOf(stage);

//     if (stageIndex < currentIndex) return "green";
//     if (stageIndex === currentIndex) return "blue";
//     return "grey";
//   };

//   // Open the popup
//   const handleStageButtonClick = () => {
//     setIsPopupOpen(true);
//   };

//   // Handle popup action
//   const handlePopupAction = () => {
//     const nextStageIndex = stages.indexOf(currentStage) + 1;
//     if (nextStageIndex < stages.length) {
//       setCurrentStage(stages[nextStageIndex]); // Move to the next stage
//     }
//     setIsPopupOpen(false); // Close the popup
//   };

  

//   const [menuItems] = useState([
//     { id: "workflow", label: "Workflow Timeline" },
//     { id: "user-details", label: "User Details" },
//     { id: "permissions", label: "View Permissions (02)" },
//     { id: "pending-requests", label: "Pending Requests (04)" },
//     { id: "current-access", label: "Current Access" },
//     { id: "signatures", label: "Signatures" },
//     { id: "system-details", label: "System Details" },
//     { id: "change-details", label: "Change Details" },
//   ]);

//   const [sections] = useState([
//     {
//       id: "workflow",
//       title: " > Workflow Timeline",
//       content: "This is the content for Workflow Timeline.",
//     },
//     {
//       id: "user-details",
//       title: " > User Details",
//       content: (
//         <div className="user-details-container">
//           <div className="user-details-grid">
//             <div className="user-detail-label">Person:</div>
//             <div className="user-detail-value">Reyan Young</div>

//             <div className="user-detail-label">First Name:</div>
//             <div className="user-detail-value">Reyan</div>

//             <div className="user-detail-label">Last Name:</div>
//             <div className="user-detail-value">Young</div>

//             <div className="user-detail-label">Employee ID:</div>
//             <div className="user-detail-value">1234567890</div>

//             <div className="user-detail-label">Email ID:</div>
//             <div className="user-detail-value">Reyan123@gmail.com</div>

//             <div className="user-detail-label">Branch:</div>
//             <div className="user-detail-value">Biosciences Pvt. Ltd</div>

//             <div className="user-detail-label">Department:</div>
//             <div className="user-detail-value">Automation</div>

//             <div className="user-detail-label">Role:</div>
//             <div className="user-detail-value">
//               Basic document rights - Document control
//             </div>

//             <div className="user-detail-label">Domain User:</div>
//             <div className="user-detail-value">No</div>

//             <div className="user-detail-label">Comments:</div>
//             <div className="user-detail-value">New request</div>
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: "permissions",
//       title: " > View Permissions",
//       content: "This is the content for View Permissions.",
//     },
//     {
//       id: "pending-requests",
//       title: " > Pending Requests",
//       content: "This is the content for Pending Requests.",
//     },
//     {
//       id: "current-access",
//       title: " > Current Access",
//       content: "This is the content for Current Access.",
//     },
//     {
//       id: "signatures",
//       title: " > Signatures",
//       content: "This is the content for Signatures.",
//     },
//     {
//       id: "change-details",
//       title: " > Change Details",
//       content: (
//         <div>
//           <div className="change-details-nav">
//             {stages.map((stage, index) => (
//               <button
//                 key={stage}
//                 className="nav-btn"
//                 style={{ backgroundColor: getStageColor(stage) }}
//               >
//                 {stage.replace("-", " ")}
//               </button>
//             ))}
//           </div>
//           <button className="stage-btn" onClick={handleStageButtonClick}>
//             {`Send to ${stages[stages.indexOf(currentStage) + 1] || "Completed"}`}
//           </button>
    
//           {isPopupOpen && (
//             <div className="popup">
//               <div className="popup-content">
//                 <p>{`Send to ${
//                   stages[stages.indexOf(currentStage) + 1] || "Completed"
//                 }?`}</p>
//                 <button onClick={handlePopupAction}>Confirm</button>
//                 <button onClick={() => setIsPopupOpen(false)}>Cancel</button>
//               </div>
//             </div>
//           )}
//         </div>
//       ),
//     },    
//     {
//       id: "system-details",
//       title: " > System Details",
//       content: "This is the content for System Details.",
//     },
//   ]);

//   return (
//     <div className="app">
//       <Header />
//       <div className="main-container">
//         <Sidebar
//           menuItems={menuItems}
//           onMenuClick={(id) => console.log(`Clicked on ${id}`)}
//         />
//         <ContentArea sections={sections} />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import "../src/styles/UserDetails.css";
import "./App.css";

function App() {
  const stages = ["open", "impact-assessment", "approval", "completed"];
  const [currentStage, setCurrentStage] = useState("open");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const getStageColor = (stage) => {
    const currentIndex = stages.indexOf(currentStage);
    const stageIndex = stages.indexOf(stage);

    if (stageIndex < currentIndex) return "green";
    if (stageIndex === currentIndex) return "blue";
    return "grey";
  };

  const handleStageButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupAction = () => {
    const nextStageIndex = stages.indexOf(currentStage) + 1;
    if (nextStageIndex < stages.length) {
      setCurrentStage(stages[nextStageIndex]); // Update stage
    } else {
      alert("This is the final stage."); // Handle the "completed" case
    }
    setIsPopupOpen(false); // Close the popup
  };
  

  const [menuItems] = useState([
    { id: "workflow", label: "Workflow Timeline" },
    { id: "user-details", label: "User Details" },
    { id: "permissions", label: "View Permissions (02)" },
    { id: "pending-requests", label: "Pending Requests (04)" },
    { id: "current-access", label: "Current Access" },
    { id: "signatures", label: "Signatures" },
    { id: "system-details", label: "System Details" },
    { id: "change-details", label: "Change Details" },
  ]);

  const [sections] = useState([
    {
      id: "workflow",
      title: " > Workflow Timeline",
      content: "This is the content for Workflow Timeline.",
    },
    {
      id: "user-details",
      title: " > User Details",
      content: (
        <div className="user-details-container">
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
      ),
    },
    {
      id: "permissions",
      title: " > View Permissions",
      content: "This is the content for View Permissions.",
    },
    {
      id: "pending-requests",
      title: " > Pending Requests",
      content: "This is the content for Pending Requests.",
    },
    {
      id: "current-access",
      title: " > Current Access",
      content: "This is the content for Current Access.",
    },
    {
      id: "signatures",
      title: " > Signatures",
      content: "This is the content for Signatures.",
    },
    {
      id: "change-details",
      title: " > Change Details",
      content: (
        <div>
          <div className="change-details-nav">
            {stages.map((stage) => (
              <button
                key={stage}
                className="nav-btn"
                style={{ backgroundColor: getStageColor(stage) }}
              >
                {stage.replace("-", " ")}
              </button>
            ))}
          </div>
          <button className="stage-btn" onClick={handleStageButtonClick}>
            {`Send to ${stages[stages.indexOf(currentStage) + 1] || "Completed"}`}
          </button>
    
          {isPopupOpen && (
            <div className="popup">
              <div className="popup-content">
                <p>{`Send to ${
                  stages[stages.indexOf(currentStage) + 1] || "Completed"
                }?`}</p>
                <button onClick={handlePopupAction}>Confirm</button>
                <button onClick={() => setIsPopupOpen(false)}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      ),
    },
    
    {
      id: "system-details",
      title: " > System Details",
      content: "This is the content for System Details.",
    },
  ]);

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar
          menuItems={menuItems}
          onMenuClick={(id) => console.log(`Clicked on ${id}`)}
        />
        <ContentArea sections={sections} />
      </div>
    </div>
  );
}

export default App;
