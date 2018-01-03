import { Component, OnInit } from '@angular/core';

import { CustomersService } from '../customers.service';

@Component({
 selector: 'app-pottys',
 templateUrl: './pottys.component.html',
 styleUrls: ['./pottys.component.css']
})
export class PottysComponent implements OnInit {

   pottys: any = [];

 constructor(private customersService: CustomersService) { }

 ngOnInit() {
     this.customersService.getAllPottys().subscribe(pottys => {
         this.pottys = pottys;
     });
 }
}