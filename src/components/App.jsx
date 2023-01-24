import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const Layout = lazy(() => import('components/Layout/Layout'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
