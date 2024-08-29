// 'use client';

// import { useState } from 'react';

// export default function FAQPage() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const faqs = [
//     {
//       question: 'Why do people join membership groups?',
//       answer: `
//         People join membership groups and communities for various reasons, each offering different benefits and fulfilling different needs. 
//         These include networking opportunities, professional development, access to exclusive resources, mentorship, and a sense of belonging.`,
//     },
//     {
//       question: 'What networking opportunities do membership groups provide?',
//       answer: `
//         Membership groups provide access to a vast network of like-minded professionals, enabling members to build meaningful relationships, 
//         collaborate on projects, and exchange ideas that drive both personal and professional success.`,
//     },
//     {
//       question: 'How do membership groups support professional development?',
//       answer: `
//         Many membership groups offer professional development through workshops, seminars, and access to industry-specific resources, 
//         helping members enhance their skills, knowledge, and expertise.`,
//     },
//     {
//       question: 'What exclusive resources do members gain access to?',
//       answer: `
//         Members of certain groups gain access to specialized content, industry-specific tools, and exclusive events that are not available to the general public, 
//         giving them a unique advantage in their professional journeys.`,
//     },
//     {
//       question: 'How do membership groups offer mentorship and guidance?',
//       answer: `
//         Membership groups often connect members with experienced mentors and industry leaders who provide valuable advice, guidance, 
//         and support, helping members navigate personal and professional challenges with confidence.`,
//     },
//     {
//       question: 'How does being part of a membership group foster a sense of belonging?',
//       answer: `
//         Being part of a membership group fosters a sense of belonging and camaraderie, allowing members to feel connected to others who share 
//         similar goals, interests, or challenges.`,
//     },
//     {
//       question: 'How do membership groups help with accountability and motivation?',
//       answer: `
//         Being part of a membership group can help members stay accountable to their goals and motivated to achieve them, thanks to the encouragement 
//         and support from fellow members.`,
//     },
//     {
//       question: 'What leadership opportunities are available in membership groups?',
//       answer: `
//         Membership groups often offer opportunities for members to take on leadership roles, allowing them to develop their leadership skills, 
//         gain recognition within the community, and contribute to the success of the group.`,
//     },
//     {
//       question: 'What kind of exclusive events can members attend?',
//       answer: `
//         Members are often invited to exclusive events such as conferences, workshops, and social gatherings where they can meet influential people, 
//         gain new insights, and enjoy unique experiences tailored to their interests and goals.`,
//     },
//     {
//       question: 'How does membership in a group enhance credibility?',
//       answer: `
//         Being associated with a respected membership group can enhance an individual's or business’s credibility and reputation within their industry 
//         or community, signaling a commitment to professional growth and ethical business practices.`,
//     },
//   ];

//   const toggleFAQ = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section style={{  maxWidth: '50%', margin: '50px auto', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
//       <h1 style={{ marginTop: '50px' , textAlign: 'center', fontSize: '36px', marginBottom: '40px', color: '#222' }}>Frequently Asked Questions</h1>
//       <div style={{ borderTop: '1px solid #ccc' }}>
//         {faqs.map((faq, index) => (
//           <div key={index} style={{ marginBottom: '20px' }}>
//             <div
//               onClick={() => toggleFAQ(index)}
//               style={{
//                 cursor: 'pointer',
//                 padding: '15px 0',
//                 fontSize: '24px',
//                 borderBottom: '1px solid #ccc',
//                 transition: 'color 0.3s ease',
//                 color: activeIndex === index ? '#007BFF' : '#333',
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//               }}
//             >
//               {faq.question}
//               <span style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
//                 ▼
//               </span>
//             </div>
//             {activeIndex === index && (
//               <div style={{ padding: '15px 0', fontSize: '25px', lineHeight: '1.6', color: '#555' }}>
//                 <p>{faq.answer}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


'use client';

import { useState } from 'react';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Why do people join membership groups?',
      answer: `
        People join membership groups and communities for various reasons, each offering different benefits and fulfilling different needs. 
        These include networking opportunities, professional development, access to exclusive resources, mentorship, and a sense of belonging.`,
    },
    {
      question: 'What networking opportunities do membership groups provide?',
      answer: `
        Membership groups provide access to a vast network of like-minded professionals, enabling members to build meaningful relationships, 
        collaborate on projects, and exchange ideas that drive both personal and professional success.`,
    },
    {
      question: 'How do membership groups support professional development?',
      answer: `
        Many membership groups offer professional development through workshops, seminars, and access to industry-specific resources, 
        helping members enhance their skills, knowledge, and expertise.`,
    },
    {
      question: 'What exclusive resources do members gain access to?',
      answer: `
        Members of certain groups gain access to specialized content, industry-specific tools, and exclusive events that are not available to the general public, 
        giving them a unique advantage in their professional journeys.`,
    },
    {
      question: 'How do membership groups offer mentorship and guidance?',
      answer: `
        Membership groups often connect members with experienced mentors and industry leaders who provide valuable advice, guidance, 
        and support, helping members navigate personal and professional challenges with confidence.`,
    },
    {
      question: 'How does being part of a membership group foster a sense of belonging?',
      answer: `
        Being part of a membership group fosters a sense of belonging and camaraderie, allowing members to feel connected to others who share 
        similar goals, interests, or challenges.`,
    },
    {
      question: 'How do membership groups help with accountability and motivation?',
      answer: `
        Being part of a membership group can help members stay accountable to their goals and motivated to achieve them, thanks to the encouragement 
        and support from fellow members.`,
    },
    {
      question: 'What leadership opportunities are available in membership groups?',
      answer: `
        Membership groups often offer opportunities for members to take on leadership roles, allowing them to develop their leadership skills, 
        gain recognition within the community, and contribute to the success of the group.`,
    },
    {
      question: 'What kind of exclusive events can members attend?',
      answer: `
        Members are often invited to exclusive events such as conferences, workshops, and social gatherings where they can meet influential people, 
        gain new insights, and enjoy unique experiences tailored to their interests and goals.`,
    },
    {
      question: 'How does membership in a group enhance credibility?',
      answer: `
        Being associated with a respected membership group can enhance an individual's or business’s credibility and reputation within their industry 
        or community, signaling a commitment to professional growth and ethical business practices.`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={{ maxWidth: '60%', margin: '50px auto', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#0D1F2D' }}>
      <h1 style={{ marginTop: '50px', textAlign: 'center', fontSize: '36px', marginBottom: '40px', color: '#0D1F2D' }}>
        Frequently Asked Questions
      </h1>
      <div style={{ borderTop: '1px solid #546A7B' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: 'pointer',
                padding: '15px 0',
                fontSize: '24px',
                borderBottom: '1px solid #546A7B',
                transition: 'color 0.3s ease',
                color: activeIndex === index ? '#90FCF9' : '#0D1F2D',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {faq.question}
              <span style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
                ▼
              </span>
            </div>
            {activeIndex === index && (
              <div style={{ padding: '15px 0', fontSize: '20px', lineHeight: '1.6', color: '#546A7B' }}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
