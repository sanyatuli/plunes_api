const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const secondsSinceEpoch = parseInt(new Date().getTime()/1000);  

const schema = new Schema({

  //  Parentid   : { type: String },
    Query : { type: String},
    Username : { type: String, default : "" },
    Currtime : { type: String, default : "" },
    Profusername: { type: String , default : ""},
	ProfessionalID: { type: String},
	Commentcount: { type: Number },
	Appretiate : { type: Number},
	Solutionid: { type: String },
    //ImageUrl: { type: String },
    //UserID: {type : String }

}, { collection : 'solutions_testing' } );

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Solutions', schema);



/*
content in request
“username”: user_name,
“image”: base64_image,
“professionalname”: p_name,
“userid”: user_id,
“professionalid”: p_id,
“ImageUrl”: user_image,
“specialization”: p_speciality



*/






