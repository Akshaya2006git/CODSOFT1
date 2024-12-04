import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';

const Home = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    fetch('/api/jobs/featured')
      .then((response) => response.json())
      .then((data) => setFeaturedJobs(data));
  }, []);

  return (
    <div>
      <h1>Welcome to the Job Board!</h1>
      <h2>Featured Jobs</h2>
      <div className="job-listings">
        {featuredJobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;
