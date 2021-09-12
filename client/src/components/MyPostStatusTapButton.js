import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TapButton = styled(Link)`
  display: inline-block;
  font-size: 0.8rem;
  margin: 5px;
  padding: 5px 10px;
  color: white;
  border: 1px solid block;
  background-color: slateblue;
`;

function MyPostStatusTapButton({ children, name, postTypeState, onClick }) {
  const [urlState, setUrlState] = useState('');

  useEffect(() => {
    if( !postTypeState ) setUrlState('?' + name);
    else setUrlState('?' + postTypeState + '&' + name);
  }, [postTypeState]);

  return (
    <TapButton to={urlState} name={name} onClick={(e) => onClick(e)}>{children}</TapButton>
  );
}

export default MyPostStatusTapButton;
