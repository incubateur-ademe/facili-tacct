'use client';

const FormPage = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const data = {
      username: formData.get('username') as string,
      password: formData.get('password') as string
    };
    console.log('Submitting form', data);
    const { username, password } = data;

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Process response here
      console.log('Registration Successful', response);
    } catch (error: any) {
      console.error('Registration Failed:', error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default FormPage;
