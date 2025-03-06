import React, { useState } from "react";

const WorkExperienceSection = ({ onChange }) => {
  const [company, setCompany] = useState("");
  const [duration, setDuration] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const handleSave = () => {
    onChange({ company, duration, responsibilities });
  };

  return (
    <div>
      <h3>Work Experience</h3>
      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Job Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <textarea
        placeholder="Job Responsibilities"
        value={responsibilities}
        onChange={(e) => setResponsibilities(e.target.value)}
      />
      <button onClick={handleSave}>Save Work Experience</button>
    </div>
  );
};

export default WorkExperienceSection;
