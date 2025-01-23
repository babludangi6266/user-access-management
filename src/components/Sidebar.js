import React from "react";
import "../styles/Sidebar.css";
import { FaRegClock, FaUser, FaEye, FaClipboardList, FaKey, FaPenFancy, FaServer, FaSyncAlt , FaShareAlt} from "react-icons/fa";

const Sidebar = ({ menuItems, onMenuClick }) => {
  const icons = {
    "workflow": <FaRegClock />,
    "user-details": <FaUser />,
    "permissions": <FaEye />,
    "pending-requests": <FaClipboardList />,
    "current-access": <FaKey />,
    "signatures": <FaPenFancy />,
    "system-details": <FaServer />,
    "change-details": <FaSyncAlt />,
    "sharing-settings": <FaShareAlt/>,
  };

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="sidebar-item"
          onClick={() => onMenuClick(item.id)}
        >
          <span className="sidebar-icon">{icons[item.id]}</span>
          <span className="sidebar-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
