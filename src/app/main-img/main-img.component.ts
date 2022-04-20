import { Component, OnInit } from '@angular/core';
import { service } from '../service';

@Component({
  selector: 'app-main-img',
  templateUrl: './main-img.component.html',
  styleUrls: ['./main-img.component.css']
})
export class MainImgComponent implements OnInit {

  constructor(private Service: service) { }
  totalIncome: any; // imported Income

  // dataclick data for click
  dataClick = {
    id: 0,
    value: 1,
    patternlvl: 1.22,
    desc: `Clicker`,
    title: 'Click',
    cost: 100,
    quanity: 0,
    lvl:1,
  }


  ngOnInit(): void {
    this.Service.getSum().subscribe( info =>
      this.totalIncome = info
    ) // subscribe Income
  }
  upClicks() {
    let {cost, patternlvl,} = this.dataClick
    if(this.totalIncome >= cost) {
      this.dataClick.value++
      this.dataClick.cost = Math.floor(cost * patternlvl)
      this.Service.minusIncome(cost)
    }
  }


  add() {
    this.Service.addIncome(this.dataClick.value)
  }


}
