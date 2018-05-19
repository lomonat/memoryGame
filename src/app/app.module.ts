import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { ShufflePipe } from './custom-shuffle/custom-shuffle.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ShufflePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
