import React, { useState } from "react";

const SkillsSection = ({ onChange }) => {
  const [softSkills, setSoftSkills] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState("");

  const handleSave = () => {
    onChange({ softSkills, technicalSkills });
  };

  return (
    <div>
      <h3>Skills</h3>
      <input
        type="text"
        placeholder="Soft Skills"
        value={softSkills}
        onChange={(e) => setSoftSkills(e.target.value)}
      />
      <input
        type="text"
        placeholder="Technical Skills"
        value={technicalSkills}
        onChange={(e) => setTechnicalSkills(e.target.value)}
      />
      <button onClick={handleSave}>Save Skills</button>
    </div>
  );
};

export default SkillsSection;
