import React from 'react';
import styled from 'styled-components';

const PageUl = styled.ul`
  display:inline-block;
  padding:2.5px;
  background-color:#FFF;
`;

const PageLi = styled.li`
  display:inline-block;
  font-size:16px;
  font-weight:600;
  padding:5px 10px;
  margin:2.5px;
  background-color:#EEE;
  &:hover{
    cursor:pointer;
    color:#FFF;
    background-color:#263A6C;
  }
  &:focus::after{
    color:#FFF;
    background-color:#263A6C;
  }
  &.current {
    color:#FFF;
    background-color:#263A6C;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after{
    border-radius:100%;
    color:white;
    background-color:#263A6C;
  }
`;

function Pagination({ postsPerPage, totalPosts, currentPage, setCurrentPage }) {
  const pageNumbers = [];
  for( let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++ ) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <PageUl>
        {
          !pageNumbers.length
          ? (
            <PageLi className="current" onClick={() => setCurrentPage(1)}>
              <PageSpan>{1}</PageSpan>
            </PageLi>
          )
          :
          pageNumbers.map((num) => {
            return (
              <PageLi className={num === currentPage ? 'current' : ''} key={num} onClick={() => setCurrentPage(num)}>
                <PageSpan>{num}</PageSpan>
              </PageLi>
            );
          })
        }
      </PageUl>
    </div>
  );
}

export default Pagination;