import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'user', component: DashboardComponent },
{ path: 'login', component: LoginComponent },
{path : '', component : LoginComponent}
];
@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }
