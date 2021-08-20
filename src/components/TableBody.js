import React from 'react';
import Record from './Record';

function TableBody({ items, numbering }) {
  return (
    <tbody>
      {
        items.map((item, idx) => {
          return <Record key={item.user_id} item={item} number={numbering + idx} />
        })
      }
    </tbody>
  );
}

export default TableBody;
