import { Component, OnInit } from '@angular/core';
import { OurmattressService } from'src/app/services/ourmattress.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-mattress',
  templateUrl: './mattress.component.html',
  styleUrls: ['./mattress.component.less']
})
export class MattressComponent implements OnInit {

  constructor(public ourmattressService: OurmattressService) { }

  ngOnInit():void {
    this.ourmattressService.getAll()
    .subscribe(
      res => this.ourmattressService.setOurmattress(res),
      error => console.log(error)
    )
  }

}
