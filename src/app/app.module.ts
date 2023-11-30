import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {CompanyServerComponent} from "./server/company-server.component";
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
import {CompanyServersComponent} from "./servers/company-servers.component";

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
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CompanyServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
