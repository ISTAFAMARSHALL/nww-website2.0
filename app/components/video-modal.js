// import { useState } from "react";

// export default function VideoModal(url) {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//     document.body.style.overflow = "hidden"; // Prevent background scrolling
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     document.body.style.overflow = ""; // Allow background scrolling
//   };

//   return (
//     <div>
//       <div
//         style={{
//           cursor: 'pointer',
//           width: '300px',
//           height: 'auto',
//           borderRadius: '8px',
//           overflow: 'hidden',
//         }}
//         onClick={openModal}
//       >
//         <img src={url} alt="Video Thumbnail" style={{ width: '100%', height: 'auto' }} />
//       </div>

//       {isOpen && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundColor: 'rgba(0, 0, 0, 0.8)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             zIndex: 1000,
//           }}
//           onClick={closeModal}
//         >
//           <div
//             style={{
//               position: 'relative',
//               backgroundColor: '#f9f9f9',
//               padding: '20px',
//               borderRadius: '8px',
//               maxWidth: '90%',
//               maxHeight: '80%',
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 backgroundColor: 'transparent',
//                 border: 'none',
//                 color: '#0d1f2d',
//                 fontSize: '24px',
//                 cursor: 'pointer',
//               }}
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <video controls style={{ width: '100%', height: 'auto', borderRadius: '8px' }}>
//               <source src={url} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// props handling/accessibility:
import { useState } from "react";

export default function VideoModal({ url }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = ""; // Allow background scrolling
  };

  return (
    <div>
      <div
        style={{
          cursor: 'pointer',
          width: '300px',
          height: 'auto',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
        onClick={openModal}
      >
        <img src={url} alt="Video Thumbnail" style={{ width: '100%', height: 'auto' }} />
      </div>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: 'relative',
              backgroundColor: '#f9f9f9',
              padding: '20px',
              borderRadius: '8px',
              maxWidth: '90%',
              maxHeight: '80%',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#0d1f2d',
                fontSize: '24px',
                cursor: 'pointer',
              }}
              onClick={closeModal}
            >
              &times;
            </button>
            <video controls style={{ width: '100%', height: 'auto', borderRadius: '8px' }}>
              <source src={url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
