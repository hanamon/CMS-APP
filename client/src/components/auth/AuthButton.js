import styled from 'styled-components';

const Wrapper = styled.div``;
const Button = styled.button``;

function AuthButton({ children, onClick }) {
  return (
    <Wrapper>
      <Button onClick={onClick}>
        {children}
      </Button>
    </Wrapper>
  );
}

export default AuthButton;
