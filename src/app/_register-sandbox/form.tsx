'use client';

import { useState } from 'react';

const FormPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    const formData = new FormData(event.currentTarget);
    const data = {
      username: formData.get('username') as string,
      password: formData.get('password') as string
    };
    console.log('Submitting form', data);

    try {
      const response = await fetch('/api/auth/register-sandbox-internal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`Registration failed: ${responseData.message || 'Unknown error'}`);
      }

      console.log('Registration Successful', responseData);
      setMessage('User registered successfully!');
      (event.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error('Registration Failed:', error);
      setMessage(`Registration failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Username
          <input
            name="username"
            type="text"
            required
            disabled={isLoading}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            required
            disabled={isLoading}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {message && (
        <div style={{
          marginTop: '10px',
          padding: '10px',
          backgroundColor: message.includes('failed') ? '#ffebee' : '#e8f5e8',
          color: message.includes('failed') ? '#c62828' : '#2e7d32',
          borderRadius: '4px'
        }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default FormPage;
