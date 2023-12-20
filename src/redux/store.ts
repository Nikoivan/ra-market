import { combineReducers, legacy_createStore } from 'redux';
import marketReducer from './marketReducer';

export default function configureStore() {
  return legacy_createStore(
    combineReducers({
      marketStore: marketReducer,
    })
  );
}
