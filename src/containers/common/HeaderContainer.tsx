import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import useRequest from '../../lib/hooks/useRequest';
import { logoutAPI } from '../../lib/apis/auth';
import { userState } from '../../store/user';

import Header from '../../components/common/Header';
import { useHistory } from 'react-router-dom';
import { STORAGE_KEY } from '../../lib/contants';

interface HeaderContainerProps {}
const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  const history = useHistory();
  const [user, setUser] = useRecoilState(userState);
  const [_logout] = useRequest(logoutAPI);

  const onLogout = useCallback(() => {
    _logout();
    setUser(null);

    localStorage.removeItem(STORAGE_KEY.BLOG_USER_DATA);
    history.push('/');
  }, [_logout, setUser, history]);

  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
