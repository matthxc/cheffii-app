import { createSelector } from 'reselect';
import { get } from 'immutable';

/**
 * Direct selector to the providersList state domain
 */

export const selectIngredientsListDomain = state =>
  get(state, 'ingredientsList');

export const makeSelectIngredientsList = () =>
  createSelector(selectIngredientsListDomain, substate => substate);
