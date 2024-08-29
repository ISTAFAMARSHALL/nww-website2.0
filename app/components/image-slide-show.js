// 'use client';

// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// import HomePageIMG from '@/app/images/home-page-header-images/2024-05-29 (1).jpeg';
// import HomePageIMG2 from '@/app/images/home-page-header-images/2024-06-11  (1).jpeg';
// import HomePageIMG3 from '@/app/images/home-page-header-images/2024-06-26 (4).jpeg';
// import HomePageIMG4 from '@/app/images/home-page-header-images/2024.01.31_Motley Crew doing Yave shots.jpg';
// import HomePageIMG5 from '@/app/images/home-page-header-images/Pasted Graphic.png';
// import HomePageIMG6 from '@/app/images/home-page-header-images/Pasted Graphic 1.png';

// const images = [
//   { image: HomePageIMG6, alt: 'More Than Just A Lunch!' },
//   { image: HomePageIMG, alt: 'More Than Just A Lunch!' },
//   { image: HomePageIMG2, alt: 'More Than Just A Lunch!' },
//   { image: HomePageIMG3, alt: 'More Than Just A Lunch!' },
//   { image: HomePageIMG5, alt: 'More Than Just A Lunch!' },
//   { image: HomePageIMG4, alt: 'More Than Just A Lunch!' },
// ];

// export default function ImageSlideShow() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex < images.length - 1 ? prevIndex + 1 : 0
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' , fontFamily: 'Arial, sans-serif'  }}>
//       {images.map((img, index) => (
//         <div
//           key={index}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             opacity: index === currentImageIndex ? 1 : 0,
//             transition: 'opacity 0s ease-in-out',
//             zIndex: index === currentImageIndex ? 1 : 0,
//           }}
//         >
//           <Image
//             src={img.image}
//             alt={img.alt}
//             fill
//             style={{ objectFit: 'cover' }}
//             priority={index === currentImageIndex}
//           />
//         </div>
//       ))}
//       <div
        
//       >
//         <h1 style={{

//           position: 'absolute',
//           top: '45%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           zIndex: 2,
//           textAlign: 'center',
//           fontSize: '45px',
//           color: 'wheat',
//           fontWeight: 'bolder',          
//         }}>It's Not just a Club. It's Not Just a Meal. It's...</h1>
//         <h1 style={{
//           position: 'absolute',
//           top: '55%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           zIndex: 2,
//           textAlign: 'center',
//           fontSize: '55px',
//           color: 'wheat',
//           fontWeight: 'bolder',

//           borderBlockStyle: 'groove',
//           borderBlockColor: 'black',
//         }}>More Than Just a Lunch!</h1>
        
//       </div>
//       {/* <button
//         style={{
//           position: 'absolute',
//           top: '38%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           zIndex: 2,
//           textAlign: 'center',
//           fontSize: '45px',
//           color: 'wheat',
//         }}>Learn More</button> */}
//         <a
//           className="btn w-full text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
//           href="#home-page-content"
//           style={{
//             backgroundColor: 'wheat',
//             position: 'absolute',
//             top: '65%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             zIndex: 2,
//             // textAlign: 'center',
//             fontSize: '25px',
//             // color: 'wheat',
//           }}
//           >
//             Learn More
//           </a>
//     </div>
//   );
// }

'use client';

// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// import HomePageIMG from '@/app/images/home-page-header-images/2024-05-29 (1).jpeg';
// import HomePageIMG2 from '@/app/images/home-page-header-images/2024-06-11  (1).jpeg';
// import HomePageIMG3 from '@/app/images/home-page-header-images/2024-06-26 (4).jpeg';
// import HomePageIMG4 from '@/app/images/home-page-header-images/2024.01.31_Motley Crew doing Yave shots.jpg';
// import HomePageIMG5 from '@/app/images/home-page-header-images/Pasted Graphic.png';
// import HomePageIMG6 from '@/app/images/home-page-header-images/Pasted Graphic 1.png';

