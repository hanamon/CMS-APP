import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import H1 from '../heading/H1';

const PostWrapper = styled.div`
  padding: 15px;
  background-color: aqua;
`;

const PostUl = styled.ul`
  background-color: burlywood;
`;

const PostLi = styled.li`
  padding: 15px;
`;

const PostLink = styled(Link)`
  display: block;
  padding: 15px;
  border: 1px solid #000;
  background-color: white;
`;

const PostCount = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 10px 30px;

`;

function User({ userInfoState, postState, postCount }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if( userInfoState && postState && postCount ) {
      setLoading(true);
    }
  });

  return (
    loading
    ? (
      <div>
        <H1>{userInfoState.user_display}님 프로필</H1>
        <PostCount>작성글 : {postCount}개</PostCount>
        {
          ! postState.length
          ? <PostWrapper>게시물이 없습니다.</PostWrapper>
          : (
            <PostWrapper>
              <PostUl>
              {
                postState.map((post) => {
                  return (
                    <PostLi key={post.post_id}>
                      <article>
                        <PostLink to={'/' + post['User.user_login'] + '/' + post.post_path}>
                          <div className="post_title">
                            <h4>{post.post_title}</h4>
                          </div>
                          <div className="post_category">
                            <span>카테고리 {[post['Term_Relationships.Term.term_name']]}</span>
                          </div>
                          <div className="post_description">
                            <p>{post.post_content}</p>
                          </div>
                          <div className="post_meta">
                            <span>작성자 {post['User.user_login']}</span>
                            <span>작성일 {new Date(post.post_created).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                        </PostLink>
                      </article>
                    </PostLi>
                  )
                })
              }
              </PostUl>
            </PostWrapper>
          )
        }
      </div>
    )
    : null
  );
}

export default User;
