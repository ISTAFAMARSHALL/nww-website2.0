'use client';

import Image from 'next/image';
import HomePageIMG from '@/app/images/lunch-images/2024-06-19 Punctuality is Key (25).jpeg';
import HomePageIMG2 from '@/app/images/lunch-images/WhatsApp Image 2024-05-22 at 3.18.19 PM.jpeg'
import HomePageIMG3 from '@/app/images/home-page-content-images/2023.11.22_Healthcare.jpg';
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
];

export default function ContentComponent() {
  return (
    <div id="home-page-content" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '80%',
        margin: '0 auto',
        marginTop: '60px',
        gap: '3rem',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {contentData.map((item, index) => (
        
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            width: '100%',
            maxWidth: '1200px',
            padding: '0 1rem',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
          }}
        >
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
            <h1 style={{
              fontSize: '32px'
            }}
            className="font-bold">{item.header}</h1>
            <h3 className="font-bold">{item.headline}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
