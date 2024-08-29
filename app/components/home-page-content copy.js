'use client';

import Image from 'next/image';
import HomePageIMG from '@/app/images/lunch-images/2024-06-19 Punctuality is Key (25).jpeg';
import HomePageIMG2 from '@/app/images/lunch-images/WhatsApp Image 2024-05-22 at 3.18.19 PM.jpeg'
import HomePageIMG3 from '@/app/images/lunch-images/2024-08-07 Lunch (13).jpeg';
import HomePageIMG4 from '@/app/images/lunch-images/2024-08-07 Lunch (14).jpeg';

const contentData = [
  {
    image: HomePageIMG,
    header:'Who We Are',
    headline:'Pay-it-forward Practitioners',
    text: 'We are a community of like-minded individuals dedicated to paying it forward, driven by meaningful connections, professional development, and personal growth, with a strong commitment to benefiting others. Led by Adam Connors',
  },
  {
    image: HomePageIMG2,
    header:'What We Do',
    headline:'Connect High Caliber People',
    text: 'We connect, support, and empower each other through personalized introductions, business insights, and a commitment to mutual success.',
  },
  {
    image: HomePageIMG3,
    header:'What to expect',
    headline:'More Than Just a Lunch',
    text: 'Excellent food, Intellectual discussion, and inspirational company. Targeted networking, personalized connections, and actionable insights to help you achieve your specific goals.',
  },
  // {
  //   image: HomePageIMG4,
  //   header:'',
  //   headline:'Pay-it-forward Practitioners',
  //   text: 'Place verbiage regarding this image Here.',
  // },
];

export default function ContentComponent() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '75%',
        margin: '0 auto',
        gap: '3rem',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {contentData.slice(0,2).map((item, index) => (
        
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
            width: '80%',
            // flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
          }}
        >
          <h2
          style={{ fontSize: '55px', maxWidth: '30%'}}
          >{item.header}</h2>
          <div
            style={{
              flex: 1,
              position: 'relative',
              height: '300px',
            }}
          >
            <Image
              src={item.image}
              alt={`Content Image ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div
            style={{
              flex: 1,
              fontSize: '1.2rem',
              lineHeight: '1.6',
            }}
          >
            <h3 className="font-bold">{item.headline}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
      <a
          className="btn w-full text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
          href="#0"
          style={{
            backgroundColor: 'black',
            textAlign: 'center',
            fontSize: '25px',
            color: 'white',
          }}
          >
            See Our Mission
          </a>
      {contentData.slice(2).map((item, index) => (
        
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
            width: '80%',
            // flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
          }}
        >
          <h2
          style={{ fontSize: '55px', maxWidth: '30%'}}
          >{item.header}</h2>
          <div
            style={{
              flex: 1,
              position: 'relative',
              height: '300px',
            }}
          >
            <Image
              src={item.image}
              alt={`Content Image ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div
            style={{
              flex: 1,
              fontSize: '1.2rem',
              lineHeight: '1.6',
            }}
          >
            <h3 className="font-bold">{item.headline}</h3>
            <p>{item.text}</p>
            <a
          className="btn w-full text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
          href="#0"
          style={{
            backgroundColor: 'black',
            textAlign: 'center',
            color: 'white',
          }}
          >
            Reserve your Spot now
          </a>
          </div>
        </div>
      ))}
      
    </div>
    
  );
}
