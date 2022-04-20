import { Component, OnInit, Input } from '@angular/core';
import { service} from "../service"

@Component({
  selector: 'app-shop-option',
  templateUrl: './shop-option.component.html',
  styleUrls: ['./shop-option.component.css']
})
export class ShopOptionComponent implements OnInit {

  @Input() singleData: any; // imported object
  Income = 0

  constructor(private Service: service) { }

  ngOnInit(): void {
    
  }
  buy(){
    this.Income += this.singleData.value
    this.singleData.cost =  Math.floor(this.singleData.cost * this.singleData.patternlvl) // increasing costs
    this.Service.changeIncomePerSecond(this.singleData.value) // adding the value to general Income per sec
    // if its not started yet
   
  }

}
