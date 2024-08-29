// import React, { useState, useRef } from 'react';

// interface Video {
//   id: string;
//   title: string;
//   url: string;
// }

// interface VideoGalleryProps {
//   videos: Video[];
// }

// export default function VideoGallery({ videos }: VideoGalleryProps) {
//   // State for modal
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  
//   // Create an array of refs to hold references to all video elements
//   const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

//   // Function to open modal
//   const openModal = (video: Video, index: number) => {
//     // Pause all videos
//     videoRefs.current.forEach((videoRef) => {
//       if (videoRef) {
//         videoRef.pause();
//       }
//     });
//     // Set the selected video and open the modal
//     setSelectedVideo(video);
//     setIsModalOpen(true);
//   };

//   // Function to close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedVideo(null);
//   };

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
//         {videos.map((video, index) => (
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
//               cursor: 'pointer',
//             }}
//             onClick={() => openModal(video, index)} // Pass index to identify the clicked video
//           >
//             <video
//               ref={(el) => (videoRefs.current[index] = el)} // Assign ref to each video element
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
//         ))}
//       </div>

//       {/* Modal Implementation */}
//       {isModalOpen && selectedVideo && (
//         <div
//           style={{
//             position: 'fixed',
//             top: '0',
//             left: '0',
//             right: '0',
//             bottom: '0',
//             backgroundColor: 'rgba(0, 0, 0, 0.8)',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             zIndex: 1000,
//           }}
//           onClick={closeModal}
//         >
//           <div
//             style={{
//               position: 'relative',
//               maxWidth: '90%',
//               width: '800px',
//               backgroundColor: 'black',
//               padding: '20px',
//               borderRadius: '12px',
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <video
//               src={selectedVideo.url}
//               controls
//               autoPlay
//               style={{ width: '100%', borderRadius: '12px' }}
//             />
//             <button
//               onClick={closeModal}
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 background: 'transparent',
//                 border: 'none',
//                 color: 'white',
//                 fontSize: '24px',
//                 cursor: 'pointer',
//               }}
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


import React, { useState, useRef } from 'react';

interface Video {
  id: string;
  title: string;
  url: string;
}

interface VideoGalleryProps {
  videos: Video[];
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // Create an array of refs to hold references to all video elements
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Function to open modal
  const openModal = (video: Video) => {
    // Pause all videos
    videoRefs.current.forEach((videoRef) => {
      if (videoRef) {
        videoRef.pause();
      }
    });
    // Set the selected video and open the modal
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

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
          <div
            key={index}
            className="hover:transform hover:scale-105"
            style={{
              display: 'block',
              flex: '1 1 calc(30% - 33px)',
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
            }}
            onClick={() => openModal(video)} // Open modal with selected video
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
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
              <h3 style={{ margin: '0', fontSize: '18px' }}>{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Implementation */}
      {isModalOpen && selectedVideo && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={closeModal} // Close modal when background is clicked
        >
          <div
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '800px',
              backgroundColor: 'black',
              padding: '10px',
              borderRadius: '12px',
              overflow: 'hidden',
              maxHeight: '90vh', // Ensure modal content doesn't exceed viewport height
            }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close when video container is clicked
          >
            <video
              src={selectedVideo.url}
              controls
              autoPlay
              style={{
                width: '100%',
                maxHeight: '80vh', // Control video height to prevent it from going off-screen
                borderRadius: '12px',
              }}
            />
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
