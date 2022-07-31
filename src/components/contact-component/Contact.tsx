import { useMutation } from '@apollo/client';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import { NEW_CONTACT } from '../../../graphql/mutations/mutations';
import { sleep } from '../../utils/utility';

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  const [newContact, { error }] = useMutation(NEW_CONTACT);
  const [input, setInput] = useState({ name: '', email: '', message: '' });
  const [contactData, setContactData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    console.log('submitting');
    console.log('env: ', process.env.NODE_ENV)
    console.log('url: ', process.env.NEXT_PUBLIC_SERVER_URL)
    const { data } = await newContact({
      variables: {
        input,
      },
    });

    console.log('data: ', data)
    
    await sleep(4000);
    setSubmitted(false);
    setInput({ name: '', email: '', message: '' });
    if (data) setContactData(data);
    await sleep(4000);
    setContactData({});
    console.log('done');

  }
  return (
    <ContactWrapper>
      <ContactHeader>Reach me</ContactHeader>
      <ContactForm>
        <form onSubmit={(e) => handleSubmit(e)}>
          <ContactFormInput>
            <InputItem>
              {/* <label htmlFor='name'>First Name</label> */}
              <input
                type='text'
                name='name'
                id='name'
                required
                placeholder='Your first name'
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
              />
            </InputItem>
            <InputItem>
              {/* <label htmlFor='name'>Email</label> */}
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Your email address'
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
              />
            </InputItem>
          </ContactFormInput>
          {/* <InputItem>
          <label htmlFor='name'>Message</label> */}
          <textarea
            name='message'
            id='message'
            cols={30}
            rows={10}
            required
            placeholder='Your thoughts here'
            value={input.message}
            onChange={(e) => setInput({ ...input, message: e.target.value })}
          />
          {/* </InputItem> */}
          {Object.keys(contactData).length != 0 && (
            <div style={{ marginTop: '1rem' }}>
              Your message is successfully sent, pls check your email
            </div>
          )}
          <Button>{submitted ? 'sending ...' : ' Send'}</Button>
        </form>
      </ContactForm>
    </ContactWrapper>
  );
};
const ContactWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));
const ContactHeader = styled('div')(({ theme }) => ({
  color: '#FFFFFF',
  fontSize: '2rem',
  fontFamily: 'Cabin',
}));
const ContactForm = styled('div')(({ theme }) => ({
  '& form': {
    fontFamily: 'Cabin',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // [theme.breakpoints.down('md')]: {
    //   width: '50%',
    // },
    '& textarea': {
      marginTop: '1rem',
      width: '40rem',
      height: '10rem',
      minHeight: '10rem',
      transition: 'all .2s',
      border: '1px solid #2D3748',

      background: 'transparent',
      borderRadius: '0.1rem',
      fontFamily: 'Cabin',
      padding: '0.5rem',
      fontSize: '1rem',
      resize: 'vertical',
      [theme.breakpoints.down('md')]: {
        width: '20rem',
      },
      '&:focus': {
        outline: 'none',
        border: '1px solid #4299e1',
        // boxShadow: '0 0 0 0.2rem rgba(255,255,255,0.5)',
      },
    },
  },
}));
const ContactFormInput = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));
const InputItem = styled('div')(({ theme }) => ({
  '& input': {
    width: '20rem',
    height: '3rem',
    border: '1px solid #2D3748',
    transition: 'all .2s',
    background: 'transparent',
    borderRadius: '0.1rem',
    fontSize: '1rem',
    padding: '0.5rem',

    '&:focus': {
      outline: 'none',
      border: '1px solid #4299e1',
      // boxShadow: '0 0 0 0.2rem rgba(255,255,255,0.5)',
    },
  },
}));
const Button = styled('button')(({ theme }) => ({
  marginTop: '1rem',
  marginBottom: '3rem',
  border: '1px solid #2D3748',
  background: '#171923',
  padding: '0.5rem 2rem',
  fontSize: '1.1rem',
  cursor: 'pointer',

  '&:hover': {
    background: '#2D3748',
    color: '#CBD5E0',
  },
}));
export default Contact;
