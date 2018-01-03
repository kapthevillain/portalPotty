import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/toPromise';

import { Job } from "./job";

@Injectable()
export class CustomersService {

    constructor(private http: Http) { }

    getAllCustomers() {
        return this.http.get("/api/customers").map(res => res.json());
    }

    getAllJobs(): Observable<Job[]> {
        // console.log(b);
        return this.http.get("/api/jobs").map(res => res.json());
    }

    getCustomerJobs(cid) {
        console.log(cid);
        return this.http.get("/api/customers/" + cid + "/jobs").map(res => res.json());
    }

    getJob(jobid: string | string) {
        return this.getAllJobs().map(jobslist => jobslist.find(job => job.jobid === jobid))
    }

    addJob(job){
        const body = job;
        console.log("in service: " + job.jobname);
        return this.http.post("/api/jobs", body).map(res => res.json());
    }

    addCustomer(company) {
        const body = company;
        console.log("In :" + company.company);
        return this.http.post("/api/customers", body).map(res => res.json());
    }

    getJobsPottys(jobid) {
        console.log(jobid);
        return this.http.get("/api/jobs/" + jobid + "/pottys" ).map(res => res.json());
    }

    getAvailablePottys() {
          return this.http.get("/api/pottys/available").map(res => res.json());
    }

    getAllPottys() {
        return this.http.get("/api/pottys").map(res => res.json());
    }
}
