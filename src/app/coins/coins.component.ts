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
    loaded: boolean;

    refreshPrice() {
        this.loaded = false;
        this.ngOnInit();
    }

    ngOnInit() {
        this.coinMarketCapService.getCoins()
            .subscribe(res => {
                this.coins = res;
                this.loaded = true;
            });
    }

    movement(value: number) {
        if (value > 0) {
            return 'green';
        }
        return 'red';
    }
}
