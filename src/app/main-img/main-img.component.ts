import { Component, OnInit } from '@angular/core';
import { service } from '../service';

@Component({
  selector: 'app-main-img',
  templateUrl: './main-img.component.html',
  styleUrls: ['./main-img.component.css']
})
export class MainImgComponent implements OnInit {

  constructor(private Service: service) { }

  ngOnInit(): void {
  }

  add() {
    this.Service.addIncome()
  }


}
