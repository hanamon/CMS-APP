import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main';
import Posts from '../components/content/Posts';


function ArtWrok() {
  return (
    <>
      <Header />
      <Main>
        <Posts pageName="작품" pagePath="artwork" postType="artwork" taxonomy="artwork-category" />
      </Main>
      <Footer />
    </>
  );
}

export default ArtWrok;
