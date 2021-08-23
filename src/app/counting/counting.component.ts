import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent {
  count = 0;
  constructor() { }
  countNumbers() {
     this.count = this.count +1;
  }
  countequl() {
    this.count = this.count -1;
 }
}
