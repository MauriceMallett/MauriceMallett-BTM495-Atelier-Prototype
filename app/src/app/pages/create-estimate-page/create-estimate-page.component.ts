import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-estimate-page',
  templateUrl: './create-estimate-page.component.html',
  styleUrls: ['./create-estimate-page.component.scss'],
})
export class CreateEstimatePageComponent implements OnInit {
  products = [];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: any) {
    event.preventDefault();
  }

  addProduct() {
    this.products.push(this.products.length + 1);
  }
}
