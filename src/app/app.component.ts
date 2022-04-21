import { Component, Input } from '@angular/core';
import {data} from "./dataShop"
import {data2} from "./dataShop"
import { service } from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    service
  ]
})
export class AppComponent {
  title = 'AutoClicker';
  displayedIncome: number= 0
  displayedIncomePerSec: number= 0
  @Input() data = data;
  @Input() data2 = data2
  

  constructor(private Service: service) {

  }

  
  ngOnInit() {
    //subscribe data from service and start game
    this.Service.getSum().subscribe( info =>
      this.displayedIncome = info
    )
    this.Service.getSumS().subscribe( info =>
      this.displayedIncomePerSec = info
    )

      this.Service.startIncome()
      this.Service.addIncome(1010)

  }

}