// const images = [
//   { image: HomePageIMG6, alt: 'More Than Just A Lunch!' },
//   { image: HomePageIMG, alt: 'More Than Just A Lunch!' },
//   { image: HomePageIMG2, alt: 'More Than Just A Lunch!' },
//   { image: HomePageIMG3, alt: 'More Than Just A Lunch!' },
//   { image: HomePageIMG5, alt: 'More Than Just A Lunch!' },
//   { image: HomePageIMG4, alt: 'More Than Just A Lunch!' },
// ];

// export default function ImageSlideShow() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex < images.length - 1 ? prevIndex + 1 : 0
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' , fontFamily: 'Arial, sans-serif'  }}>
//       {images.map((img, index) => (
//         <div
//           key={index}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             opacity: index === currentImageIndex ? 1 : 0,
//             transition: 'opacity 0s ease-in-out',
//             zIndex: index === currentImageIndex ? 1 : 0,
//           }}
//         >
//           <Image
//             src={img.image}
//             alt={img.alt}
//             fill
//             style={{ objectFit: 'cover' }}
//             priority={index === currentImageIndex}
//           />
//         </div>
//       ))}
//       <div
        
//       >
//         <h1 style={{

//           position: 'absolute',
//           top: '45%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           zIndex: 2,
//           textAlign: 'center',
//           fontSize: '45px',
//           color: 'wheat',
//           fontWeight: 'bolder',          
//         }}>It's Not just a Club. It's Not Just a Meal. It's...</h1>
//         <h1 style={{
//           position: 'absolute',
//           top: '55%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           zIndex: 2,
//           textAlign: 'center',
//           fontSize: '55px',
//           color: 'wheat',
//           fontWeight: 'bolder',

//           borderBlockStyle: 'groove',
//           borderBlockColor: 'black',
//         }}>More Than Just a Lunch!</h1>
        
//       </div>
//       {/* <button
//         style={{
//           position: 'absolute',
//           top: '38%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           zIndex: 2,
//           textAlign: 'center',
//           fontSize: '45px',
//           color: 'wheat',
//         }}>Learn More</button> */}
//         <a
//           className="btn w-full text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
//           href="#home-page-content"
//           style={{
//             backgroundColor: 'wheat',
//             position: 'absolute',
//             top: '65%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             zIndex: 2,
//             // textAlign: 'center',
//             fontSize: '25px',
//             // color: 'wheat',
//           }}
//           >
//             Learn More
//           </a>
//     </div>
//   );
// }

import Image from 'next/image';
import { useState, useEffect } from 'react';

import HomePageIMG from '@/app/images/home-page-header-images/2024-05-29 (1).jpeg';
import HomePageIMG2 from '@/app/images/home-page-header-images/2024-06-11  (1).jpeg';
import HomePageIMG3 from '@/app/images/home-page-header-images/2024-06-26 (4).jpeg';
import HomePageIMG4 from '@/app/images/home-page-header-images/2024.01.31_Motley Crew doing Yave shots.jpg';
import HomePageIMG5 from '@/app/images/home-page-header-images/Pasted Graphic.png';
import HomePageIMG6 from '@/app/images/home-page-header-images/Pasted Graphic 1.png';

const images = [
  { image: HomePageIMG6, alt: 'More Than Just A Lunch!' },
  { image: HomePageIMG, alt: 'More Than Just A Lunch!' },
  { image: HomePageIMG2, alt: 'More Than Just A Lunch!' },
  { image: HomePageIMG3, alt: 'More Than Just A Lunch!' },
  { image: HomePageIMG5, alt: 'More Than Just A Lunch!' },
  { image: HomePageIMG4, alt: 'More Than Just A Lunch!' },
];

export default function ImageSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', fontFamily: 'Arial, sans-serif' }}>
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        >
          <Image
            src={img.image}
            alt={img.alt}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === currentImageIndex}
          />
        </div>
      ))}
      <div>
        <h1 className="header-text" style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        }}>
          It's Not just a Club. It's Not Just a Meal. It's...
        </h1>
        <h1 className="header-subtext" style={{
          position: 'absolute',
          top: '55%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        }}>
          More Than Just a Lunch!
        </h1>
      </div>
      <a
        className="btn w-full text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
        href="#home-page-content"
        style={{
          backgroundColor: 'wheat',
          position: 'absolute',
          top: '65%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
        }}
      >
        Learn More
      </a>
    </div>
  );
}
