import React from 'react';
import ListField from './ListField';
import ListItem from './ListItem';

// 필터된 데이터를 받아온다.
// 여기서는 출력만 할 뿐 데이터를 가공하지 않는다.

function PostLists({ items, fields, numbering }) {
  return (
    <div>
      <table>
        <thead>
          <ListField fields={fields}/>
        </thead>
        <tbody>
          {
            items.map((item, idx) => {
              return <ListItem key={item.user_id} item={item} number={numbering + idx}/>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default PostLists;
