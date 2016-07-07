import { Component } from '@angular/core';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SpotService }  from '../services/spot.service';
import {HTTP_PROVIDERS} from '@angular/http';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES ,NavbarTopComponent],
  providers : [SpotService,HTTP_PROVIDERS],
})
export class AppComponent {
  title = 'app works!';
}
