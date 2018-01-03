import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Job } from '../../job';
import { CustomersService } from '../../customers.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

    job$: Observable<Job>;
    // job: Job;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private customersService: CustomersService
    ) {}

    ngOnInit() {
        this.job$ = this.route.paramMap.switchMap((params: ParamMap) => this.customersService.getJob(params.get('id')));
    }

}
