const express = require("express");
const router = express.Router();
const path = require("path");
const custController = require("../controllers/cust.controller");
const jobController = require("../controllers/job.controller");
const pottyController = require("../controllers/potty.controller");

module.exports = router;

// const jobid = "http://localhost:8080/customers";

router.get('/', function(req, res, next){
    res.send("did it");
});

router.get('/customers', custController.showCustomers);
router.get('/customers/:cid', custController.showSingleCustomer);
router.post('/customers', custController.createCustomer);
router.get('/customers/:cid/jobs', custController.showCustomerJobs);

router.get('/jobs', jobController.showJobs);
router.get('/jobs/:jobid', jobController.showSingleJob);
router.get('/jobs/:jobid/pottys', jobController.showJobPottys);
router.post('/jobs', jobController.createJob);


router.get('/pottys', pottyController.showPottys);
router.get('/pottys/available', pottyController.showAvailablePottys);
router.get('/pottys/in-use', pottyController.showInUsePottys);


router.get('/load', custController.loadData);
router.get('/load/tables', custController.loadTables);

// router.get("*", function(req, res){
//     res.sendFile(path.resolve(__dirname, "../../dist/index.html"));
// });
