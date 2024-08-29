'use client';

import { useState } from 'react';
import FormSubmit from '@/app/components/form-submit';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedIn: '',
    goals: '',
  });

  const [state, setState] = useState({ errors: null, message: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setState({ errors: null, message: 'Form submitted successfully!' });
        setFormData({
          fullName: '',
          email: '',
          linkedIn: '',
          goals: '',
        });
      } else {
        setState({ errors: [result.message], message: null });
      }
    } catch (error) {
      setState({ errors: ['An error occurred while submitting the form. Please try again.'], message: null });
    }
  };

  return (
    <div style={{
      // marginTop: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '0 1rem',
      fontFamily: 'Arial, sans-serif',
    }}>
      {/* // className="form-container mx-auto max-w-2xl p-8 bg-white shadow-lg rounded-lg"> */}
      {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign-Up Form </h1> */}
      <form
        onSubmit={handleSubmit}
        // className="space-y-6">
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          width: '100%',
        }}
      >

        <h1 style={{
          marginBottom: '1rem',
          fontSize: '2rem',
          color: '#00494D',
          textAlign: 'center',
          fontWeight: '700',
        }}>
          Request to Attend
        </h1>

        {['fullName', 'email', 'linkedIn', 'goals'].map(field => (
          <div key={field} style={{ marginBottom: '1rem' }}>
            <label htmlFor={field} style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>
              {field === 'fullName' ? 'Full Name' :
                field === 'email' ? 'Email Address' :
                  field === 'linkedIn' ? 'LinkedIn Profile URL' :
                    'Best possible outcome?'}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
              placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
            />
          </div>
        ))}

        <div style={{ textAlign: 'center' }}>
          <FormSubmit />
        </div>

        {state.errors && (
          <ul style={{ marginTop: '1rem', color: 'red', fontSize: '0.875rem' }}>
            {state.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        {state.message && (
          <p style={{ marginTop: '1rem', color: 'green', fontSize: '0.875rem' }}>{state.message}</p>
        )}
      </form>
    </div>
  );
}