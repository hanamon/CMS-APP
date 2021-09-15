import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main';
import Post from '../components/content/Post';

function SinglePost() {
  return (
    <>
    <Header />
    <Main>
      <Post />
    </Main>
    <Footer />
    </>
  );
}

export default SinglePost;
