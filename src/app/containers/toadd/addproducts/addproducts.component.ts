import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.less']
})
export class AddproductsComponent implements OnInit {
  onFileSelected(event){
    console.log(event)
  }

  constructor() { }

  ngOnInit() {
  }

}
