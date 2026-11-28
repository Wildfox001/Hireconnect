import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('jobs');

  const sampleJobs = [
    { id: 1, title: 'Frontend React Developer', company: 'Qveto Tech', location: 'Remote', stipend: '₹6,000/mo' },
    { id: 2, title: 'Backend Node.js Intern', company: 'HireConnect Systems', location: 'Bangalore', stipend: '₹8,000/mo' },
    { id: 3, title: 'Full Stack Web Developer', company: 'CloudScale India', location: 'Remote', stipend: '₹10,000/mo' },
  ];

  return (
    <div>
      <nav className="navbar">
        <h2>HireConnect — Candidate Portal</h2>
        <div className="nav-links">
          <button className={activeTab === 'jobs' ? 'active' : ''} onClick={() => setActiveTab('jobs')}>
            Available Jobs
          </button>
          <button className={activeTab === 'login' ? 'active' : ''} onClick={() => setActiveTab('login')}>
            Login
          </button>
          <button className={activeTab === 'register' ? 'active' : ''} onClick={() => setActiveTab('register')}>
            Register
          </button>
        </div>
      </nav>

      <div className="container">
        {activeTab === 'jobs' && (
          <div>
            <h3>Available Job Openings</h3>
            <p style={{ marginBottom: '15px', color: '#64748b' }}>Browse and apply for latest roles</p>
            {sampleJobs.map((job) => (
              <div key={job.id} className="card job-card">
                <div>
                  <h4>{job.title}</h4>
                  <p>{job.company} • {job.location} • <strong>{job.stipend}</strong></p>
                </div>
                <button className="btn-primary" onClick={() => alert(`Applied for ${job.title}!`)}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'login' && (
          <div className="card" style={{ maxWidth: '450px', margin: '0 auto' }}>
            <h3 style={{ marginBottom: '15px' }}>Candidate Login</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Login UI Tested!'); }}>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="harshit@example.com" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Login</button>
            </form>
          </div>
        )}

        {activeTab === 'register' && (
          <div className="card" style={{ maxWidth: '450px', margin: '0 auto' }}>
            <h3 style={{ marginBottom: '15px' }}>Create Candidate Account</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Registration UI Tested!'); }}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Prince Kaushal" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="harshit@example.com" required />
              </div>
              <div className="form-group">
                <label>Skills (e.g. HTML, CSS, React)</label>
                <input type="text" placeholder="HTML, CSS, JavaScript" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Create a password" required />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Register</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
