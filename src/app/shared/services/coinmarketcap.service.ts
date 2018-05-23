import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CurrencyPipe } from '@angular/common/src/pipes';
import { Coin } from '../model/coin';

@Injectable()
export class CoinMarketCapService {
    constructor(private http: Http) { }
    private  url= 'https://api.coinmarketcap.com/v1/';

    getGlobalData(currency: string) {
        const urlExtension = 'global/?convert=' + currency;
        return this.http.get(this.url + urlExtension)
            .map(result => result.json());
    }

    getCoins(currency: string): Observable<[Coin]>  {
        const urlExtension = 'ticker/?convert=' + currency + '&limit=100';
        return this.http.get(this.url + urlExtension)
            .map(result => result.json());
    }

    getCoin(id: string, currency: string): Observable<Coin> {
        const urlExtension = 'https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v1/ticker/' + id + '?convert=' + currency;
        return this.http.get(urlExtension)
            .map(result => result.json() as Coin);
    }
}
