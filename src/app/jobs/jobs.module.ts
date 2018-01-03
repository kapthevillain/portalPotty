import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JobsComponent } from './jobs.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

import { CustomersService } from '../customers.service';

import { JobsRoutingModule } from './jobs-routing.module';
import { AssociatedPottysComponent } from './job-detail/associated-pottys/associated-pottys.component';

import { DragulaModule, DragulaService } from 'ng2-dragula';
import { AvailablePottysComponent } from './job-detail/available-pottys/available-pottys.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DragulaModule,
        JobsRoutingModule
    ],
    declarations: [
        JobsComponent,
        JobDetailComponent,
        AssociatedPottysComponent,
        AvailablePottysComponent
    ],
    providers: [ CustomersService ]
})
export class JobsModule { }
