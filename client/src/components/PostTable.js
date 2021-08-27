import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

// 필터된 데이터를 받아온다.
// 여기서는 출력만 할 뿐 데이터를 가공하지 않는다.

function PostTable({ items, columns, numbering, handleSort }) {
  return (
    <div>
      <table>
        <TableHead columns={columns} handleSort={handleSort} />
        <TableBody items={items} numbering={numbering} />
      </table>
    </div>
  );
}

export default PostTable;
