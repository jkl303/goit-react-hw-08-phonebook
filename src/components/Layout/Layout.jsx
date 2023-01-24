import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <UserMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
