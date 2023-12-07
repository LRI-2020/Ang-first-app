import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {CompanyServerComponent} from "./companyServers/server/company-server.component";
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import { AlertsComponent } from './alerts/alerts.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { BasicDirectiveDirective } from './directives/basic-directive.directive';
import { UnlessDirective } from './directives/unless.directive';
import {CompanyServerService} from "./services/company.server.service";
import {CompanyServersComponent} from "./companyServers/company-servers.component";
import { CompanyServerNewComponent } from './companyServers/company-server-new/company-server-new.component';
import {InactiveUsersComponent} from "./users/inactive-users/inactive-users.component";
import {ActiveUsersComponent} from "./users/active-users/active-users.component";
import {LusersService} from "./services/lusers.service";
import { LusersComponent } from './users/lusers/lusers.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { FormsAssingmentComponent } from './forms-assingment/forms-assingment.component';
import { ReactiveAssingmentComponent } from './reactive-assingment/reactive-assingment.component';
import { PipeAssignmentComponent } from './pipe-assignment/pipe-assignment.component';
import { FilterPipe } from './pipe-assignment/filter.pipe';
import { ShortenPipe } from './pipe-assignment/shorten.pipe';
import { ReversePipe } from './pipe-assignment/reverse.pipe';
import { SortPipe } from './pipe-assignment/sort.pipe';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'servers', component:CompanyServerComponent},
  {path:'users', component:LusersComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    CompanyServerComponent,
    CompanyServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AlertsComponent,
    Assignment3Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicDirectiveDirective,
    UnlessDirective,
    CompanyServerNewComponent,
    InactiveUsersComponent,
    ActiveUsersComponent,
    LusersComponent,
    HomeComponent,
    FormsAssingmentComponent,
    ReactiveAssingmentComponent,
    PipeAssignmentComponent,
    FilterPipe,
    ShortenPipe,
    ReversePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [CompanyServerService, LusersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
