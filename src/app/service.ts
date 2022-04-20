import { Injectable} from "@angular/core"
import { Subject, Observable} from 'rxjs'

@Injectable()

export class service {

    totalIncome: number = 0
    incomePerSecond: number =0

    // variables to display in app.Component
    private total = new Subject<number>()
    private totalperSec = new Subject<number>()
    
    // starting Interval to count the values
    startIncome() {
        setInterval(()=> {
            this.totalIncome += this.incomePerSecond
            this.total.next(this.totalIncome)
            
        }, 1000)
    }

    // changing Income from childComponents
    changeIncomePerSecond(data:number) {
    
        this.incomePerSecond += data
        this.totalperSec.next(this.incomePerSecond)
    }

    // functions that return upper values as Observable
    getSum(): Observable<number> {
        return this.total.asObservable()
    }

    getSumS():Observable<number> {
        return this.totalperSec.asObservable()
    }

}