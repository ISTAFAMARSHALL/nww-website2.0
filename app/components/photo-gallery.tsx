'use client';

import Image from 'next/image';
import { useState } from 'react';
import Thumbnail01 from '@/app/images/people-images/2024-08-07 Lunch (1).jpeg';
import Thumbnail02 from '@/app/images/people-images/2024-08-07 Lunch (10).jpeg';

export default function PhotoGallery() {
  const items = [
    {
      title: 'Image 1',
      link: '#0',
      image: Thumbnail01,
    },
    {
      title: 'Image 2',
      link: '#0',
      image: Thumbnail02,
    },
    {
      title: 'Image 3',
      link: '#0',
      image: Thumbnail01,
    },
    {
      title: 'Image 4',
      link: '#0',
      image: Thumbnail02,
    },
    {
      title: 'Image 5',
      link: '#0',
      image: Thumbnail01,
    },
    {
      title: 'Image 6',
      link: '#0',
      image: Thumbnail02,
    },
    {
      title: 'Image 7',
      link: '#0',
      image: Thumbnail01,
    },
    {
      title: 'Image 8',
      link: '#0',
      image: Thumbnail02,
    },
    {
      title: 'Image 9',
      link: '#0',
      image: Thumbnail01,
    },
    {
      title: 'Image 10',
      link: '#0',
      image: Thumbnail02,
    },
    {
      title: 'Image 11',
      link: '#0',
      image: Thumbnail01,
    },
    {
      title: 'Image 12',
      link: '#0',
      image: Thumbnail02,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);

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
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section style={{ maxWidth: '50%', margin: '0 auto' }}>
      <h1
        style={{ marginTop: '100px', textAlign: 'center' }}
        className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6"
      >
        Photo Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 group">
        {selectedItems.map((item, index) => (
          <article
            key={index}
            className="relative aspect-video rounded-xl shadow-lg overflow-hidden group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
          >
            <figure className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-t before:to-75% before:from-gray-950/50 before:to-transparent">
              <Image
                className="h-full w-full object-cover"
                src={item.image}
                width={600}
                height={338}
                alt={item.title}
              />
            </figure>
            <div className="relative flex flex-col justify-end h-full w-full px-6 py-5">
              <h3 className="text-sm font-medium text-white">
                <a className="before:absolute before:inset-0" href={item.link}>
                  {item.title}
                </a>
              </h3>
            </div>
          </article>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          gap: '10px',
        }}
      >
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
            backgroundColor: currentPage === 0 ? '#ccc' : 'black',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Prev Page
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= totalPages - 1}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: currentPage >= totalPages - 1 ? 'not-allowed' : 'pointer',
            backgroundColor: currentPage >= totalPages - 1 ? '#ccc' : 'black',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Next Page
        </button>
      </div>
    </section>
  );
}
