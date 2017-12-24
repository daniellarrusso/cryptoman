import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

// router
import { routedComponents, AppRoutingModule } from './appRoutes';

// services
import { CoinMarketCapService } from './shared/services/coinmarketcap.service';
import { CurrencyService } from './shared/services/currency.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, routedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    Ng2AutoCompleteModule
  ],
  providers: [CoinMarketCapService, CurrencyService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
