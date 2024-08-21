'use client';

import Image from 'next/image';
import HomePageIMG from '@/app/images/lunch-images/2024-06-19 Punctuality is Key (25).jpeg';
import HomePageIMG2 from '@/app/images/lunch-images/WhatsApp Image 2024-05-22 at 3.18.19 PM.jpeg'
import HomePageIMG3 from '@/app/images/lunch-images/2024-08-07 Lunch (13).jpeg';
import HomePageIMG4 from '@/app/images/lunch-images/2024-08-07 Lunch (14).jpeg';

const contentData = [
  {
    image: HomePageIMG,
    text: 'Place verbiage regarding this image Here.',
  },
  {
    image: HomePageIMG2,
    text: 'Place verbiage regarding this image Here.',
  },
  {
    image: HomePageIMG3,
    text: 'Place verbiage regarding this image Here.',
  },
  {
    image: HomePageIMG4,
    text: 'Place verbiage regarding this image Here.',
  },
];

export default function ContentComponent() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '80%',
        margin: '0 auto',
        gap: '3rem',
      }}
    >
      <h2
        style={{ fontSize: '30px'}}
      >Some Verbiage Here</h2>
      {contentData.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            width: '80%',
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
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
