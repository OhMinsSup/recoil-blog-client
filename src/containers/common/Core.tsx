import React, { useEffect } from 'react';
import { useRecoilStateLoadable } from 'recoil';

import { userQuery } from '../../shared/user';

import { STORAGE_KEY } from '../../lib/contants';

interface CoreProps {}
const Core: React.FC<CoreProps> = () => {
  const [userLoadable, setUserLoadable] = useRecoilStateLoadable(userQuery);

  useEffect(() => {
    const user = localStorage.getItem(STORAGE_KEY.BLOG_USER_DATA);
    if (!user) return;

    setUserLoadable(JSON.parse(user));
    if (userLoadable.state === 'hasValue') {
      setUserLoadable(userLoadable.contents);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLoadable.state, setUserLoadable]);
  return null;
};

export default Core;
