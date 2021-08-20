import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostLists from '../../components/PostLists';
import Pagination from '../../components/Pagination';
import ScreenOption from '../../components/ScreenOption';

function Users() {
  const state = useSelector(state => state.listReducer);
  const { userList, listField } = state;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentLists(list) {
    return list.slice(indexOfFirst, indexOfLast);
  }

  useEffect(() => {
    //console.log(currentPage);
  }, [currentPage]);

  return (
    <div>
      <ScreenOption postsPerPage={postsPerPage} setPostsPerPage={setPostsPerPage} setCurrentPage={setCurrentPage}/>
      <PostLists items={currentLists(userList)} fields={listField} numbering={indexOfFirst}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={userList.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default Users;
