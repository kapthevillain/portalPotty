import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PottysComponent } from './pottys.component';
// import { JobDetailComponent } from './job-detail/job-detail.component';

const pottyRoutes: Routes = [
    // { path: 'jobs', component: JobsComponent },
    // { path: 'jobs/:id', component: JobDetailComponent }
    { path: 'pottys', component: PottysComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(pottyRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PottysRoutingModule { }
