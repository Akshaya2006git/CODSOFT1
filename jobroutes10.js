const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// Fetch all jobs
router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Apply to a job
router.post('/:id/apply', async (req, res) => {
  // Handle job application logic (e.g., storing resume)
});

module.exports = router;
