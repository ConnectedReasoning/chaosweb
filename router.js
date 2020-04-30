'use strict';

const path = require('path');
const moment = require('moment');
const express = require('express');
const querystring = require('querystring');
const ApiDal = require('./apiDal');


const router = express.Router();

router.post('/saveSvg', (req, res, next) =>{
  const apiDal = new ApiDal();
  console.log('req.body.date is ', req.body.date);

  if(moment(req.body.date).isValid()){
    apiDal.saveSvg(req.body.file, req.body.date, req.body.type);
  } 
  res.status(200);
});
router.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
module.exports = router