import React from 'react';

function PortfolioPreview({ portfolioData }) {
  return (
    <div>
      <h2>Portfolio Preview</h2>
      <p>Name: {portfolioData.name}</p>
      <p>Title: {portfolioData.title}</p>
      <p>Skills: {portfolioData.skills.join(', ')}</p>
      <p>Work Experience: {portfolioData.workExperience.join(', ')}</p>
    </div>
  );
}

export default PortfolioPreview;
