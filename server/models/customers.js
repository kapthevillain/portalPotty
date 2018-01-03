var dynamo = require("dynamodb");
var Joi = require("joi");
const AWS = require('aws-sdk');


//dynamo.AWS.config.loadFromPath('server/config.json');
dynamo.AWS.config.update({region: "us-west-2"});

var Customer = dynamo.define("Customer", {
    hashKey: "company",
    // rangeKey: "cid",
    timestamps: true,
    schema: {
        cid: Joi.string(),
        name : Joi.string(),
        company : Joi.string(),
        email : Joi.string().email(),
        phone : Joi.string()
    },
    indexes : [{
        hashKey : 'cid', rangeKey : 'name', name : 'cidIndex', type : 'global'
    }]
});

module.exports = Customer;
