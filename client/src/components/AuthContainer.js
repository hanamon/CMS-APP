import styled from 'styled-components';

const Wrapper = styled.div``;

function AuthContainer({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default AuthContainer;
