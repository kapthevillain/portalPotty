import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PottysComponent } from './pottys.component';
// import { JobDetailComponent } from './job-detail/job-detail.component';

import { CustomersService } from '../customers.service';

import { PottysRoutingModule } from './pottys-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PottysRoutingModule
    ],
    declarations: [
        PottysComponent
        // JobDetailComponent
    ],
    providers: [ CustomersService ]
})
export class JobsModule { }
