import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: string | number;
  name: string;
  email: string;
  date: string;
  products: string;
  status: string;
}

export const ELEMENT_DATAX: PeriodicElement[] = [];

@Component({
  selector: 'app-estimates-page',
  templateUrl: './estimates-page.component.html',
  styleUrls: ['./estimates-page.component.scss'],
})
export class EstimatesPageComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'date',
    'products',
    'status',
  ];
  dataSource = ELEMENT_DATAX;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: any) {
    this.dataSource = ELEMENT_DATAX.filter((item) => {
      const isName =
        // (event.target.firstName.value &&
        //   item.name.split(' ')[0].includes(event.target.firstName.value)) ||
        event.target.lastName.value &&
        item.name.split(' ')[1].includes(event.target.lastName.value);
      return (
        (!event.target.firstName.value && !event.target.lastName.value) ||
        isName
      );
    });
    event.preventDefault();
  }
}
