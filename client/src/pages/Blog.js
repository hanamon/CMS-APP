import Posts from '../components/Posts';

function Blog() {
  return (
    <Posts pageName="블로그" pagePath="blog" postType="post" taxonomy="category" />
  );
}

export default Blog;
