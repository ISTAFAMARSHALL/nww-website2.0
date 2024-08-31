'use client';

import Image from 'next/image';
import { useState } from 'react';
import { EVENTS } from '@/app/lib/events';
import VideoGallery from '@/app/components/video-gallery';
import Modal from '@/app/components/modal';


export default function EventGallery(props) {
  const selectedEvent = EVENTS.find((item) => item.slug === props.params.slug);
  const itemsPhotos = selectedEvent.thumbnails;
  const itemVideos = selectedEvent.videos;
  const filterSlug = props.params.slug

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
      {itemVideos.length > 0 && <VideoGallery videos={itemVideos} />}

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
