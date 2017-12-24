import { Component, OnInit } from '@angular/core';
import { CoinMarketCapService } from '../shared/services/coinmarketcap.service';
import { Coin } from '../shared/model/coin';
import { CurrencyService } from '../shared/services/currency.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';


@Component({
    selector: 'app-coins',
    templateUrl: './coins.component.html'
})
export class CoinsComponent implements OnInit {
    constructor(private coinMarketCapService: CoinMarketCapService,
        private route: Router,
        private currencyService: CurrencyService) { }

    coins: Coin[];
    selectedCurrency: string;
    loaded: boolean;
    coinSearch: Coin;
    globalMarketCap: any;

    getCrypto(val: string) {
        console.log('selected' + val);
    }
    autoCompleteFormatter(data: any) {
        return `${data.name}`;
    }

    refreshPrice() {
        this.loaded = false;
        this.ngOnInit();
    }
    currencyChange() {
        this.coins = null;
        this.globalMarketCap = null;
        this.loaded = false;
        this.coinSearch = null;
        this.ngOnInit();
    }
    valueChanged(newVal: Coin) {
        this.route.navigate(['coin/' + newVal.id]);
      }

    ngOnInit() {
        this.loaded = false;
        this.currencyService.currency.subscribe((val: string) => {
            this.selectedCurrency = val;
        this.currencyService.loaded.subscribe(loaded => {
            this.loaded = loaded;
        });
            this.coinMarketCapService.getCoins(this.selectedCurrency)
            .subscribe(res => {
                this.coins = res;
                this.coins.forEach(element => {
                    const index = res.indexOf(element);
                    element.price_converted = res[index]['price_' + this.selectedCurrency.toLowerCase()];
                    element.market_cap_converted = res[index]['market_cap_' + this.selectedCurrency.toLowerCase()];
                });
                this.coinMarketCapService.getGlobalData(this.selectedCurrency)
                .subscribe(result =>  {
                    this.globalMarketCap = result['total_market_cap_' + this.selectedCurrency.toLocaleLowerCase()];
                });
                this.loaded = true;
            });
        });
    }

    movement(value: number) {
        if (value > 0) {
            return 'glyphicon glyphicon-arrow-up text-success';
        }
        return 'glyphicon glyphicon-arrow-down text-danger';
    }

}
