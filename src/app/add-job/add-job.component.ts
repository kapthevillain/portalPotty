import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Job } from '../job';
import { CustomersService } from '../customers.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
// export class AddJobComponent {

    @Input() showAddJob: boolean;
    @Input() job: Job;
    @Input() customers;
    // customers: any = [];
    checkedOnce: false;

    constructor(private customersService: CustomersService, private modalService: NgbModal) { }

    ngOnInit() {
        this.customersService.getAllCustomers().subscribe(customers => {
          this.customers = customers;
        });
        this.job;
    }

    getCustomers() {
        this.customersService.getAllCustomers().subscribe(customers => {
          this.customers = customers;
        });
    }

    createJob(job: Job){
        console.log(this.job);
        this.customersService.addJob(job).subscribe(data => {
            console.log(data);
            this.job = data;
        });
    }

    // constructor(private modalService: NgbModal) {}

    open(content) {
        this.modalService.open(content);
    }

    // private getDismissReason(reason: any): string {
    // if (reason === ModalDismissReasons.ESC) {
    //     return 'by pressing ESC';
    // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //     return 'by clicking on a backdrop';
    // } else {
    //     return  `with: ${reason}`;
    // }
    // }

}
