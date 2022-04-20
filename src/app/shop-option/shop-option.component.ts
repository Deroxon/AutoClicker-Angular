import { Component, OnInit, Input, ɵɵtrustConstantResourceUrl, SimpleChanges } from '@angular/core';
import { service} from "../service"

@Component({
  selector: 'app-shop-option',
  templateUrl: './shop-option.component.html',
  styleUrls: ['./shop-option.component.css']
})
export class ShopOptionComponent implements OnInit {

  totalIncome: number= 0;
  @Input() singleData: any; // imported object
  Income = 0

  constructor(private Service: service) { }

  ngOnInit(): void {
    this.Service.getSum().subscribe( info =>
      this.totalIncome = info
    ) /// getting totalIncome here
    
    
  }
  // !! need to think if its good solution and if there is better !!
  ngDoCheck() {
    if(this.totalIncome >= this.singleData.cost) {
      this.singleData.isReach = true
    } else {
      this.singleData.isReach = false
    }
  }

  buy(){
   if(this.totalIncome >= this.singleData.cost) {
      this.Income += this.singleData.value /// displaying income for component
      this.Service.minusIncome(this.singleData.cost) // sending to service how much we need to remove from pool
      this.singleData.cost =  Math.floor(this.singleData.cost * this.singleData.patternlvl) // increasing costs
      this.Service.changeIncomePerSecond(this.singleData.value) // adding the value to general Income per sec
      
    }
   
    
  }

}
