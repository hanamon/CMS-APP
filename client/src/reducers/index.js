import { combineReducers } from 'redux';
import accessTokenReducer from './accessTokenReducer';
import mainMenuItemsReducer from './mainMenuItemsReducer';

const rootReducer = combineReducers({
  accessTokenReducer,
  mainMenuItemsReducer
});

export default rootReducer;
