// import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { CustomersService } from '../customers.service';
import { Job } from '../job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

    jobs$: Observable<Job[]>;
    // jobs: any = [];
    selectedJobId: string;
    selectedJob: Job;

    // private selectedId: number;

  constructor(
      private customersService: CustomersService,
      private route: ActivatedRoute
    //   private router: Router
  ) { }

  ngOnInit() {
    //   this.jobs = this.customersService.getAllJobs();
    //   this.customersService.getAllJobs().subscribe(jobs => {
    //       this.jobs = jobs;
    //   })
    this.jobs$ = this.route.paramMap.switchMap((params: ParamMap) => {
        // console.log("hit!!!" + params.key());
        // this.selectedJob.jobid = "_44nrq5y7j";
          this.selectedJobId = params.get('id');
          return this.customersService.getAllJobs();
      });
    //   this.jobs = this.route.params.map(params => params['id']).switchMap(id => this.customersService.getJob(id)).subscribe(job => this.jobs = job);
  }

  goToJob(job :Job) {
      this.selectedJob = job;
      console.log("This Job: " + this.selectedJob.jobname);

  }

}
