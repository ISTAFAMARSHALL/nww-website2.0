import PhotoGallery from "@/app/components/photo-gallery";

export const metadata = {
  title: 'Event Gallery',
  description: 'Explore the latest photos and videos from our Events.',
};

export default function GalleryPage() {
  return (
    <section style={{fontFamily: 'Arial, sans-serif', color: '#333' }} >
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', marginTop: '100px' , marginBottom: '10px', color: '#333' }}>Our Gallery</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>
        Explore the latest photos and videos from our Events.
        </p>
      </div>
      <PhotoGallery />
    </section>
  );
}
