import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: violet;
`;

const Input = styled.input`
`;

const Button = styled.button`
`;

function FilterSearchBox({ postsHandle, postType }) {
  const [inputState, setInputState] = useState('');
  const [searchState, setSearchState] = useState([]);

  const searchBoxHandle = (e) => {
    setInputState(e.target.value);
  }

  useEffect(() => {
    if( inputState ) {
      const endpoint = 'http://localhost:4000/posts?post_type=' + postType + '&search=' + inputState;
      axios.get(endpoint)
        .then((res) => {
          const { posts } = res.data.data;
          setSearchState(posts.rows);
        })
        .catch((err) => console.log(err));
    } else {
      setSearchState([]);
    }
  }, [inputState]);

  return (
    <Wrapper>
      <Input type="text" id="postSearch" name="postSearch" onChange={searchBoxHandle} value={inputState} />
      <Button onClick={() => postsHandle(inputState, searchState)}>검색</Button>
      <ul>
        {/*
          searchState.map((post) => {
            return <li key={post.post_id}>{post.post_title}</li>;
          })
        */}
      </ul>
    </Wrapper>
  );
}

export default FilterSearchBox;
