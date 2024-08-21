// 'use client';

// import Image from 'next/image';
// import peopleIMG1 from '@/app/images/people-images/2024-08-07 Lunch (1).jpeg';
// import peopleIMG2 from '@/app/images/people-images/2024-08-07 Lunch (1).jpeg';

// export default function VideoGallery() {
//   return (
//     <section style={{ maxWidth: '80%', margin: '0 auto' }}>
//       <h1
//         style={{ marginTop: '50px', textAlign: 'center' }}
//         className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6"
//       >
//         Video Gallery
//       </h1>
          
//       <div
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           flexDirection: 'row',
//           justifyContent: 'center',
//           gap: '25px',
//           maxWidth: '80%',
//           margin: '40px auto', // Adding margin to separate from the PhotoGallery
//         }}
//       >

//         <a href={'/projects/smart-buy'} style={{ display: 'block' }}>
//           <Image
//             className="rounded-xl even:rotate-2 odd:-rotate-2 hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
//             src={peopleIMG1}
//             width={250}
//             height={175}
//             alt="peopleIMG1"
//             priority
  
//           />
//         </a>

//         <a href={'/projects/stims'} style={{ display: 'block' }}>
//           <Image
//             className="rounded-xl odd:rotate-2 even:-rotate-2 hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
//             src={peopleIMG2}
//             width={250}
//             height={175}
//             alt="peopleIMG2"
//             priority

//           />
//         </a>

//         <a href={'/projects/smart-buy'} style={{ display: 'block' }}>
//           <Image
//             className="rounded-xl even:rotate-2 odd:-rotate-2 hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
//             src={peopleIMG1}
//             width={250}
//             height={175}
//             alt="peopleIMG1"
//             priority

//           />
//         </a>

//         <a href={'/projects/stims'} style={{ display: 'block' }}>
//           <Image
//             className="rounded-xl odd:rotate-2 even:-rotate-2 hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
//             src={peopleIMG2}
//             width={250}
//             height={175}
//             alt="peopleIMG2"
//             priority

//           />
//         </a>

//       </div>
//     </section>
//   );
// }

// 'use client';

// import Image from 'next/image';
// import peopleIMG1 from '@/app/images/people-images/2024-08-07 Lunch (1).jpeg';
// import peopleIMG2 from '@/app/images/people-images/2024-08-07 Lunch (10).jpeg';

// export default function VideoGallery() {
//   return (
//     <section style={{ maxWidth: '50%', margin: '50px auto' }}>
//       <h2 style={{ textAlign: 'center', fontSize: '28px', color: '#333', marginBottom: '20px' }}>
//         Videos
//       </h2>
//       <div
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'space-between',
//           gap: '30px',
//         }}
//       >
//         <a href={'/projects/smart-buy'} style={{ display: 'block', flex: '1 1 calc(33% - 30px)' }}>
//           <Image
//             src={peopleIMG1}
//             alt="Video 1"
//             width={400}
//             height={225}
//             style={{
//               borderRadius: '12px',
//               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//               transition: 'transform 0.3s ease',
//               objectFit: 'cover',
//               width: '100%',
//               height: 'auto',
//             }}
//             className="hover:transform hover:scale-105"
//           />
//         </a>

//         <a href={'/projects/stims'} style={{ display: 'block', flex: '1 1 calc(33% - 30px)' }}>
//           <Image
//             src={peopleIMG2}
//             alt="Video 2"
//             width={400}
//             height={225}
//             style={{
//               borderRadius: '12px',
//               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//               transition: 'transform 0.3s ease',
//               objectFit: 'cover',
//               width: '100%',
//               height: 'auto',
//             }}
//             className="hover:transform hover:scale-105"
//           />
//         </a>

//         <a href={'/projects/maybelline-catelog-collection'} style={{ display: 'block', flex: '1 1 calc(33% - 30px)' }}>
//           <Image
//             src={peopleIMG1}
//             alt="Video 3"
//             width={400}
//             height={225}
//             style={{
//               borderRadius: '12px',
//               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//               transition: 'transform 0.3s ease',
//               objectFit: 'cover',
//               width: '100%',
//               height: 'auto',
//             }}
//             className="hover:transform hover:scale-105"
//           />
//         </a>

//         <a href={'/projects/stims'} style={{ display: 'block', flex: '1 1 calc(33% - 30px)' }}>
//           <Image
//             src={peopleIMG2}
//             alt="Video 4"
//             width={400}
//             height={225}
//             style={{
//               borderRadius: '12px',
//               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//               transition: 'transform 0.3s ease',
//               objectFit: 'cover',
//               width: '100%',
//               height: 'auto',
//             }}
//             className="hover:transform hover:scale-105"
//           />
//         </a>
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import peopleIMG1 from '@/app/images/people-images/2024-08-07 Lunch (1).jpeg';
import peopleIMG2 from '@/app/images/people-images/2024-08-07 Lunch (10).jpeg';

export default function VideoGallery() {
  const videos = [
    { title: 'Video 1', link: '#0', image: peopleIMG1 },
    { title: 'Video 2', link: '#0', image: peopleIMG2 },
    { title: 'Video 3', link: '#0', image: peopleIMG1 },
    { title: 'Video 4', link: '#0', image: peopleIMG2 },
  ];

  return (
    <section style={{ maxWidth: '60%', margin: '50px auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '28px', color: '#333', marginBottom: '20px' }}>
        Videos
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '30px',
        }}
      >
        {videos.map((video, index) => (
          <a  
            key={index} 
            href={video.link} 
            className="hover:transform hover:scale-105" 
            style={{ 
              display: 'block', 
              flex: '1 1 calc(30% - 33px)', 
              position: 'relative', 
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease'
            }}
          >
            <Image
              src={video.image}
              alt={video.title}
              width={400}
              height={225}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}             
            />
            <div 
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                padding: '15px',
                background: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                textAlign: 'center',
                borderRadius: '0 0 12px 12px',
              }}
            >
              <h3 style={{ margin: '0', fontSize: '18px' }}>{video.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}




