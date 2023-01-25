import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
