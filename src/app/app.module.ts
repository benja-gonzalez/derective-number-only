import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnlyNumbersDirective } from './directive/only-numbers.directive';

@NgModule({
  declarations: [
    AppComponent,
    OnlyNumbersDirective
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    OnlyNumbersDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
