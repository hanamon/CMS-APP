import { useEffect } from 'react';

function Logout({ isLogout }) {
  useEffect(() => {
    isLogout();
  }, []);
  
  return (<></>);
}

export default Logout;
