import React, { useState } from "react";
import "../styles/ContentArea.css"

const ContentArea = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="content-area">
      {sections.map((section) => (
        <div key={section.id} className="content-section">
          <div
            className="content-section-header"
            onClick={() => toggleSection(section.id)}
          >
            {section.title}
          </div>
          {activeSection === section.id && (
            <div className="content-section-body">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentArea;
