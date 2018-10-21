/*
 *
 * IngredientsList reducers
 *
 */

import { UPDATE_INGREDIENTS_LIST } from './constants';

export const initialIngredientsListState = {
  data: [],
};

export const ingredientsListReducer = (
  state = initialIngredientsListState,
  action,
) => {
  switch (action.type) {
    case UPDATE_INGREDIENTS_LIST:
      return state.set('data', action.payload);
    default:
      return state;
  }
};
