import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import {
  Block,
  ContactsListBlock,
  ContactsTitle,
  Heading,
  SectionWrap,
  Wrap,
} from './Contacts.styled';

export const Contacts = () => {
  return (
    <>
      <Block>
        <Filter />
        <Wrap>
          <SectionWrap>
            <Heading>Contact Form</Heading>
            <ContactForm />
          </SectionWrap>
          <ContactsListBlock>
            <SectionWrap>
              <ContactsTitle>Personal Contact</ContactsTitle>
              <ContactList />
            </SectionWrap>
          </ContactsListBlock>
        </Wrap>
      </Block>
    </>
  );
};
