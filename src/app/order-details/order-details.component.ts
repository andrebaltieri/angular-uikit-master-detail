import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Input() order: any = null;

  constructor() { }

  ngOnInit() {
  }

}
