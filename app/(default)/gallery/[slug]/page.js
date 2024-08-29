// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { EVENTS } from "@/app/lib/events";
// import VideoGallery from '@/app/components/video-gallery';

// export default function PhotoGallery(props) {

//     const selectedEvent = EVENTS.find((item) => item.slug === props.params.slug )
    
//     const itemsPhotos = selectedEvent.thumbnails

//     const itemVideos = selectedEvent.videos

//     const [currentPage, setCurrentPage] = useState(0);
//     const itemsPerPage = 6;
//     const totalPages = Math.ceil(itemsPhotos.length / itemsPerPage);

//     const handlePrevPage = () => {
//         if (currentPage > 0) {
//         setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleNextPage = () => {
//         if (currentPage < totalPages - 1) {
//         setCurrentPage(currentPage + 1);
//         }
//     };

//     const startIndex = currentPage * itemsPerPage;
//     const selectedItems = itemsPhotos.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <section style={{ maxWidth: '60%', margin: '50px auto' , fontFamily: 'Arial, sans-serif' }}>
      
//       <h1 style={{ fontSize: '36px', marginTop: '100px' , color: '#333' , padding: '20px', textAlign: 'center'}}>{selectedEvent.title} Event Gallery</h1>
      
//       <p style={{ fontSize: '18px', color: '#666' , marginBottom: '20px', textAlign: 'center' }}>
//         Click on any item to view more details.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {selectedItems.map((item, index) => (
//           <article
//             key={index}
//             style={{
//               position: 'relative',
//               borderRadius: '12px',
//               overflow: 'hidden',
//               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//               transition: 'transform 0.3s ease',
//             }}
//             className="hover:transform hover:scale-105"
//           >
//             <a href={console.log(item.src.split('/'))}>
//               <Image
//                 src={item.src}
//                 alt={`Image ${index}`}
//                 width={600}
//                 height={400}
//                 style={{ objectFit: 'cover', width: '100%', height: '100%' }}
//               />
//             </a>
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
//               }}
//             >
//               <h3 style={{ margin: '0', fontSize: '18px' }}> Image {`${(index+1 + startIndex)}`} </h3>
//             </div>
//           </article>
//         ))}
//       </div>
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           marginTop: '30px',
//           gap: '20px',
//         }}
//       >
//         <button
//           onClick={handlePrevPage}
//           disabled={currentPage === 0}
//           style={{
//             padding: '10px 30px',
//             fontSize: '16px',
//             cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
//             backgroundColor: currentPage === 0 ? '#ccc' : '#333',
//             color: 'white',
//             border: 'none',
//             borderRadius: '25px',
//             transition: 'background-color 0.3s ease',
//           }}
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage >= totalPages - 1}
//           style={{
//             padding: '10px 30px',
//             fontSize: '16px',
//             cursor: currentPage >= totalPages - 1 ? 'not-allowed' : 'pointer',
//             backgroundColor: currentPage >= totalPages - 1 ? '#ccc' : '#333',
//             color: 'white',
//             border: 'none',
//             borderRadius: '25px',
//             transition: 'background-color 0.3s ease',
//           }}
//         >
//           Next
//         </button>
//       </div>
//       <br></br>
//       {itemVideos.length === 0 ? <p></p> : <VideoGallery videos={itemVideos} />}
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { EVENTS } from '@/app/lib/events';
import VideoGallery from '@/app/components/video-gallery';
import Modal from '@/app/components/modal';


export default function PhotoGallery(props) {
  const selectedEvent = EVENTS.find((item) => item.slug === props.params.slug);
  const itemsPhotos = selectedEvent.thumbnails;
  const itemVideos = selectedEvent.videos;

  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(itemsPhotos.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const selectedItems = itemsPhotos.slice(startIndex, startIndex + itemsPerPage);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section style={{ marginTop: '100px' }} className="max-w-4xl mx-auto mt-12 font-sans">
      <h1 className="text-4xl text-center text-gray-800 mt-12 mb-6">
        {selectedEvent.title} Event Gallery
      </h1>

      <p className="text-lg text-center text-gray-600 mb-6">
        Click on any item to view more details.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {selectedItems.map((item, index) => (
          <article
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-transform"
            onClick={() => openModal(item.src)}
          >
            <Image
              src={item.src}
              alt={`Image ${index}`}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white text-center">
              <h3 className="m-0 text-lg">Image {index + 1 + startIndex}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className={`px-6 py-2 text-white rounded-full transition-colors ${
            currentPage === 0 ? 'bg-gray-400' : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= totalPages - 1}
          className={`px-6 py-2 text-white rounded-full transition-colors ${
            currentPage >= totalPages - 1
              ? 'bg-gray-400'
              : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          Next
        </button>
      </div>

      <br />
      {itemVideos.length > 0 && 
      (<VideoGallery videos={itemVideos} />)}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Selected Image"
            width={900}
            height={600}
            className="w-full h-auto object-contain"
          />
        )}
      </Modal>
    </section>
  );
}
