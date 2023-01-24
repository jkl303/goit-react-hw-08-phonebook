import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
