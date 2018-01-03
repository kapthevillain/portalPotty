const Customer = require("../models/customers");
const Job = require("../models/jobs");
const Potty = require("../models/pottys");


// var docClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
    showCustomers: showCustomers,
    showSingleCustomer: showSingleCustomer,
    showCustomerJobs: showCustomerJobs,
    createCustomer: createCustomer,
    loadData: loadData,
    loadTables: loadTables
}

function showCustomers(req, res) {
    Customer.scan().loadAll().exec(onScan);

    function onScan(err, data) {
        if (err) {console.error("Unable to scan the table. Error JSON: ", JSON.stringify(err,null,2));}
        else {
            console.log("Customer Scan succeeded.");
            res.status(200).json(data.Items);
        }
    }
}

function showSingleCustomer(req, res) {
    Customer.query(req.params.cid).usingIndex('cidIndex').exec(callback);
    console.log("here we go! " + req.params.cid);
    function callback(err, data) {
        if (err) {console.log("Unable to query: ", JSON.stringify(err,null,2));}
        else{
            console.log("Great Success!");
            res.status(200).json(data.Items);
        }
    }
}

function showCustomerJobs(req, res) {
    console.log("hello out there");

    Customer.query(req.params.cid).usingIndex('cidIndex').exec(callback);
    function callback(err, data) {
        if (err) {console.log("Unable to query: ", JSON.stringify(err,null,2));}
        else{
            var companyName = data.Items[0].attrs.company;
            Job.query(companyName).usingIndex('CompanyNameIndex').exec(onQuery);

            function onQuery(err, dat) {
                if (err) {console.log("Unable to query: ", JSON.stringify(err,null,2));}
                else {
                    console.log("Great Success!");
                    res.status(200).json(dat.Items);
                }
            }
        }
    }
}

function createCustomer(req, res) {
    console.log(req.body);
    var newCust = new Customer(req.body);
    newCust.save(function (err) {
        console.log("New Customer created: ", newCust.get("cid"));
    })
}




function loadData(req, res) {
    var custs = [
        { cid: ID(), name: "Ed Edward", company: "Jackie Treehorn Productions", email: "jtprod@films.com", phone: "505-666-8888"},
        { cid: ID(), name: "Don Donald", company: "Null Productions", email: "nulltwo@films.com", phone: "505-597-8855"},
        { cid: ID(), name: "Jim James", company: "Hawk Productions", email: "hawk@films.com", phone: "818-777-2355"},
        { cid: ID(), name: "Ed Edward", company: "Jackie Treehorn Productions", email: "jtprod@films.com", phone: "702-432-1322"}
    ];

    var jobtabledata = [
        { jobid: ID(), jobname: "Forrest Gump", startdate: "10/31/2017", enddate: "12/25/17", address: "150 Woodward SW Albuquerque, NM", company: "Jackie Treehorn Productions"},
        { jobid: ID(), jobname: "Forrest Gump", startdate: "11/03/2017", enddate: "2/25/18", address: "5702 B Isleta Blvd SW Albuquerque, NM", company: "Jackie Treehorn Productions"},
        { jobid: ID(), jobname: "Her", startdate: "1/12/2018", enddate: "12/16/18", address: "1200 Central Ave Albuquerque, NM", company: "Null Productions"},
        { jobid: ID(), jobname: "The Godfather", startdate: "10/31/2017", enddate: "2/01/19", address: "231 Coors Blvd Albuquerque, NM", company: "Hawk Productions"},
        { jobid: ID(), jobname: "Nemo", startdate: "9/09/2018", enddate: "3/19/19", address: "231 Tramway Blvd Albuquerque, NM", company: "Jackie Treehorn Productions"}
    ]

    // pottyid: Joi.string(),
    // status: Joi.string(),
    // associatedjob: Joi.string(),
    // associatedjobid: Joi.string(),
    // condition: Joi.string(),
    // lastpump: Joi.string(),
    // delivered: Joi.date(),
    // lat: Joi.string(),
    // long: Joi.string()

    var notset = "n/a";

    var pottydata = [
        { pottyid: '1', status: 'in-use', associatedjob: 'Her', associatedjobid: '_wg8pjtnse', condition: 'needs clean', lastpump: '10/15/2018', delivered: '10/31/18'},
        { pottyid: '2', status: 'in-use', associatedjob: 'Forrest Gump', associatedjobid: '_0yaorqie9', condition: 'needs clean', lastpump: '11/15/2017', delivered: '11/02/17'},
        { pottyid: '3', status: 'in-use', associatedjob: 'The Godfather', associatedjobid: '_65m4xh2k4', condition: 'needs clean', lastpump: '11/1/2017', delivered: '10/31/17'},
        { pottyid: '4', status: 'in-use', associatedjob: 'Her', associatedjobid: '_wg8pjtnse', condition: 'clean', lastpump: '1/18/2018', delivered: '10/31/18'},
        { pottyid: '5', status: 'in-use', associatedjob: 'Nemo', associatedjobid: '_65m4xh2k4', condition: 'needs toliet paper', lastpump: '9/12/2018', delivered: '9/9/18'},
        { pottyid: '6', status: 'in-use', associatedjob: 'Forrest Gump', associatedjobid: '_0yaorqie9', condition: 'needs hand soap', lastpump: '11/20/2017', delivered: '11/03/17'},
        { pottyid: '7', status: 'in-use', associatedjob: 'Nemo', associatedjobid: '_65m4xh2k4', condition: 'clean', lastpump: '10/10/2018', delivered: '9/10/17'},
        { pottyid: '8', status: 'in-use', associatedjob: 'Forrest Gump', associatedjobid: '_m7b5dy22d', condition: 'needs pumping', lastpump: '11/5/2017', delivered: '10/30/17'},
        { pottyid: '9', status: 'in-use', associatedjob: 'The Godfather', associatedjobid: '_65m4xh2k4', condition: 'needs maintenance', lastpump: '10/15/2017', delivered: '10/10/17'},
        { pottyid: '10', status: 'available', condition: 'clean'},
        { pottyid: '11', status: 'available', condition: 'needs clean'},
        { pottyid: '12', status: 'available', condition: 'clean'},
        { pottyid: '13', status: 'available', condition: 'clean'},
        { pottyid: '14', status: 'available', condition: 'needs clean'},
        { pottyid: '15', status: 'available', condition: 'clean'}
    ]

    // for (c of custs) {
    //     var acust = new Customer(c);
    //     acust.save(function(err){
    //         console.log('created Customer in DynamoDB', acust.get("company"));
    //     })
    // }
    //
    // for (j of jobtabledata) {
    //     var ajob = new Job(j);
    //     ajob.save(function(err){
    //         console.log("created job in DynamoDB", ajob.get("startdate"));f
    //     })
    // }

    for (p of pottydata) {
        var apotty = new Potty(p);
        apotty.save(function(err){
            console.log('created Pottys in DynamoDB', apotty.get("status"));
        })
    }
    // console.log('created account in DynamoDB');
    res.send("Data loaded to Tables");
}

function loadTables(req, res) {
    var dynamo = require("dynamodb");
    dynamo.createTables(function(err){
        // "Customer": {},
        if (err) {console.log("error: ", err);}
        else {console.log("Table Created");}
    })
    res.send("Tables Created");
}

var ID = function(){
    return '_' + Math.random().toString(36).substr(2, 9);
}
