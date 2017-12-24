import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CurrencyService {
    constructor(private http: Http) { }
    currencies = ['USD', 'GBP', 'EUR'];
    public currency: BehaviorSubject<string> = new BehaviorSubject<string>('usd');
    public loaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    getCurrencies() {
        return Observable.of(this.currencies);
    }

    setCurrency(currency: string) {
        this.currency.next(currency);
    }

    setLoaded() {
        this.loaded.next(true);
    }

}
