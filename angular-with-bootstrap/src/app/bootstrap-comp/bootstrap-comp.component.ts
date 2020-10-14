import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-comp',
  templateUrl: './bootstrap-comp.component.html',
  styleUrls: ['./bootstrap-comp.component.css']
})
export class BootstrapCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
