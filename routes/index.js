var express = require('express');
var router = express.Router();
const Person = require("../models/studentdetail");
var mongoose = require('mongoose');
const puppeteer = require('puppeteer')
const fs = require('fs-extra')
var ejs = require('ejs')
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hey there")
  // Person.findById("5e6386176c09c80ee39aa544", (err, people) => {
  //   if (err) return console.log(err)
  //   var resumedetail = {}
  //   console.log(people)
  //   resumedetail.First_Name= people.First_Name  
  //   resumedetail.Last_Name= people.Last_Name   
  //     return resumedetail
  
  // });
  Person.find({First_Name:"s"})
 .then((doc)=>{
  //  console.log(doc.First_Name)
      const data =  doc[0].First_Name
      console.log(doc);
      const compile = async function(templateName, data) {
        // console.log(data)
        console.log("puppet")
        const filePath = path.join(process.cwd(),'views' , 'index.ejs');
        const html = await fs.readFile(filePath, 'utf-8');
        return ejs.compile(html)(data);
      }
      
      const temp = (async function(){
        try {
          console.log(data)
          console.log("puppet 2")
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          const content = await compile('index' , data); //resume details
          await page.setContent(content)
          await page.emulateMedia('screen')
          await page.pdf({
            path:'mypdf.pdf',
            format:'A4',
            printBackground:true
          });
          console.log("done")
          await browser.close();
          // process.exit();
        }catch(e) {
          console.log('our error', e);
        }
      })();
      res.render('index',{data:data});
 })
.catch((err)=>{
    console.log(err);
});

});

module.exports = router;