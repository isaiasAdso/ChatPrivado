
import { useContext } from 'react';
import ChatContext from '../Context/ChatContext';

const AuthChat = () => {
  return useContext(ChatContext);
};

export default AuthChat;
