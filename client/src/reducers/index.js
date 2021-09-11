import { combineReducers } from 'redux';
import menuItemsReducer from './menuItemsReducer';
import accessTokenReducer from './accessTokenReducer';

const rootReducer = combineReducers({
  menuItemsReducer,
  accessTokenReducer
});

export default rootReducer;
