import styled from 'styled-components';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main';
import H1 from '../components/heading/H1';

const Wrapper = styled.div`
  padding: 30px;
  background-color: aqua;
`;

function Home() {
  return (
    <>
      <Header />
      <Main>
        <H1>홈</H1>
        <Wrapper>
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
}

export default Home;
