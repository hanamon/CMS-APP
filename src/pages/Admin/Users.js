import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PostTable from '../../components/PostTable';
import Pagination from '../../components/Pagination';
import TableOption from '../../components/TableOption';

function Users() {
  const state = useSelector(state => state.listReducer);
  const { userList, listField } = state;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const [sortColumn, setSortColumn] = useState({ path: 'user_id', order: 'ASC' });

  function sortLists(sortColumn) {
    const { path, order } = sortColumn;
    
    const copyList = userList.map((user) => {
      return { ...user };
    });

    copyList.sort((a, b) => { // 오름차순
      if ( order === 'ASC' ) return a[path] < b[path] ? -1 : a[path] > b[path] ? 1 : 0;
      if ( order === 'DESC' ) return a[path] > b[path] ? -1 : a[path] < b[path] ? 1 : 0;
    });

    return currentLists(copyList);
  }

  function handleSort(column) {
    const { path } = column;
    let order = 'ASC';
    if( sortColumn.order === 'ASC' ) order = 'DESC';
    setSortColumn({ path, order });
  }

  function currentLists(list) {
    return list.slice(indexOfFirst, indexOfLast);
  }

  return (
    <div>
      <h2>Users</h2>
      <TableOption postsPerPage={postsPerPage} setPostsPerPage={setPostsPerPage} setCurrentPage={setCurrentPage} />
      <PostTable items={sortLists(sortColumn)} columns={listField} numbering={indexOfFirst} handleSort={handleSort} />
      <Pagination postsPerPage={postsPerPage} totalPosts={userList.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Users;
