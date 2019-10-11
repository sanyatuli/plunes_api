//const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;
const Tokens = db.Tokens;
const request = require('request');
const Solutions = db.solutions;

var nodemailer = require('nodemailer');
var FCM = require('fcm-node');
//var serverKey = require('_helpers/firebase.json'); //put the generated private key path here    
//var fcm = new FCM(serverKey);
//zvar ObjectID = require('mongodb').ObjectID;

module.exports = {
    postquery
};



async function postquery(userParam,tokenheader)
{

    // var Post_Query = [];
     const user= new Solutions(userParam);

   /* var userName = userParam.userName;
    var userID = userParam.UserID;
   var professionalID = userParam.ProfessionalID;
    var userImage = userParam.userImage;
    var professionalName = userParam.ProfessionalName;
    var specialization = userParam.specialization;
    var image = userParam.image; */

    console.log(user);
     await user.save(
         function(err){
             if(err){
                 throw err;
             }
         }
     );

}


/* 
async function postquery(userParam, tokenheader) {

    var all_staff_data = [];

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    var all_staff = userParam.staff_name;
    var all_staff_array = all_staff.split('#');

    var all_staff_education = userParam.staff_education;
    var all_staff_education_array = all_staff_education.split('#');

    var all_staff_designation = userParam.staff_designation;
    var all_staff_designation_array = all_staff_designation.split('#');


    var all_staff_department = userParam.staff_department;
    var all_staff_department_array = all_staff_department.split('#');

    var all_staff_experience = userParam.staff_experience;
    var all_staff_experience_array = all_staff_experience.split('#');

    var all_staff_business_hours = userParam.staff_business_hours;
    var all_staff_business_hours_array = all_staff_business_hours.split('#');


    var all_images = userParam.staff_image_url;
    var all_images_array = all_images.split('#');


    for (var i = 0; i < all_staff_array.length; i++) {

        const image_response = await upload_image_bidding(all_images_array[i])

        all_staff_data.push({
            "staff_image_url": image_response.imageUrl,
            "staff_name": all_staff_array[i],
            "staff_education": all_staff_education_array[i],
            "staff_designation": all_staff_designation_array[i],
            "staff_department": all_staff_department_array[i],
            "staff_experience": all_staff_experience_array[i],
            "staff_business_hours": all_staff_business_hours_array[i]
        });


    }

    if (userParam.latitude !== '' && userParam.longitude !== '' && !!userParam.latitude && !!userParam.longitude) {
        var lat = parseFloat(userParam.latitude);
        var lon = parseFloat(userParam.longitude);
        var geoloc = [lon, lat];
        var geolocat =
            { "type": "Point", "coordinates": geoloc };

        user.geolocation = geolocat;
    }

    user.hospital_staff = all_staff_data;

    user.catalogue = await getMasterCatalogue(userParam.specialist);

    // // save user
    await user.save();


}
 */