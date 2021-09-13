import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import FilterLayout from './FilterLayout';

const PostWrapper = styled.div`
  background: pink;
`;

const PostUl = styled.ul`
  padding: 15px;
  margin: 15px;
  background-color: aqua;
`;

const PostLi = styled.li`
  margin: 15px;
  border: 1px solid #000;
`;

const PostLink = styled(Link)`
  display: block;
  padding: 15px;
`;

function Posts({ pageName, pagePath, postType, taxonomy }) {
  const history = useHistory();
  const [postState, setPostState] = useState([]);
  const [categoryState, setCategoryState] = useState([]);
  const [loadingState, setLoadingState] = useState(null);

  const categoryHandle = async (e) => {
    const name = e.target.name;
    let endpoint = 'http://localhost:4000/posts?post_type=' + postType;
    if( name !== 'all' ) endpoint = 'http://localhost:4000/posts?post_type=' + postType + '&category=' + name;
    try {
      const res = await axios.get(endpoint);
      const { posts } = res.data.data;
      setPostState(posts.rows);
    } catch (err) {
      console.log(err);
    }
  }

  const postsHandle = (inputState, searchState) => {
    setPostState(searchState);
    history.push('/' + pagePath + '?search=' + inputState);
  }

  useEffect(() => {
    axios.get('http://localhost:4000/posts?post_type=' + postType)
      .then((res) => {
        const { posts } = res.data.data;
        setPostState(posts.rows);
        axios.get('http://localhost:4000/category?taxonomy=' + taxonomy)
          .then((res) => {
            const { category } = res.data.data;
            setCategoryState(category);
            setLoadingState('ok');
          });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    ! loadingState
    ? null
    : (
      <PostWrapper>
        <h2>{pageName}</h2>
        <FilterLayout categoryState={categoryState} categoryHandle={categoryHandle} postsHandle={postsHandle} pagePath={pagePath} postType={postType} />
        {
          ! postState.length
          ? <div>게시물이 없습니다.</div>
          : (
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
          )
        }
      </PostWrapper>
    )
  );
}

export default Posts;
