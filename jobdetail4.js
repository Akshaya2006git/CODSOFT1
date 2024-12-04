import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const [job, setJob] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/jobs/${id}`)
      .then((response) => response.json())
      .then((data) => setJob(data));
  }, [id]);

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetail;
