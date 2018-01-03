import { Component, Input, OnInit } from '@angular/core';

import { CustomersService } from '../../../customers.service';
import { DragulaModule, DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-available-pottys',
  templateUrl: './available-pottys.component.html',
  styleUrls: ['./available-pottys.component.css']
})
export class AvailablePottysComponent implements OnInit {

    @Input() showAvailablePottys: boolean;

    availablePottys: any = [];

    constructor(
        private customersService: CustomersService,
        private dragulaService: DragulaService
    ) {
        dragulaService.drop.subscribe((value) => {
            this.onDrop(value.slice(1));
            // console.log(this.onDrop(value.slice(1)))
        });
    }

    private hasClass(el: any, name: string) {
      return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    }

    private addClass(el: any, name: string) {
      if (!this.hasClass(el, name)) {
        el.className = el.className ? [el.className, name].join(' ') : name;
      }
    }

    ngOnInit() {
        this.customersService.getAvailablePottys().subscribe(pottys => {
            this.availablePottys = pottys;
        })
    }

    private onDrop(args) {
        let [e, el] = args;
        console.log("Available: ");
        console.log(this.availablePottys);

        this.addClass(e, 'ex-moved');
    }



}
