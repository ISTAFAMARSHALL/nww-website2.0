// import PhotoGallery from "@/app/components/photo-gallery"
// import VideoGallery from "@/app/components/video-gallery"

// export const metadata = {
//   title: 'Gallery Page - Simple',
//   description: 'Page description',
// }


// export default function GalleryPage() {
//   return (
//     <>
//       <PhotoGallery />
//       <VideoGallery />
//     </>
//   )
// }

import PhotoGallery from "@/app/components/photo-gallery";
import VideoGallery from "@/app/components/video-gallery";

export const metadata = {
  title: 'Gallery Page - Simple Elegance',
  description: 'A beautifully crafted gallery showcasing photos and videos.',
};

export default function GalleryPage() {
  return (
    <section style={{fontFamily: 'Arial, sans-serif', color: '#333' }} >
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', marginTop: '100px' , marginBottom: '10px', color: '#333' }}>Our Gallery</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>
          Explore our latest photos and videos. Click on any item to view more details.
        </p>
      </div>
      <PhotoGallery />
      <VideoGallery />
    </section>
  );
}
