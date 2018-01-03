const Job = require("../models/jobs.js");
const Potty = require("../models/pottys");

var gMapClient = require("@google/maps").createClient({
    key: 'AIzaSyB-NMWUNyZMe8i-1Twvn8UVXByuaZuGqFw'
})

module.exports = {
    showJobs: showJobs,
    showSingleJob: showSingleJob,
    showJobPottys: showJobPottys,
    createJob: createJob
};

function showJobs(req, res) {
    Job.scan().loadAll().exec(onScan);

    function onScan(err, data) {
        if (err) {console.error("Unable to scan the table. Error JSON: ", JSON.stringify(err,null,2));}
        else {
            console.log("Job Scan succeeded.");
            res.status(200).json(data.Items);
        }
    }
}

function showSingleJob(req, res) {
    Job.query(req.params.jobid).exec(callback);
    function callback(err, data) {
        if (err) {console.error("Unable to query: ", JSON.stringify(err,null,2));}
        else {
            console.log("Great Success!!!!");
            res.status(200).json(data.Items);
        }
    }
}

function showJobPottys (req, res) {
    // console.log(req.params.jobid);
    Potty.query(req.params.jobid).usingIndex('associatedJobIdIndex').exec(callback);

    function callback (err, data) {
        if (err) {console.error("Unable to scan the table. Error JSON: ", JSON.stringify(err,null,2));}
        else {
            console.log("Grabbed all pottys for job");
            res.status(200).json(data.Items);
        }
    }
}

// const body = { jobid: 'rando', jobname: "Joe Dirt", startdate: "10/03/2017", enddate: "7/1/18", address: "123 Main Street Albuquerque, NM", company: "Null Productions"};

function createJob(req, res) {
    console.log(req.body);
    var newJob = new Job(req.body);
    // console.log(req.body.address);
    // console.log("lat: ", newJob.attrs.lat);
    // console.log("long: ", newJob.attrs.long);
    gMapClient.geocode(
        { address: req.body.address }, (err, res) => {
            if(!err) {
                console.log(res.json.results[0].geometry.location);
                newJob.attrs.lat = (res.json.results[0].geometry.location.lat).toString();
                newJob.attrs.long = (res.json.results[0].geometry.location.lng).toString();
            }
            // console.log("lat: ", newJob.attrs.lat);
            // console.log("long: ", newJob.attrs.long);
            // console.log(newJob.attrs);

            newJob.save((err) => {
                if(err) {"Error:", err}
                console.log("New Job created!", newJob.get("jobid"));
            });
    });

    console.log("THIS JUST HAPPENED " + newJob);
    // newJob.save(function err() {
    //     console.log("New Job created!", newJob.get("jobid"));
    // });
}
