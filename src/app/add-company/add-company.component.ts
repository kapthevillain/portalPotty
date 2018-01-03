import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

    @Input() showAddCompany: boolean;
    @Input() company: Customer;

  constructor(private customersService: CustomersService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  createCompany(company: Customer) {
    //   console.log(this.company);
      this.customersService.addCustomer(company).subscribe(data => {
          // console.log(data);
          this.company = data;
      });
  }
  // constructor(private modalService: NgbModal) {}

  open(content) {
      this.modalService.open(content);
  }
}
