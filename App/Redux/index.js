import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// Reducers
import { ingredientsListReducer } from 'Containers/IngredientsList/reducers';

import configureStore from './CreateStore';
import ReduxPersist from '../Config/ReduxPersist';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
  ingredientsList: ingredientsListReducer,
});

export default () => {
  let finalReducers = reducers;
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  const { store } = configureStore(finalReducers);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
