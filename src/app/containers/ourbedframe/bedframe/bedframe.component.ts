import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-bedframe',
  templateUrl: './bedframe.component.html',
  styleUrls: ['./bedframe.component.less']
})
export class BedframeComponent implements OnInit {

  public beds:object[];
  constructor(public productoService:ProductService) { }

  ngOnInit() {
    this.productoService.getBeds()
    .subscribe(
      (beds:object[]) => this.beds=beds,
      error => console.log(error)
    )
  }

}
