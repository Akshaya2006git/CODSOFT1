import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/api/jobs')
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <h2>Job Openings</h2>
      <div className="job-listings">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobListings;
