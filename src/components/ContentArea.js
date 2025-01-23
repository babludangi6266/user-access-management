
import React from "react";
import "../styles/ContentArea.css";

const ContentArea = ({ sections, activeSectionId }) => {
  return (
    <div className="content-area">
      {sections.map((section) => (
        <div key={section.id} className="content-section">
          <div
            className="content-section-header"
            onClick={() => {}}
          >
            {section.title}
          </div>
          <div
            className={`content-section-body ${
              activeSectionId === section.id ? "expanded" : "collapsed"
            }`}
          >
            {section.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentArea;
