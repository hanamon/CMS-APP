import React from 'react';

function ListItem({ item, number }) {
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
      <td><button>삭제</button></td>
    </tr>
  );
}

export default ListItem;
