import React, { useState, useEffect } from 'react';

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch employer's posted jobs
    fetch('/api/jobs/employer')
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <h2>Your Job Listings</h2>
      <div className="job-listings">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
      <button>Create New Job</button>
    </div>
  );
};

export default EmployerDashboard;
