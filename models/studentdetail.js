const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentdetailFormSchema = new Schema({
    First_Name : {},
    Last_Name : {},
    Status_Designation : {},
    Mobile : {},
    Email : {},
    Profile_Summary: {},
    USN: {},
    DOB: {},
    Gender: {},
    Mother_Name: {},
    Father_Name: {},
    Spoken_Languages: {},
    Written_Languages: {},
    Present_Address: {},
    Permanent_Address: {},
    PAN_No: {},
    Passport_No: {},
    Aadhaar_No: {},
    Career_Objective: {},
    Academic_Qualification:[{
    tenth:[{
        GPA_age: {},
        Board: {},
        Institution: {},
        Year_of_Passing: {}
    }],
    PU:[{
        GPA_age: {},
        Board: {},
        Institution: {},
        Year_of_Passing: {}
    }],
    UG:[{
        GPA_age: {},
        Branch: {},
        Institution: {},
        Year_of_Passing: {},
    }]

    }],
    Interships:[{
        Company_name: {},
        Description: {},
        Duration:{},
    }],
    Awards_and_Certifications:[{ 
        Type: {},
        Name: {},
        Description: {},
        Date:{}
    }],
    Projects: [{
        Title:{},
        Summary:{},
        Team_Size:{},
        Role:{},
        Duration:{},
        Link:{},
    }],  
    Technical_Skill:[{
        Skill:{},
        Level:{}
    }],
    Hobbies:[{
        title:{},
        description:{}
    }],
    Additional_info:[{
        title:{},
        description:{}
    }],


});
module.exports = mongoose.model('studentdetail', studentdetailSchema);