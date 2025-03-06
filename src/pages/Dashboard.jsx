import React, { useEffect, useState } from 'react';
import { database } from '../services/firebaseConfig';
import { ref, get } from 'firebase/database';
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const [portfolioData, setPortfolioData] = useState(null);
  const history = useHistory();
  
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      history.push('/login');
      return;
    }

    // Fetch user portfolio data from Firebase
    get(ref(database, 'portfolio/' + userId)).then((snapshot) => {
      if (snapshot.exists()) {
        setPortfolioData(snapshot.val());
      } else {
        console.log('No data available');
      }
    });
  }, [history]);

  if (!portfolioData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Name: {portfolioData.name}</p>
      <p>Title: {portfolioData.title}</p>
      <p>Skills: {portfolioData.skills.join(', ')}</p>
      <p>Work Experience: {portfolioData.workExperience.join(', ')}</p>
    </div>
  );
}

export default Dashboard;
