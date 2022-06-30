import { createReducer, on } from '@ngrx/store';
import { decrementAction, incrementAction } from '../actions/counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(incrementAction, (state, {value}) => state + value),
  on(decrementAction, (state) => state - 1)
);
