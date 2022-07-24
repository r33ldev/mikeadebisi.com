import { useRouter } from 'next/router';
import React from 'react';

export const UnknownPage: React.FC<{}> = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'block', fontSize: '6rem' }}>🤷</div>
      <div style={{ fontSize: '2rem', marginBottom: '2rem' }}>
        How did you get here?
      </div>
      <div>How about you go</div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '1.3rem',
          fontSize: '1.2rem',
        }}
      >
        <p
          style={{ borderBottom: '2px solid #4299E1', cursor: 'pointer' }}
          onClick={() => router.back()}
        >
          Back
        </p>{' '}
        or
        <p
          style={{ borderBottom: '2px solid #4299E1', cursor: 'pointer' }}
          onClick={() => router.push('/')}
        >
          Home
        </p>
      </div>
    </div>
  );
};

export default UnknownPage;
