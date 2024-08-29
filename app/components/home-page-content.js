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
    headline:'Elite Visionaries and Achievers',
    text: 'We are a distinguished network of driven individuals,\
    each one a beacon of motivation and excellence in their personal\
    and professional lives. Our community consists of high-caliber\
    professionals from diverse industries who are not only striving\
    for their own success but are also committed to inspiring and\
    uplifting others. Join us to connect with top-tier professionals\
    who are at the forefront of their fields, all driven by a\
    shared passion for growth, achievement, and making a meaningful\
    impact.',
  },
  {
    image: HomePageIMG2,
    header:'What We Do',
    headline:'Connect High-Caliber People',
    text: 'Our mission is to foster an environment\
    where every interaction leads to transformative growth and mutual\
    success.\This is not just networking—it’s a uniquely enriching\
    experience. We are dedicated to empowering our members and\
    supporting their ambitions, while also prioritizing the genuine\
    benefit of others. Engage with a select community where each\
    connection is purposeful, every insight is impactful, and every\
    opportunity is uniquely designed for both personal and collective\
    advancement.',
  },
  {
    image: HomePageIMG3,
    header:'What to expect',
    headline:'More Than Just a Lunch',
    text: 'Prepare for an exclusive experience where high-caliber\
    individuals come together in a setting designed for impactful\
    connections. Each gathering, limited to fewer than 8 carefully\
    chosen attendees, offers a unique blend of stimulating discussions,\
    industry insights, and unexpected moments of inspiration.\
    Expect the unexpected: engage in transformative conversations,\
    form valuable connections with peers who share your drive, and\
    savor exceptional cuisine that complements this unparalleled\
    experience. Discover how these intimate interactions can unlock\
    new opportunities for personal and professional growth. Led by the renowned Adam Connors, our event is an\
    unparalleled opportunity to engage with individuals who are\
    dedicated to pushing boundaries, achieving greatness, and\
    helping others do the same. Be part of this transformative\
    experience and surround yourself with those who will challenge\
    and inspire you to reach new heights.',
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
