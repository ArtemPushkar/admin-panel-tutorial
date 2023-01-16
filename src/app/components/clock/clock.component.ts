import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get time() {
    return moment().format('MMMM Do YYYY, h:mm:ss a')
  }
}
