import { createAction, props } from '@ngrx/store';

export const incrementAction = createAction(
  'increment',
  props<{ value: number }>()
);

export const decrementAction = createAction('decrement');
