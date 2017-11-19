import { Component, OnInit } from '@angular/core';
import { CoinMarketCapService } from '../shared/services/coinmarketcap.service';

@Component({
    selector: 'app-coins',
    templateUrl: './coins.component.html'
})
export class CoinsComponent implements OnInit {
    constructor(private coinMarketCapService: CoinMarketCapService) { }

    coins = [];

    ngOnInit() {
        this.coinMarketCapService.getCoins()
            .subscribe(res => {
                this.coins = res;
            });
    }
}
