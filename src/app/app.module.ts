import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngrx/store';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, TestComponent],
  imports: [BrowserModule, StoreModule.forRoot(reducers)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
