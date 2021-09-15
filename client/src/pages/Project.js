import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main';
import Posts from '../components/content/Posts';

function Project() {
  return (
    <>
      <Header />
      <Main>
        <Posts pageName="프로젝트" pagePath="project" postType="project" taxonomy="project-category" />
      </Main>
      <Footer />
    </>
  );
}

export default Project;
