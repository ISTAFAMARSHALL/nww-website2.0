// 'use client';

// import Image from 'next/image';
// import HomePageIMG from '@/app/images/lunch-images/2024-06-19 Punctuality is Key (25).jpeg';
// import HomePageIMG2 from '@/app/images/lunch-images/WhatsApp Image 2024-05-22 at 3.18.19 PM.jpeg'
// import HomePageIMG3 from '@/app/images/home-page-content-images/2023.11.22_Healthcare.jpg';
// import HomePageIMG4 from '@/app/images/lunch-images/2024-08-07 Lunch (14).jpeg';


// const contentData = [
//   {
//     image: HomePageIMG,
//     header:'Who We Are',
//     headline:'Pay-it-forward Practitioners',
//     text: 'We are a community of like-minded individuals dedicated to paying it forward, driven by meaningful connections, professional development, and personal growth, with a strong commitment to benefiting others. Led by Adam Connors',
//   },
//   {
//     image: HomePageIMG2,
//     header:'What We Do',
//     headline:'Connect High Caliber People',
//     text: 'We connect, support, and empower each other through personalized introductions, business insights, and a commitment to mutual success.',
//   },
//   {
//     image: HomePageIMG3,
//     header:'What to expect',
//     headline:'More Than Just a Lunch',
//     text: 'Excellent food, Intellectual discussion, and inspirational company. Targeted networking, personalized connections, and actionable insights to help you achieve your specific goals.',
//   },
// ];

// export default function ContentComponent() {
//   return (
//     <div id="home-page-content" 
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         maxWidth: '80%',
//         margin: '0 auto',
//         marginTop: '60px',
//         gap: '3rem',
//         fontFamily: 'Arial, sans-serif'
//       }}
//     >
//       {contentData.map((item, index) => (
        
//         <div
//           key={index}
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '2rem',
//             width: '80%',
//             flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
//           }}
//         >
//           <div
//             style={{
//               flex: 1,
//               position: 'relative',
//               height: '300px',
//             }}
//           >
//             <Image
//               src={item.image}
//               alt={`Content Image ${index + 1}`}
//               fill
//               style={{ objectFit: 'cover' }}
//             />
//           </div>
//           <div
//             style={{
//               flex: 1,
//               fontSize: '1.2rem',
//               lineHeight: '1.6',
//             }}
//           >
//             <h1 style={{
//               fontSize: '32px'
//             }}
//             className="font-bold">{item.header}</h1>
//             <h3 className="font-bold">{item.headline}</h3>
//             <p>{item.text}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

'use client';

import Image from 'next/image';
import HomePageIMG from '@/app/images/lunch-images/2024-06-19 Punctuality is Key (25).jpeg';
import HomePageIMG2 from '@/app/images/lunch-images/WhatsApp Image 2024-05-22 at 3.18.19 PM.jpeg';
import HomePageIMG3 from '@/app/images/home-page-content-images/2023.11.22_Healthcare.jpg';

const contentData = [
  {
    image: HomePageIMG,
    header: 'Attendees',
    headline: 'Elite Visionaries and Achievers',
    text: 'A room filled with people who refuse to settle for mediocrity, who are driven by curiosity and a relentless pursuit of excellence. These are individuals who believe in paying it forward and cherish the value of meaningful connections and insightful conversations.',
  },
  {
    image: HomePageIMG2,
    header: 'What We Do',
    headline: 'Connect High Caliber People',
    text: 'Our mission is to foster an environment\
    where every interaction leads to transformative growth and mutual\
    success.\ This is not just networking—it’s a uniquely enriching\
    experience.',
  },
  {
    image: HomePageIMG3,
    header: 'What to Expect',
    headline: 'Prepare for an exclusive experience',
    text: 'Join us for an exclusive event led by the renowned Adam Connors, featuring a carefully curated group of no more than 8  carefully chosen, high-caliber individuals. Dive into stimulating discussions and gain valuable insights in a transformative experience that will inspire and challenge you to reach new heights.',
  },
];

export default function ContentComponent() {
  return (
    <div
      id="home-page-content"
      style={{marginTop: '100px'}}
      className="flex flex-col items-center max-w-4xl mx-auto mt-16 gap-12 font-sans text-[#0D1F2D]"
    >
      {contentData.map((item, index) => (
        <div
          key={index}
          className={`flex items-center w-full gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
        >
          <div className="flex-1 relative h-80">
            <Image
              src={item.image}
              alt={`Content Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 text-lg leading-relaxed">
            <h1 className="text-3xl font-bold text-[#F4A690] mb-4">{item.header}</h1>
            <h3 className="font-semibold  text-xl mb-2">{item.headline}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
