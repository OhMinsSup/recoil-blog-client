import React, { useEffect } from 'react';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { userQuery, userState } from '../../shared/user';

import { STORAGE_KEY } from '../../lib/contants';

interface CoreProps {}
const Core: React.FC<CoreProps> = () => {
  const setUser = useSetRecoilState(userState);
  const userLoadable = useRecoilValueLoadable(userQuery);

  useEffect(() => {
    const user = localStorage.getItem(STORAGE_KEY.BLOG_USER_DATA);
    if (!user) return;

    setUser(JSON.parse(user));
    if (userLoadable.state === 'hasValue') {
      setUser(userLoadable.contents);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLoadable.state, setUser]);
  return null;
};

export default Core;
