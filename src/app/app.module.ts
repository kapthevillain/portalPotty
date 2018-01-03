import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersService } from './customers.service';
import { CustDetailComponent } from './cust-detail/cust-detail.component';
import { JobsComponent } from './jobs/jobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddJobComponent } from './add-job/add-job.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { GmapComponent } from './gmap/gmap.component';

import { JobsModule } from './jobs/jobs.module';
import { PottysComponent } from './pottys/pottys.component';



const appRoutes: Routes = [
    {
        path: 'customers',
        component: CustomersComponent
    },
    {
        path: 'jobs',
        component: JobsComponent
    },
    {
        path: 'pottys',
        component: PottysComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustDetailComponent,
    DashboardComponent,
    AddJobComponent,
    AddCompanyComponent,
    GmapComponent,
    PottysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JobsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
