import React, { useState } from 'react';

function ScreenOption({ postsPerPage, setPostsPerPage, setCurrentPage }) {
  const [pagingNum, setPagingNum] = useState(postsPerPage);

  function handleChangePagingNum(e) {
    setPagingNum(e.target.value);
  }

  function handleChangePagingNumSubmit() {
    setCurrentPage(1);
    setPostsPerPage(pagingNum);
  }

  return (
    <div>
      <fieldset>
        <legend>페이지 처리</legend>
        <label>페이지당 항목 수 : 
          <input type="number" value={pagingNum} onChange={handleChangePagingNum}/>
        </label>
        <input type="submit" value="적용" onClick={handleChangePagingNumSubmit}/>
      </fieldset>
    </div>
  );
}

export default ScreenOption;
