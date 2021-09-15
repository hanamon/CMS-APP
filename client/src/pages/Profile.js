import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main';
import User from '../components/content/User';

function Profile() {
  const history = useHistory();
  const [userInfoState, setUserInfoState] = useState({});
  const [postState, setPostState] = useState([]);
  const [postCount, setPostCount] = useState(0);
  
  const getUserProfile = async () => {
    try {
      const { pathname } = new URL(window.location.href);
      const postsData = await axios.get('http://localhost:4000/posts' + pathname);
      const { posts } = postsData.data.data;
      setPostState(posts.rows);
      setPostCount(posts.count);
  
      const userData = await axios.get('http://localhost:4000/users' + pathname);
      const { userInfo } = userData.data.data;
      setUserInfoState(userInfo);
    }
    catch (err) {
      console.log(err);
      //history.push('/404');
    }
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <User userInfoState={userInfoState} postState={postState} postCount={postCount} />
      </Main>
      <Footer />
    </>
  );
}

export default Profile;
