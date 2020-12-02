import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: string | number;
  name: string;
  supplier: string;
  price: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'supplier', 'price', 'status'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
