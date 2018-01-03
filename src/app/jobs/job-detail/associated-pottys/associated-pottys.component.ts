import { Component, Input, OnInit } from '@angular/core';

import { Job } from "../../../job";
import { CustomersService } from '../../../customers.service';
import { DatePipe } from '@angular/common';

import { DragulaModule, DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-associated-pottys',
  templateUrl: './associated-pottys.component.html',
  styleUrls: ['./associated-pottys.component.css']
})
export class AssociatedPottysComponent implements OnInit {

    @Input() job: Job;

    showAvailablePottys: boolean;

    associatedPottys: any = [];

    constructor(
        private customersService: CustomersService,
        private dragulaService: DragulaService
    ) {
        dragulaService.drop.subscribe((value) => {
            this.onDropModel(value.slice(1));
            // console.log("value:" + this.onDropModel(value.slice(1)));
        })

        dragulaService.removeModel.subscribe((value) => {
            this.onRemoveModel(value.slice(1));
        });
    }

    ngOnInit() {
        console.log(this.job);
        this.customersService.getJobsPottys(this.job.jobid).subscribe(pottys => {
            this.associatedPottys = pottys;
        });
    }

    toggleAvailablePottys() {
        console.log("clicked");

        this.showAvailablePottys = !this.showAvailablePottys;
    }



    private onDropModel(args) {
        let [el, target, source] = args;
        console.log("In-use:")
        console.log(this.associatedPottys);

        let newlyAddedPottys = [];
        for (var i=0; i < this.associatedPottys.length; i++) {
            if (this.associatedPottys[i]["status"] == "available") {
                newlyAddedPottys.push(this.associatedPottys[i]['pottyid']);
            }
        }
        console.log(newlyAddedPottys);
    }

    private onRemoveModel(args) {
        let [el, source] = args;
    // do something else
    }
    // console.log(pottys);

}
