import React, { useState } from "react";
import "../styles/accordion.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item" onClick={() => setIsActive(!isActive)}>
        <h2 className="accordion-header">
          <button
            class="accordion-button accordion-button-css"
            type="button"
            data-bs-toggle="collapse"
          >
            {title}
            {isActive ? "-" : "+"}
          </button>
        </h2>
        <div className="accordion-collapse collapse show">
          <div className="accordion-body">
            {isActive && <div className="accordion-body">{content}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
