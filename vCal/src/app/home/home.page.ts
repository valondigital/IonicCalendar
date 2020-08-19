import { Component, OnInit, ViewChild } from '@angular/core';
import { CalModalPage } from '../pages/cal-modal/cal-modal.page';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };


  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  constructor() {}
 

  ngOnInit() {}

  next() {
    this.myCal.slideNext();
  }
 
  back() {
    this.myCal.slidePrev();
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
}
