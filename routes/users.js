// var express = require('express');
// var router = express.Router();
// var passport = require('passport');
// var User = require('../models/user');
// var Verify = require('./verify');
//
//
// /* GET users listing. */
// router.get('/user_info', function (req,res,next) {
//
//     User.find({},function(err, user) {
//         if (err) throw err;
//         res.json(user);
//     });
// });
//
//
// router.post('/register', function(req, res) {
//     User.register(new User({username : req.body.username}),
//         req.body.password, function (err, user) {
//             if (err){
//                 return res.status(500).json({err: err});
//             }
//             if (req.body.firstName){
//                 user.firstName = req.body.firstName;
//             }
//             if (req.body.lastName){
//                 user.lastName = req.body.lastName;
//             }if (req.body.phone_number){
//                 user.phone_number = req.body.phone_number;
//             }if (req.body.gender){
//                 user.gender = req.body.gender;
//             }if (req.body.email){
//                 user.email = req.body.email;
//             }if (req.body.dateOfBirth){
//                 user.dateOfBirth = req.body.dateOfBirth;
//             }if (req.body.address){
//                 user.address = req.body.address;
//             }
//             user.save(function (err) {
//                 passport.authenticate('local')(req, res, function () {
//                     return res.status(200).json({status: 'Registration Successful!'});
//             });
//                 if (err) throw err;
//         });
//     });
// });
//
//
// router.post('/login', function(req, res) {
//     passport.authenticate('local', function(err, user, info){
//         if (err){
//             return next(err);
//         }
//         if (!user){
//             return res.status(401).json({
//                 err: info
//             });
//         }
//         req.logIn(user, function(err){
//             if (err){
//                 return res.status(500).json({
//                     err: 'could not log in user'
//                 });
//             }
//
//             console.log('User in users: ', user);
//
//             var token = Verify.getToken(user);
//
//             res.status(200).json({
//                 status: 'Login successful',
//                 success: true,
//                 token: token
//             });
//         });
//     })(req , res);
// });
//
// router.get('/logout', function (req, res) {
//     req.logout();
//     res.status(200).json({
//         status: 'Bye!'
//     });
// });
//
//
// router.put('/editProfile', Verify.verifyOrdinaryUser, function (req, res,next) {
//     User.findByIdAndUpdate(req.params.userTd, {
//         $set: req.body
//     }, {
//         new: true
//     }, function (err, user) {
//         if (err) throw err;
//
//         res.json(user);
//     });
// });
//
//
//  module.exports = router;
