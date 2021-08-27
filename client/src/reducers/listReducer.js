import { REMOVE_FROM_USER } from '../actions/index';
import userList from '../resurce/userList';
import listField from '../resurce/listField';

const listReducer = (state = { userList, listField }, action) => {
  switch( action.type ) {
    case REMOVE_FROM_USER: 
      const { userId } = action.payload;
      const newUserList = state.userList.filter((user) => {
        if( user.user_id !== userId ) return user;
      });
      return { userList: newUserList, listField };
    default:
      return state;
  };
};

export default listReducer;
