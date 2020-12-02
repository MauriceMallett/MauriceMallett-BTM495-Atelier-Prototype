import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATAX } from '../estimates-page/estimates-page.component';

export interface PeriodicElement {
  id?: string;
  name: string;
  products: number;
  amount: number;
  status: number;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-estimate-page',
  templateUrl: './estimate-page.component.html',
  styleUrls: ['./estimate-page.component.scss'],
})
export class EstimatePageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'products', 'status'];
  dataSource = ELEMENT_DATA;
  fee = 185;
  labor = 1500;
  total = 13960;

  constructor() {}

  ngOnInit(): void {}

  setCost(index: number, value: number) {
    this.dataSource[index].amount = value;
    this.dataSource[index].status = this.dataSource[index].products * value;
    this.recalculate();
  }

  recalculate() {
    let t = 0;
    for (let i = 0; i < this.dataSource.length; i++) {
      t += this.dataSource[i].status;
    }
    this.total = t + this.fee + this.labor;
  }

  add() {
    this.dataSource = [
      ...this.dataSource,
      {
        id: '#34603214',
        name: '1',
        products: 50,
        amount: 1,
        status: 50,
      },
    ];
    this.recalculate();
  }

  adjust() {
    this.dataSource = [
      this.dataSource[0],
      this.dataSource[1],
      {
        id: '#34603214',
        name: '2',
        products: 55,
        amount: 1,
        status: 55,
      },
    ];
    this.recalculate();
  }

  delete() {
    this.dataSource = [this.dataSource[0], this.dataSource[2]];
    this.recalculate();
  }

  changeLabor(value: number) {
    this.labor = value;
    this.recalculate();
  }

  changeFee(value: number) {
    this.fee = value;
    this.recalculate();
  }
}
