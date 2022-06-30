import {
  decrementAction,
  incrementAction,
} from './../../ngrx/actions/counter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter!: any;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.subscribe((data) => (this.counter = data.counter));
  }

  increment() {
    this.store.dispatch(incrementAction({ value: 12 }));
  }
  decrement() {
    this.store.dispatch(decrementAction());
  }

  //@TODO create an
  /*
   1) action called resetAction
   2) on reducer function create "on" function to listen to the action
   3) dispatch the action to reducer
  */
  reset(){
    console.log("Reset!");
    
  }
}
