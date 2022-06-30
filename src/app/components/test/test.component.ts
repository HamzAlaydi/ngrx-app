import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  x!: number;
  constructor(private _store: Store<any>) {}

  ngOnInit(): void {
    this._store.subscribe((counter) => (this.x = counter.counter));
  }
}
