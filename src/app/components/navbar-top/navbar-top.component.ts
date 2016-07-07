import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'navbar-top',
  templateUrl: 'navbar-top.component.html',
  styleUrls: ['navbar-top.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class NavbarTopComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
