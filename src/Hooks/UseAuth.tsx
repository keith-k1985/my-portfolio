import { useCallback } from 'react';
import axios from 'axios';

import { User } from '../types/api/User';
import { useHistory } from 'react-router-dom';

export const UseAuth = () => {
  const history = useHistory();

  const login = useCallback(
    (id) => {
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push('/admin');
          } else {
            alert('ユーザーが見つかりません');
          }
        })
        .catch(() => alert('ログインできません'));
    },
    [history]
  );
  return { login };
};
