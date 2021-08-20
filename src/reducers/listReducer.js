import userList from '../resurce/userList';
import listField from '../resurce/listField';

const listReducer = (state = { userList, listField }, action) => {
  switch( action.type ) {
    default:
      return state;
  }
}

export default listReducer;
