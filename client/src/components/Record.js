import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromUser } from '../actions/index';

function Record({ item, number }) {
  const dispatch = useDispatch();

  function handleDeleteBtten() {
    dispatch(removeFromUser(item.user_id));
  }

  return (
    <tr>
      <td>{number + 1}</td>
      <td><input type="checkbox"/></td>
      {
        Object.values(item).map((value, idx) => {
          return <td key={idx}>{value}</td>;
        })
      }
      <td><button>편집</button></td>
      <td><button onClick={handleDeleteBtten}>삭제</button></td>
    </tr>
  );
}

export default Record;