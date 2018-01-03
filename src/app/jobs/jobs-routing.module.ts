import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobsComponent } from './jobs.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

const jobsRoutes: Routes = [
    { path: 'jobs', component: JobsComponent },
    { path: 'jobs/:id', component: JobDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(jobsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class JobsRoutingModule { }
