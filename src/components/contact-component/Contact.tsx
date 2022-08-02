import { useMutation } from '@apollo/client';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import { NEW_CONTACT } from '../../../graphql/mutations/mutations';
import { sleep } from '../../utils/utility';
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  const [newContact] = useMutation(NEW_CONTACT);
  const [input, setInput] = useState({ name: '', email: '', message: '' });
  const [contactData, setContactData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);

    if (recaptchaRef.current) {
      recaptchaRef!.current!.execute();
    }
  }
  const siteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY as string;
  const onReCAPTCHAChange = async (captchaCode: any) => {
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const { data } = await newContact({
          variables: {
            input,
          },
        });
        await sleep(2000);
        setSubmitted(false);
        setInput({ name: '', email: '', message: '' });
        if (data) setContactData(data);
        await sleep(10000);
        setContactData({});

        console.log('message sent successfully');
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.error(error);
      console.log('Something went wrong');
    } finally {
      if (recaptchaRef.current) recaptchaRef.current.reset();
    }
    if (recaptchaRef?.current) {
      recaptchaRef.current.reset();
    }
  };
  return (
    <ContactWrapper>
      <ContactHeader>Talk to me</ContactHeader>
      <ContactForm>
        <form onSubmit={(e) => handleSubmit(e)}>
          <ReCAPTCHA
            ref={recaptchaRef}
            size='invisible'
            sitekey={siteKey}
            onChange={onReCAPTCHAChange}
          />
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
            rows={5}
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
          <Button disabled={submitted}>
            {submitted ? 'sending ...' : ' Send'}
          </Button>
        </form>
      </ContactForm>
    </ContactWrapper>
  );
};
const ContactWrapper = styled('div')(({ theme }) => ({}));
const ContactHeader = styled('div')(({ theme }) => ({
  color: '#000000',
  fontSize: '1.5rem',
  fontFamily: 'Cabin',
}));
const ContactForm = styled('div')(({ theme }) => ({
  '& form': {
    fontFamily: 'Cabin',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

    // [theme.breakpoints.down('md')]: {
    //   width: '50%',
    // },
    '& textarea': {
      marginTop: '1rem',
      width: '100%',
      height: '9rem',
      minHeight: '9rem',
      transition: 'all .2s',
      border: '1px solid #2D3748',
      color: '#000000',
      background: 'transparent',
      borderRadius: '0.1rem',
      fontFamily: 'Cabin',
      padding: '0.5rem',
      fontSize: '1rem',
      resize: 'vertical',
      [theme.breakpoints.down('md')]: {
        // width: '20rem',
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
  justifyContent: 'space-between',
  width: '100%',
  gap: '1rem',
  marginTop: '1rem',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },

  '&>*': {
    width: '100%',
  },
}));
const InputItem = styled('div')(({ theme }) => ({
  '& input': {
    width: '100%',
    height: '3rem',
    border: '1px solid #2D3748',
    transition: 'all .2s',
    background: 'transparent',
    borderRadius: '0.1rem',
    fontSize: '1rem',
    padding: '0.5rem',
    color: '#000000',

    '&:focus': {
      outline: 'none',
      border: '1px solid #4299e1',
      // boxShadow: '0 0 0 0.2rem rgba(255,255,255,0.5)',
    },
  },
}));
const Button = styled('button')(({ theme, disabled }) => ({
  marginTop: '1rem',
  marginBottom: '3rem',
  border: '1px solid #2D3748',
  background: '#171923',
  padding: '0.5rem 2rem',
  fontSize: '1.1rem',
  cursor: `${disabled ? 'loading' : 'pointer'}`,
  color: 'white!important',
  '&:hover': {
    background: '#2D3748',
    color: '#CBD5E0',
  },
}));
export default Contact;
