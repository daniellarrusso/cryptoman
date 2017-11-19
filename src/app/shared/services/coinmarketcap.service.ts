import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CoinMarketCapService {
    constructor(private http: Http) { }
    private  url= 'https://api.coinmarketcap.com/v1/ticker/';

    getCoins()  {
        const limit = '?convert=USD&limit=2000';
        return this.http.get(this.url + limit)
            .map(result => result.json());
    }
}
