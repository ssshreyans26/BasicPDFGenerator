var express = require('express');
var router = express.Router();
const Person = require("../models/studentdetail");
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// console.log(student_Form.find())
router.get('/test', function(req,res,next){
  var fn,ln,sd,mo,em
  // student_Form.find((err, user) => {
  //   if (err) return res.status(500).send(err)
  //    a=[
  //    fn = user.First_Name, 
  //    ln=user.Last_Name]
  //    console.log(user)
  //   return res.status(200).send(user)
  // });
  Person.find((err, people) => {
    // Note that this error doesn't mean nothing was found,
    // it means the database had an error while searching, hence the 500 status
    if (err) return res.status(500).send(err)
    else{
      a=[
        people[0].First_Name, 
        people[0].Last_Name]
       return res.status(200).send(a);
    }
    // send the list of all people
    
    
    
});
})
module.exports = router;