// import VideoModal from "@/app/components/video-modal"

// interface Video {
//   id: string;
//   title: string;
//   url: string;
//   // Add other fields as needed
// }

// interface VideoGalleryProps {
//   videos: Video[];
// }

// export default function VideoGallery({videos}: VideoGalleryProps) {

//   return (
//     <section style={{ maxWidth: '60%', margin: '50px auto' }}>
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
//         {videos.map((video, index) => {
          
//           return (
          
//           <div
//             key={index}
//             className="hover:transform hover:scale-105"
//             style={{
//               display: 'block',
//               flex: '1 1 calc(30% - 33px)',
//               position: 'relative',
//               borderRadius: '12px',
//               overflow: 'hidden',
//               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//               transition: 'transform 0.3s ease',
//             }}
            
//           >
//             <video
//               src={video.url}
//               controls
//               style={{ 
//                 objectFit: 'cover', 
//                 width: '100%', 
//                 height: '100%',
//                 borderRadius: '12px',
//               }}
//             />
//             <div
//               style={{
//                 position: 'absolute',
//                 bottom: '0',
//                 left: '0',
//                 right: '0',
//                 padding: '15px',
//                 background: 'rgba(0, 0, 0, 0.6)',
//                 color: 'white',
//                 textAlign: 'center',
//                 borderRadius: '0 0 12px 12px',
//               }}
//             >
//               <h3 style={{ margin: '0', fontSize: '18px' }}>{video.title}</h3>
//             </div>
//           </div>
//         )}
//         )}
//       </div>
//     </section>
//   );
// };


// accessibility/responsiveness added:
import VideoModal from "@/app/components/video-modal"

interface Video {
  id: string;
  title: string;
  url: string;
}

interface VideoGalleryProps {
  videos: Video[];
}

export default function VideoGallery({videos}: VideoGalleryProps) {
  return (
    <section style={{ maxWidth: '90%', margin: '50px auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#333', marginBottom: '20px' }}>
        Videos
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: '20px',
        }}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="hover:transform hover:scale-105"
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              flexBasis: 'calc(33.333% - 20px)',
            }}
          >
            <video
              src={video.url}
              controls
              style={{ 
                objectFit: 'cover', 
                width: '100%', 
                height: '100%',
                borderRadius: '12px',
              }}
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
              <h3 style={{ margin: '0', fontSize: '1rem' }}>{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
