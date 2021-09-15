import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main';
import Posts from '../components/content/Posts';

function Blog() {
  return (
    <>
      <Header />
      <Main>
        <Posts pageName="블로그" pagePath="blog" postType="post" taxonomy="category" />
      </Main>
      <Footer />
    </>
  );
}

export default Blog;
