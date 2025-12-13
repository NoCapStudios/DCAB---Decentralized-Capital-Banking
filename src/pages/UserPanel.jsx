import { NavLink } from "react-router";
import { useState } from "react";
import "./UserPanel.css";

export function UserPanel() {
  const [application, setApplication] = useState(true);

  function AdminResponse() {
    if (application) {
      return (
        <div className="panel-card">
          <h2>Next Steps</h2>
          <ul>
            <li>We are reviewing your application</li>
            <li>You’ll receive an email update</li>
            <li>Typical response: 24–48 hours</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="panel-card">
          <h2>Review Submission</h2>
          <ul>
            <li>Your application has been rejected.</li>
            <li>You’ll receive an email update about why</li>
            <li>
              Resubmit your application here if you've entered wrong information
              or contact us directly
            </li>
          </ul>
        </div>
      );
    }
  }
  return (
    <div className="user-panel">
      <header className="user-panel-header">
        <h1>Welcome to Your Dashboard</h1>
        <p>Your request has been submitted successfully.</p>
      </header>

      <section className="user-panel-cards">
        <div className="panel-card">
          <h2>Application Status</h2>
          <p className="status pending">Pending Review</p>
        </div>

        <div className="panel-card">
          <h2>Requested Amount</h2>
          <p className="amount">$5,000</p>
        </div>
      </section>

      <footer className="user-panel-footer">
        <NavLink to="/" className="panel-link">
          Start a New Request
        </NavLink>
      </footer>
    </div>
  );
}
