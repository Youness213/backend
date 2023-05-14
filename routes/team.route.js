const express = require('express');
const teamRoute = express.Router();

// Team model
let TeamModel = require('../models/Teams');

teamRoute.route('/getTeam').get((req, res) => {
    TeamModel.find().then((data, error) => {
      if (error) {
        return console.log(error)
      } else {
        res.json(data)
      }
    })
 })


 teamRoute.route('/create-Team').post((req, res, next) => {
    TeamModel.create(req.body)
    .then((data, error) => {
      if (error) {
        return next(error)
      } else { 
        res.send(data)
    }
    }
  )
});

teamRoute.route('/edit-Team/:id').get((req, res, next) => {
   TeamModel.findById(req.params.id).then((data, error) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Team
teamRoute.route('/update-Team/:id').post((req, res, next) => {
  TeamModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }).then( (data, error) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
    }
  })
})

// Delete Team
teamRoute.route('/delete-Team/:id').delete((req, res, next) => {
  TeamModel.findByIdAndRemove(req.params.id).then( (data, error) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = teamRoute;