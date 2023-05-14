const express = require('express');
const projectRoute = express.Router();

// project model
let projectModel = require('../models/Project');

projectRoute.route('/getproject').get((req, res) => {
    projectModel.find().then((data, error) => {
      if (error) {
        return console.log(error)
      } else {
        res.json(data)
      }
    })
 })

 projectRoute.route('/create-project').post((req, res, next) => {
    projectModel.create(req.body)
    .then((data, error) => {
      if (error) {
        return next(error)
      } else { 
        res.send(data)
    }
    }
  )
});

projectRoute.route('/edit-project/:id').get((req, res, next) => {
   projectModel.findById(req.params.id).then((data, error) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update project
projectRoute.route('/update-project/:id').post((req, res, next) => {
  projectModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }).then( (data, error) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
    }
  })
})

// Delete project
projectRoute.route('/delete-project/:id').delete((req, res, next) => {
  projectModel.findByIdAndRemove(req.params.id).then( (data, error) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = projectRoute;