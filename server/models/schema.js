"use strict";

const mongoose = require('mongoose')
const assert = require('assert')
const validate = require('mongoose-validator').validate;

let dbConnection = mongoose.createConnection('mongodb://localhost:27017/test')

//let dbConnection = mongoose.createConnection('mongodb://abhinavr8:gooner.8@ds139072.mlab.com:39072/abhinavr8')
let schema = mongoose.Schema
let ObjectId = schema.ObjectId;
//let secret = 'abcd'

let patientSchema = new schema({

	id: {
		type: ObjectId
	},
	patient_id: {
		type: String,
		required: [true, 'Name required']
		unique: true
	},
	name : {
		type: String,
		required: [true, 'Name required'],
		validate: validate('len', 1, 50)
	},
	mName : {
		type: String,
		validate: validate('len', 1, 15)
	}
	lName : {
		type: String,
		required: [true, 'Last name required'],
		validate: validate('len', 1, 50)
	}
	ssn : {
		type: String,
	    validate: validate('len', 1, 20)	
	},
	dob : {
		type: Date,
		required : [true, 'Date required']
	},
	gender : {
		type: String,
		required : [true, 'Gender required'],
	    validate: validate('len', 1, 25)	
	}
	maritalStatus : {
		type : String,
		required : [true, 'Marital status required'],
	    validate: validate('len', 1, 15)
	},
	address1 : {
		type: String,
	    validate: validate('len', 1, 250)
	},
	address2 : {
		type: String,
	    validate: validate('len', 1, 50)
	},
	city : {
		type: String,
	    validate: validate('len', 1, 50)
	},
	state : {
		type: String,
	    validate: validate('len', 1, 50)
	},
	country : {
		type: String,
	    validate: validate('len', 1, 50)
	},
	zip_code : {
		type: String,
	    minLength : 1,
	    maxLength : 15
	},
	email : {
		type: String,
	    minLength : 1,
	    maxLength : 50
	},
	phone : {
		type: Number,
	    minLength : 1,
	    maxLength : 16
	},
	fax : {
		type: String,
		minLength : 1,
	    maxLength : 50
	},
	username : {
		type: String,
		required : [ true, 'Username required'],
	    minLength : 1,
	    maxLength : 50,
	    unique : true
	},
	password : {
		type: String,
		required : [ true, 'Password required'],
	    minLength : 1,
	    maxLength : 50
	},
	photo : {
		type: String,
		data: Buffer

		/*
		https://stackoverflow.com/questions/27367611/displaying-images-in-angular-js-from-mongodb

		exports.createAvatar = function (req, res) {
		var avatar = {
		        data: req.body.data.image, // see below
		        contentType:'image/png'
		    }

		models.DUser
		        .findById(index.findUserId(req))
		        .exec(
		        function (err, user) {
		user.avatar = avatar;
		user.save(function (err, user) { });
		*/
		/*	multiple image resizing

		<input type="file" accept="image/*" multiple
    	image="images"
	    resize-max-height="300"
	    resize-max-width="250"
	    resize-quality="0.7" />
		Originals <img ng-repeat="img in images" ng-src="{{img.url}}" type="{{img.file.type}}" />
		Resized <img ng-repeat="img in images" ng-src="{{img.resized.dataURL}}" />*/
	},
	date_created : {
		type: Date
	},
	created_by : {
		type: String,
		minLength : 1,
	    maxLength : 30
	},
	date_modified : {
		type: Date
	},
	modified_by : {
		type: String,
		minLength : 1,
	    maxLength : 30	
	}

});

patientSchema.virtual('patient_id').get(function() {
    return this._id;
});

/*
var User = mongoose.model('User', userSchema);
User.findOne(function(err, doc) {
    console.log(doc.email);
});
var obj = doc.toObject({ virtuals: true });
var json = doc.toJSON({ virtuals: true });
*/


let discreteAttributeSchema = new Schema({
	discrete_attribute_id: {
		type: ObjectId,
		unique: true
	},
	attribute_name : {
		type: String,
		minLength: 1,
		maxLength: 30,
		required: [ true, 'Attribute name required' ]
	}
	attribute_value : {
		type: String,
		minLength: 1,
		maxLength: 250,
		required: [ true, 'Attribute name required' ]
	},
	date_created : {
		type: Date,
		required: [ true, 'Date required']
	}
	created_by : {
		type: String,
		minLength: 1,
		maxLength: 30,
		required: [ true, 'Author name required' ]
	},
	date_modified : {
		type: Date
	}
	modified_by :{
		type: String,
		minLength: 1,
		maxLength: 30
	}
})

atientSchema.virtual('discrete_attribute_id').get(function() {
    return this._id;
});

/*
var User = mongoose.model('User', userSchema);
User.findOne(function(err, doc) {
    console.log(doc.email);
});
var obj = doc.toObject({ virtuals: true });
var json = doc.toJSON({ virtuals: true });
*/

module.exports = patientSchema, discreteAttributeSchema