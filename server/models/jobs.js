var dynamo = require("dynamodb");
var Joi = require("joi");
const AWS = require('aws-sdk');


//dynamo.AWS.config.loadFromPath('server/config.json');
dynamo.AWS.config.update({region: "us-west-2"});

var Job = dynamo.define("Job", {
    hashKey: "jobid",
    rangeKey: "startdate",
    schema: {
        jobid : Joi.string(),
        jobname : Joi.string(),
        startdate : Joi.date(),
        enddate : Joi.date(),
        address: Joi.string(),
        company: Joi.string(),
        phone: Joi.string(),
        lat: Joi.string(),
        long: Joi.string()
    },
    indexes : [{
        hashKey : 'company', rangeKey : 'startdate', name : 'CompanyNameIndex', type : 'global'
    }]
});

// dynamo.createTables()

module.exports = Job;
