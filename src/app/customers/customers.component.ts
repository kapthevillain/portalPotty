import { Component, OnInit } from '@angular/core';

import { CustomersService } from '../customers.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

    customers: any = [];
    selectedCustomer: Customer;
    selectedJobShow: Customer;
    jobss: any = [];

    constructor(private customersService: CustomersService) {}

    ngOnInit() {
      this.customersService.getAllCustomers().subscribe(customers => {
          this.customers = customers;
      });
    }

    onSelect(customer: Customer): void {
      this.selectedCustomer = customer;
    //   this.customersService.getCustomerJobs().subscribe()
    }

    onShowJobs(customer: Customer) {
        this.selectedJobShow = customer;
        // this.customersService.getCustomerJobs()
        console.log("hi " + this.selectedJobShow.cid);
        this.customersService.getCustomerJobs(this.selectedJobShow.cid).subscribe(jobss => {
            this.jobss = jobss;
        })
    }
}
