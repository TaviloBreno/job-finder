const express = require('express');
const job = require('../models/Job');
const router = express.Router();
const Job = require('../models/Job');

router.get('/test', (req, res) => {
    res.send("Deu certo!");
});

//adicionar job via post
router.post('/add', (req, res) => {
  let {title, salary, company, description, email, new_job} = req.body;

  //Insert
  Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));

});

module.exports = router

