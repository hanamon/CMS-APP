import INIT_ACCESSTOKEN_STATE from '../status/accessToken';

const accessTokenReducer = (state = INIT_ACCESSTOKEN_STATE, action) => {
  switch( action.type ) {
    default:
      return state;
  }
};

export default accessTokenReducer;
