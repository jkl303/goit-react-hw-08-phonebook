import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Helmet } from 'react-helmet-async';
import { ContactPageStyled } from './ContactsPage.styled';

export default function Contacts() {
  return (
    <ContactPageStyled>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </ContactPageStyled>
  );
}
