import React, { useState } from "react";
import Auth from "./components/Auth";
import PortfolioForm from "./components/PortfolioForm";
import SkillsSection from "./components/SkillsSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import PDFGenerator from "./components/PDFGenerator";
import { savePortfolioData } from "./services/databaseService";

const App = () => {
  const [user, setUser] = useState(null);
  const [portfolioData, setPortfolioData] = useState({});

  const handlePortfolioDataChange = (data) => {
    setPortfolioData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmitPortfolio = () => {
    savePortfolioData(portfolioData);
  };

  return (
    <div>
      {!user ? (
        <Auth setUser={setUser} />
      ) : (
        <div>
          <h1>Create Your Portfolio</h1>
          <PortfolioForm onSubmit={handlePortfolioDataChange} />
          <SkillsSection onChange={handlePortfolioDataChange} />
          <WorkExperienceSection onChange={handlePortfolioDataChange} />
          <PDFGenerator portfolioData={portfolioData} />
          <button onClick={handleSubmitPortfolio}>Submit Portfolio</button>
        </div>
      )}
    </div>
  );
};

export default App;
