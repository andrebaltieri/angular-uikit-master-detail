import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public orders: any[] = null;
  public order: any = null;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.get().subscribe((data: any) => {
      this.orders = data;
    });
  }

  showOrderDetails(id) {
    this.data.details(id).subscribe((data: any) => {
      this.order = data;
    });
  }
}
