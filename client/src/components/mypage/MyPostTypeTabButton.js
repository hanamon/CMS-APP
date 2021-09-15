import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TapButton = styled(Link)`
  display: inline-block;
  font-size: 1.2rem;
  margin: 5px;
  padding: 5px 10px;
  color: white;
  border: 1px solid block;
  background-color: ${props => props.current ? 'seagreen' : 'none'};
`;

function MyPostTypeTabButton({ children, name, onClick, postTypeState }) {
  //console.log(postTypeState, name);
  return (
    <TapButton current={postTypeState === name ? "true" : null} to={"?" + name} name={name} onClick={(e) => onClick(e)}>{children}</TapButton>
  );
}

export default MyPostTypeTabButton;
