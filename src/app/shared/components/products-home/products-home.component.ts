import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../models/products';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.scss']
})
export class ProductsHomeComponent implements OnInit {
  productArray !: Array<Iproduct>
  constructor(
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
    this._productService.fetchAllData().subscribe(res =>{this.productArray = res})
  }

}
