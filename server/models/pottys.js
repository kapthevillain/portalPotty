var dynamo = require("dynamodb");
var Joi = require("joi");
const AWS = require('aws-sdk');

//dynamo.AWS.config.loadFromPath('server/config.json');
dynamo.AWS.config.update({region: "us-west-2"});

var Potty = dynamo.define("Potty", {
    hashKey: 'pottyid',
    // rangeKey: '',
    schema: {
        pottyid: Joi.string(),
        status: Joi.string(),
        associatedjob: Joi.string(),
        associatedjobid: Joi.string(),
        condition: Joi.string(),
        maintenanceNotes: Joi.string(),
        lastpump: Joi.date(),
        delivered: Joi.date(),
        lat: Joi.string(),
        long: Joi.string()
    },
    indexes: [{
        hashKey : 'associatedjobid', rangeKey : 'lastpump', name : 'associatedJobIdIndex', type : 'global'
    }]
})

module.exports = Potty;
