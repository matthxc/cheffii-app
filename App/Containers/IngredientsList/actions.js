import { UPDATE_INGREDIENTS_LIST } from './constants';

export const setIngredientsList = ingredients => ({
  type: UPDATE_INGREDIENTS_LIST,
  payload: ingredients,
});
