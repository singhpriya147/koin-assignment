import React from 'react';
import './DashboardNav.css'; // Import CSS file for styling

const DashboardNav = () => {
  return (
    <div className='dashboard-container-wrapper'>
      <div className='dashboard-container'>
        <div className='dashboard'>Overview</div>
        <div className='dashboard'>Fundamentals</div>
        <div className='dashboard'>Sentiments</div>
        <div className='dashboard'>Team</div>
        <div className='dashboard'>Technicals</div>
        <div className='dashboard'>Tokenomics</div>
      </div>
      <hr />
    </div>
  );
};

export default DashboardNav;
