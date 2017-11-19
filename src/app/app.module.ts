import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// router
import { routedComponents, AppRoutingModule } from './appRoutes';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, routedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
