'use client';

import Image from 'next/image';
import HomePageIMG from '@/app/images/lunch-images/2024-06-19 Punctuality is Key (25).jpeg';
import HomePageIMG2 from '@/app/images/lunch-images/WhatsApp Image 2024-05-22 at 3.18.19 PM.jpeg'
import HomePageIMG3 from '@/app/images/lunch-images/2024-08-07 Lunch (13).jpeg';
import HomePageIMG4 from '@/app/images/lunch-images/2024-08-07 Lunch (14).jpeg';

const contentData = [
  {
    image: HomePageIMG,
    text: 'This is the first piece of content with an image on the left and text on the right.',
  },
  {
    image: HomePageIMG2,
    text: 'This is the second piece of content with an image on the right and text on the left.',
  },
  {
    image: HomePageIMG3,
    text: 'This is the third piece of content with an image on the left and text on the right.',
  },
  {
    image: HomePageIMG4,
    text: 'This is the fourth piece of content with an image on the right and text on the left.',
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
      <h1>Some Verbiage Here</h1>
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
