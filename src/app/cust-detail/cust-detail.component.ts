import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../customer';

@Component({
  selector: 'app-cust-detail',
  templateUrl: './cust-detail.component.html',
  styleUrls: ['./cust-detail.component.css']
})
export class CustDetailComponent implements OnInit {
    @Input() cust: Customer;

    constructor() { }

    ngOnInit() {
    }

}
