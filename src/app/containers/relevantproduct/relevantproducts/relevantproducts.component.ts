import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-relevantproducts',
  templateUrl: './relevantproducts.component.html',
  styleUrls: ['./relevantproducts.component.less']
})
export class RelevantproductsComponent implements OnInit {
  public relevants:object[];

  constructor(public productoService:ProductService) { }

  ngOnInit():void {
    this.productoService.getRelevants()
    .subscribe(
      (relevants:object[]) => this.relevants=relevants,
      error => console.log(error)
    )
  }

}
