import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TapButton = styled(Link)`
  display: inline-block;
  font-size: 0.8rem;
  margin: 5px;
  padding: 8px 24px;
  color: white;
  border: 1px solid block;
  background-color: ${props => props.current ? '#444' : '#888'};
`;

function MyPostStatusTabButton({ children, name, onClick, postTypeState, postStatusState }) {
  const [urlState, setUrlState] = useState('');

  useEffect(() => {
    if( !postTypeState ) setUrlState('?' + name);
    else setUrlState('?' + postTypeState + '&' + name);
  }, [postTypeState]);

  return (
    <TapButton current={postStatusState === name ? "true" : null} to={urlState} name={name} onClick={(e) => onClick(e)}>{children}</TapButton>
  );
}

export default MyPostStatusTabButton;
