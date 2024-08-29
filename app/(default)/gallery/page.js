import PhotoGallery from "@/app/components/photo-gallery";
import { EVENTS } from "@/app/lib/events";
import UpcomingEvents from "@/app/components/upcoming-events";


export const metadata = {
  title: 'Event Gallery',
  description: 'Explore the latest photos and videos from our Events.',
};

export default function GalleryPage() {

  return (
    <section style={{fontFamily: 'Arial, sans-serif', color: '#333' }} >
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 className="font-bold"style={{ fontSize: '36px', marginTop: '100px' , marginBottom: '-40px', color: '#333' }}>Upcoming Events</h1>
        {/* <p style={{ fontSize: '18px', color: '#666' }}>
        Explore the latest photos and videos from our Events.
        </p> */}
      </div>
      <UpcomingEvents />
      <h1 className="font-bold" id="past-events" style={{ padding: '20px', textAlign: 'center' , fontSize: '36px', marginBottom: '-40px' }}>Past events</h1>
      <PhotoGallery selectedItems={EVENTS} />
      
    </section>
  );
}
