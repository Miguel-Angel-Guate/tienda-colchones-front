import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-mattress',
  templateUrl: './mattress.component.html',
  styleUrls: ['./mattress.component.less']
})
export class MattressComponent implements OnInit {
  public mattresses:object[];
  constructor(public productoService:ProductService) { }

  ngOnInit():void {
    this.productoService.getMattresses()
    .subscribe(
      (mattresses:object[]) => this.mattresses=mattresses,
      error => console.log(error)
    )
  }

}
