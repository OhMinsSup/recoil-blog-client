import React, { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import useRequest from '../../lib/hooks/useRequest';
import { logoutAPI } from '../../lib/apis/auth';
import { userState } from '../../shared/user';

import Header from '../../components/common/Header';

interface HeaderContainerProps {}
const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  const userData = useRecoilValue(userState);
  const [_logout] = useRequest(logoutAPI);

  const onLogout = useCallback(() => {
    _logout();
  }, [_logout]);

  return <Header user={userData} onLogout={onLogout} />;
};

export default HeaderContainer;
