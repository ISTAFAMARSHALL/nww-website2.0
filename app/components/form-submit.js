'use client';

import { useFormStatus } from 'react-dom';

export default function FormSubmit() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <p>Submitting...</p>
      ) : (
        <>
          <button type="reset" style={{ marginRight: '1rem', padding: '0.5rem 1.5rem', backgroundColor: 'gray', color: 'white', borderRadius: '4px' }}>Reset</button>
          <button type="submit" style={{ padding: '0.5rem 1.5rem', backgroundColor: '#007bff', color: 'white', borderRadius: '4px' }}>Submit</button>
        </>
      )}
    </>
  );
}
