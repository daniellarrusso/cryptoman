import { Component, OnInit } from '@angular/core';
import { CoinMarketCapService } from '../shared/services/coinmarketcap.service';
import { Coin } from '../shared/model/coin';

@Component({
    selector: 'app-coins',
    templateUrl: './coins.component.html'
})
export class CoinsComponent implements OnInit {
    constructor(private coinMarketCapService: CoinMarketCapService) { }

    coins: Coin[];

    ngOnInit() {
        this.coinMarketCapService.getCoins()
            .subscribe(res => {
                this.coins = res;
            });
    }
}
