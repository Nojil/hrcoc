import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
  showDetailsAdults = false;
  showDetailsKids = false;
  showDetailsEveryone = false;
  showDetailsBaptism = false;
  showDetailsCommunion = false;
  showDetailsStudy = false;
  showDetailsLamb = false;
  showDetailsMissions = false;
  showDetailsGiving = false;
  showDetailsElders = false;
  showDetailsBelieve = false;
  showDetailsServices = false;

  constructor() { }

  ngOnInit() {
  }
}
