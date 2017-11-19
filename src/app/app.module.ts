import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';

// router
import { routedComponents, AppRoutingModule } from './appRoutes';

// services
import { CoinMarketCapService } from './shared/services/coinmarketcap.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, routedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [CoinMarketCapService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
