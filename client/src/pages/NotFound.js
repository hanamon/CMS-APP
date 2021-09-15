import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main';
import H1 from '../components/heading/H1';

function NotFound() {
  return (
    <>
    <Header />
    <Main>
      <H1>404</H1>
    </Main>
    <Footer />
    </>
  );
}

export default NotFound;
