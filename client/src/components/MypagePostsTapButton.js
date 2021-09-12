import styled from 'styled-components';

const TapButton = styled.button`
  font-size: 1.2rem;
`;

function MypagePostsTapButton({ children, name, onClick }) {
  return (
    <TapButton name={name} onClick={(e) => onClick(e)}>{children}</TapButton>
  );
}

export default MypagePostsTapButton;
