import { useState } from "react";
import PortfolioForm from "./components/PortfolioForm";
import PortfolioPreview from "./components/PortfolioPreview";
import PDFGenerator from "./components/PDFGenerator";
import Auth from './components/Auth.jsx';

const App = () => {
  const [user, setUser] = useState(null);
  const [portfolioData, setPortfolioData] = useState(null);

  return user ? (
    <>
      <PortfolioForm user={user} setPortfolioData={setPortfolioData} />
      {portfolioData && <PortfolioPreview data={portfolioData} />}
      {portfolioData && <PDFGenerator data={portfolioData} />}
    </>
  ) : (
    <Auth setUser={setUser} />
  );
};

export default App;
