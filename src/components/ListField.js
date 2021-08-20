import React from 'react';

function ListField({ fields }) {
  return (
    <tr>
      <td><b>번호</b></td>
      <td><input type="checkbox"/></td>
      {
        fields.map((field, idx) => {
          return (
            <td key={idx}>
              {
                field.order_by 
                ? <span><b>{field.order_by}</b><i>▼</i></span>
                : <b>{field.set_field_name}</b>
              }
            </td>
          );
        })
      }
      <td><b>편집</b></td>
      <td><b>삭제</b></td>
    </tr>
  );
}

export default ListField;
