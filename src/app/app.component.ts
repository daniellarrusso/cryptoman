import { Component } from '@angular/core';
import { CurrencyService } from './shared/services/currency.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private currencyService: CurrencyService) { }
  title = 'Crypto Manager';

  selectedCurrency = 'USD';
  currencies: any[];

  ngOnInit() {
    this.currencyService.getCurrencies().subscribe(res => this.currencies = res);
  }

  currencyChange() {
    this.currencyService.setCurrency(this.selectedCurrency);
  }
}
