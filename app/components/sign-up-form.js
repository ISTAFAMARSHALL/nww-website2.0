// 'use client';

// import { useState } from 'react';
// import FormSubmit from '@/app/components/form-submit';

// export default function SignUpForm() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     linkedIn: '',
//     industry: '',
//     goals: '',
//     benefitOthers: '',
//     topics: '',
//     referralSource: '',
//     dietaryRestrictions: '',
//   });

//   const [state, setState] = useState({ errors: null, message: null });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setState({ errors: null, message: 'Form submitted successfully!' });
//         setFormData({
//           fullName: '',
//           email: '',
//           linkedIn: '',
//           industry: '',
//           goals: '',
//           benefitOthers: '',
//           topics: '',
//           referralSource: '',
//           dietaryRestrictions: '',
//         });
//       } else {
//         setState({ errors: [result.message], message: null });
//       }
//     } catch (error) {
//       setState({ errors: ['An error occurred while submitting the form. Please try again.'], message: null });
//     }
//   };

//   return (
//     <div style={{marginTop: '100px'}} className="form-container mx-auto max-w-2xl p-8 bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign-Up Form </h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
        
//         {/* Full Name Field */}
//         <div className="form-control">
//           <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Enter your full name"
//           />
//         </div>

//         {/* Email Address Field */}
//         <div className="form-control">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Enter your email address"
//           />
//         </div>

//         {/* LinkedIn Profile URL Field */}
//         <div className="form-control">
//           <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700">LinkedIn Profile URL</label>
//           <input
//             type="url"
//             id="linkedIn"
//             name="linkedIn"
//             value={formData.linkedIn}
//             onChange={handleChange}
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Enter your LinkedIn profile URL"
//           />
//         </div>

//         {/* Industry Experience Field */}
//         {/* <div className="form-control">
//           <label htmlFor="industry" className="block text-sm font-medium text-gray-700">What industry do you have experience in?</label>
//           <input
//             type="text"
//             id="industry"
//             name="industry"
//             value={formData.industry}
//             onChange={handleChange}
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Enter your industry experience"
//           />
//         </div> */}

//         {/* Goals for Attending Field */}
//         <div className="form-control">
//           <label htmlFor="goals" className="block text-sm font-medium text-gray-700">Best possible outcome?</label>
//           <input
//             type="text"
//             id="goals"
//             name="goals"
//             value={formData.goals}
//             onChange={handleChange}
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Enter your goals"
//           />
//         </div>

//         {/* Benefit Others Field */}
//         {/* <div className="form-control">
//           <label htmlFor="benefitOthers" className="block text-sm font-medium text-gray-700">How can you benefit others in attendance?</label>
//           <input
//             type="text"
//             id="benefitOthers"
//             name="benefitOthers"
//             value={formData.benefitOthers}
//             onChange={handleChange}
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             placeholder="How can you benefit others?"
//           />
//         </div> */}

//         {/* Specific Topics or Industries Field */}
//         {/* <div className="form-control">
//           <label htmlFor="topics" className="block text-sm font-medium text-gray-700">Optional: Any specific topics or industries you are interested in discussing?</label>
//           <input
//             type="text"
//             id="topics"
//             name="topics"
//             value={formData.topics}
//             onChange={handleChange}
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Enter any specific topics or industries"
//           />
//         </div> */}

//         {/* Referral Source Field */}
//         {/* <div className="form-control">
//           <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700">Optional: How did you hear about “More Than Just a Lunch”?</label>
//           <input
//             type="text"
//             id="referralSource"
//             name="referralSource"
//             value={formData.referralSource}
//             onChange={handleChange}
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             placeholder="How did you hear about us?"
//           />
//         </div> */}

//         {/* Dietary Restrictions Field */}
//         {/* <div className="form-control">
//           <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700">Do you have any dietary restrictions or preferences?</label>
//           <input
//             type="text"
//             id="dietaryRestrictions"
//             name="dietaryRestrictions"
//             value={formData.dietaryRestrictions}
//             onChange={handleChange}
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Enter your dietary restrictions or preferences"
//           />
//         </div> */}

//         {/* Form Submit */}
//         <div className="form-actions text-center">
//           <FormSubmit />
//         </div>

//         {/* Form Errors */}
//         {state.errors && (
//           <ul className="form-errors mt-4 text-red-600 text-sm">
//             {state.errors.map((error) => (
//               <li key={error}>{error}</li>
//             ))}
//           </ul>
//         )}

//         {/* Success Message */}
//         {state.message && (
//           <p className="form-success mt-4 text-green-600 text-sm">{state.message}</p>
//         )}
//       </form>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import FormSubmit from '@/app/components/form-submit';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedIn: '',
    industry: '',
    goals: '',
    benefitOthers: '',
    topics: '',
    referralSource: '',
    dietaryRestrictions: '',
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
          industry: '',
          goals: '',
          benefitOthers: '',
          topics: '',
          referralSource: '',
          dietaryRestrictions: '',
        });
      } else {
        setState({ errors: [result.message], message: null });
      }
    } catch (error) {
      setState({ errors: ['An error occurred while submitting the form. Please try again.'], message: null });
    }
  };

  return (
    <div style={{ marginTop: '100px' }} className="form-container mx-auto max-w-2xl p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8" style={{ color: '#0D1F2D' }}>Sign-Up Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Full Name Field */}
        <div className="form-control">
          <label htmlFor="fullName" className="block text-sm font-medium" style={{ color: '#546A7B' }}>Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            style={{ borderColor: '#546A7B', backgroundColor: '#F0F4F8', color: '#0D1F2D' }}
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Address Field */}
        <div className="form-control">
          <label htmlFor="email" className="block text-sm font-medium" style={{ color: '#546A7B' }}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            style={{ borderColor: '#546A7B', backgroundColor: '#F0F4F8', color: '#0D1F2D' }}
            placeholder="Enter your email address"
          />
        </div>

        {/* LinkedIn Profile URL Field */}
        <div className="form-control">
          <label htmlFor="linkedIn" className="block text-sm font-medium" style={{ color: '#546A7B' }}>LinkedIn Profile URL</label>
          <input
            type="url"
            id="linkedIn"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            style={{ borderColor: '#546A7B', backgroundColor: '#F0F4F8', color: '#0D1F2D' }}
            placeholder="Enter your LinkedIn profile URL"
          />
        </div>

        {/* Goals for Attending Field */}
        <div className="form-control">
          <label htmlFor="goals" className="block text-sm font-medium" style={{ color: '#546A7B' }}>Best possible outcome?</label>
          <input
            type="text"
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            style={{ borderColor: '#546A7B', backgroundColor: '#F0F4F8', color: '#0D1F2D' }}
            placeholder="Enter your goals"
          />
        </div>

        {/* Form Submit */}
        <div className="form-actions text-center">
          <FormSubmit />
        </div>

        {/* Form Errors */}
        {state.errors && (
          <ul className="form-errors mt-4 text-red-600 text-sm">
            {state.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        {/* Success Message */}
        {state.message && (
          <p className="form-success mt-4 text-green-600 text-sm">{state.message}</p>
        )}
      </form>
    </div>
  );
}
