const express = require('express');
const usersRoute = express.Router();

// users model
let usersModel = require('../models/Users');

usersRoute.route('/getuser').get((req, res) => {
    usersModel.find().then((data, error) => {
     if (error) {
       return console.log(error)
     } else {
       res.json(data)
       console.log('good user')
     }
   })
 })

 usersRoute.route('/create-users').post((req, res) => {
    usersModel.create(req.body)
    .then((data, error) => {
      res.send(data)
      console.log(error)
    }
  )
  
});

usersRoute.route('/edit-users/:id').get((req, res) => {
   usersModel.findById(req.params.id).then((data, error) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update users
usersRoute.route('/update-users/:id').post((req, res, next) => {
  usersModel.findByIdAndUpdate(req.params.id,{
    $set: req.body
    
  }).then( (data, error) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('users successfully updated!')
    }
  })
})

// Delete users
usersRoute.route('/delete-users/:id').delete((req, res, next) => {
  usersModel.findByIdAndRemove(req.params.id).then( (data, error) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = usersRoute;