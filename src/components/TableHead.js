import React from 'react';

function TableHead({ columns, handleSort }) {
  return (
    <thead>
      <tr>
        <td><b>번호</b></td>
        <td><input type="checkbox"/></td>
        {
          columns.map((column, idx) => {
            return (
              <td key={idx} onClick={ column.path ? () => handleSort(column) : null}>
                <b>{column.set_field_name}</b>
              </td>
            );
          })
        }
        <td><b>편집</b></td>
        <td><b>삭제</b></td>
      </tr>
    </thead>
  );
}

export default TableHead;
