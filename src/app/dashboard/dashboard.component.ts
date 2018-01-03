import { Component, OnInit, AfterContentInit } from '@angular/core';

import { Job } from '../job';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

    private map: any;
    showJobForm: boolean;
    showCompanyForm: boolean;

    selectedjob: Job;
    selectedCompany: Customer;
    customers: any = [];

    alb = { lat: 35.104743, lng: -106.629181 };

    constructor(private customersService: CustomersService) { }

    ngOnInit() {
    }

    selectJob(job: Job) {
        this.selectedjob = job;
    }

    selectCustomer(company: Customer) {
        this.selectedCompany = company;
    }

    toggleJobCreate() {
        if (this.showCompanyForm) {this.showCompanyForm = !this.showCompanyForm;}

        this.showJobForm = !this.showJobForm;
        var job = new Job(this.ID(), '','','','','','','','');
        this.selectJob(job);

    }

    toggleCompanyCreate() {
        if (this.showJobForm) {this.showJobForm = !this.showJobForm;}

        this.showCompanyForm = !this.showCompanyForm;
        var company = new Customer(this.ID(), '','','','');
        this.selectCustomer(company);
    }

    ID() {
      return '_' + Math.random().toString(36).substr(2, 9);
    }

    mapReady() {
        this.map = new google.maps.Map(document.getElementById('mappp'), {
            zoom: 7,
            center: this.alb
        });
    }
    
    ngAfterViewInit() {
        (<any>window).googleMapsReady=this.mapReady.bind(this);
        var script = document.createElement("script");
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-NMWUNyZMe8i-1Twvn8UVXByuaZuGqFw&callback=googleMapsReady";
    }
}
