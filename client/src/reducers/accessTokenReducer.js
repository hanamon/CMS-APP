import INIT_ACCESSTOKEN_STATE from '../status/accessToken';
import { UPDATE_ACCESS_TOKEN } from '../actions/authAction';

const accessTokenReducer = (state = INIT_ACCESSTOKEN_STATE, action) => {
  switch( action.type ) {
    case UPDATE_ACCESS_TOKEN:
      return { value: action.payload.accessToken };
    default:
      return state;
  }
};

export default accessTokenReducer;
