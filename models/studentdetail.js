const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentdetail = new Schema({
    First_Name : {type: String, required: false},
    Last_Name :  {type: String, required: false},
    Status_Designation : {type: String, required: false},
    Mobile : {type: String, required: false},
    Email : {type: String, required: false},
    Profile_Summary: {type: String, required: false},
    USN: {type: String, required: false},
    DOB: {type: String, required: false},
    Gender: {type: String, required: false},
    Mother_Name: {type: String, required: false},
    Father_Name: {type: String, required: false},
    Spoken_Languages: {type: String, required: false},
    Written_Languages: {type: String, required: false},
    Present_Address: {type: String, required: false},
    Permanent_Address: {type: String, required: false},
    PAN_No: {type: String, required: false},
    Passport_No: {type: String, required: false},
    Aadhaar_No: {type: String, required: false},
    Career_Objective: {type: String, required: false},
    Academic_Qualification:[{
    tenth:[{
        GPA_age: {type: String, required: false},
        Board: {type: String, required: false},
        Institution: {type: String, required: false},
        Year_of_Passing: {type: String, required: false}
    }],
    PU:[{
        GPA_age: {type: String, required: false},
        Board: {type: String, required: false},
        Institution: {type: String, required: false},
        Year_of_Passing: {type: String, required: false}
    }],
    UG:[{
        GPA_age: {type: String, required: false},
        Branch: {type: String, required: false},
        Institution: {type: String, required: false},
        Year_of_Passing: {type: String, required: false},
    }]

    }],
    Interships:[{
        Company_name: {type: String, required: false},
        Description: {type: String, required: false},
        Duration:{type: String, required: false},
    }],
    Awards_and_Certifications:[{ 
        Type: {type: String, required: false},
        Name: {type: String, required: false},
        Description: {type: String, required: false},
        Date:{type: String, required: false}
    }],
    Projects: [{
        Title:{type: String, required: false},
        Summary:{type: String, required: false},
        Team_Size:{type: String, required: false},
        Role:{type: String, required: false},
        Duration:{type: String, required: false},
        Link:{type: String, required: false},
    }],  
    Technical_Skill:[{
        Skill:{type: String, required: false},
        Level:{type: String, required: false}
    }],
    Hobbies:[{
        title:{type: String, required: false},
        description:{type: String, required: false}
    }],
    Additional_info:[{
        title:{type: String, required: false},
        description:{type: String, required: false}
    }],
});
module.exports = mongoose.model('studentdetail', studentdetail);