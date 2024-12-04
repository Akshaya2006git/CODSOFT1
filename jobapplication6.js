import React, { useState } from 'react';

const JobApplicationForm = ({ jobId }) => {
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('message', message);

    fetch(`/api/jobs/${jobId}/apply`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => alert('Application Submitted!'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your cover letter"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="file" onChange={handleResumeUpload} />
      <button type="submit">Apply</button>
    </form>
  );
};

export default JobApplicationForm;
