import React, { useState } from "react";

const PortfolioForm = ({ onSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { fullName, contact, bio, photo };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Personal Information</h3>
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Contact Information"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <textarea
        placeholder="Short Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        required
      />
      <input
        type="file"
        accept=".jpg,.png"
        onChange={(e) => setPhoto(e.target.files[0])}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default PortfolioForm;
