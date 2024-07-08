
import { useContext } from 'react';
import CookieContext from '../Context/CookieContext';

const AuthCookie = () => {
  return useContext(CookieContext);
};

export default AuthCookie;
