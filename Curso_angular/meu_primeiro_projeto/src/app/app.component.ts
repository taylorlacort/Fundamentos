import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-data-biding></app-data-biding>  4º MODULO DO CURSO  --> 
  <app-deretivas-estruturais> </app-deretivas-estruturais>
  <router-outlet></router-outlet>

 
  `
})
export class AppComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {

  }
}
