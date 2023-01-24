import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';

export default function Contacts() {
  <>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </>;
}
