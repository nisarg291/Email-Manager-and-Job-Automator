import React from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="stats-cards">
                <div className="card">
                    <h2>Total Emails</h2>
                    <p>500</p>
                </div>
                <div className="card">
                    <h2>Total Applications</h2>
                    <p>25</p>
                </div>
                <div className="card">
                    <h2>Pending Emails</h2>
                    <p>15</p>
                </div>
                <div className="card">
                    <h2>Interviews Scheduled</h2>
                    <p>5</p>
                </div>
            </div>
            <div className="recent-emails">
                <h2>Recent Emails</h2>
                <ul>
                    <li>Email 1</li>
                    <li>Email 2</li>
                    <li>Email 3</li>
                    <li>Email 4</li>
                </ul>
            </div>
            <div className="job-applications">
                <h2>Job Applications</h2>
                <ul>
                    <li>Application 1</li>
                    <li>Application 2</li>
                    <li>Application 3</li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardPage;