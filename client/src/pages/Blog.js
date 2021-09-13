import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

function Blog() {
  const [postState, setPostState] = useState([]);

  useEffect(() => {
    const endpoint = 'http://localhost:4000/posts?post_type=post';
    axios.get(endpoint)
    .then((res) => {
      const { posts } = res.data.data;
      console.log(posts);
      setPostState(posts.rows);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <PostWrapper>
      <h2>블로그</h2>
      <PostUl>
        {
          postState.map((post) => {
            return (
              <PostLi key={post.post_id}>
                <article>
                  <PostLink to={'/' + post['User.user_login'] + '/' + post.post_path}>
                    <h4 className="post_title">
                      {post.post_title}
                    </h4>
                    <p className="post_description">
                      {post.post_content}
                    </p>
                    <p className="post_meta">
                      <span>작성자 {post['User.user_login']}</span>
                      <span>작성일 {new Date(post.post_created).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </p>
                  </PostLink>
                </article>
              </PostLi>
            )
          })
        }
      </PostUl>
    </PostWrapper>
  );
}

export default Blog;
