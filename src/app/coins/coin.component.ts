import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Coin } from '../shared/model/coin';
import { CoinMarketCapService } from '../shared/services/coinmarketcap.service';
import { CurrencyService} from '../shared/services/currency.service';
import { prepareProfile } from 'selenium-webdriver/firefox';

@Component({
    selector: 'app-coin',
    templateUrl: './coin.component.html'
})
export class CoinComponent implements OnInit {
    constructor(
        private coinMarketService: CoinMarketCapService,
        private currencyService: CurrencyService,
        private location: Location,
        private activatedRoute: ActivatedRoute
    ) { }

    @Input() coin: Coin;

    currency: string;
    linkCoin: Coin;
    selectedCurrency: string;
    loaded: boolean;

    arrow(value: number) {
        if (value > 0) {
            return 'glyphicon glyphicon-arrow-up text-success';
        }
        return 'glyphicon glyphicon-arrow-down text-danger';
    }
    goBack(): void {
        this.location.back();
    }
    ngOnInit() {
        this.currencyService.currency.subscribe(curr => {
            this.currency = curr.toLowerCase();
            this.activatedRoute.params.subscribe(params => {
                this.coinMarketService.getCoin(params['id'], this.currency)
                .subscribe(res => {
                   const price = 'price_' + this.currency;
                   this.coin = res[0];
                   this.coin.price_converted = res[0][price];
                    });
                });
        });
}}
