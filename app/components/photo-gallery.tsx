import Image from 'next/image';

import { EVENTS } from "@/app/lib/events";

export default function GalleryPage() {
 
  return (
    <section style={{ maxWidth: '90%', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      {/* <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#333', marginBottom: '40px' }}>
        Event Gallery
      </h2> */}
      {EVENTS.map((event, index) => (
        <div key={index} style={{ marginBottom: '60px', border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', padding: '15px' }}>
            <div style={{ flex: '1 1 60%', maxWidth: '60%', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '30px', color: '#333', marginBottom: '10px' }}>{event.date} - {event.title}</h3>
              <p style={{ fontSize: '16px', color: '#555' }}>{event.description}</p>
              <ul style={{ fontSize: '16px', color: '#555', marginTop: '20px' }}>
                <li>Networking</li>
                <li>Business Growth</li>
                <li>Community Building</li>
              </ul>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <a
                  className="btn w-full text-gray-800 shadow hover:bg-gray-50 sm:w-auto"
                  href={`/gallery/${event.slug}`}
                  style={{
                    backgroundColor: 'black',
                    padding: '10px 20px',
                    fontSize: '20px',
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: '5px',
                  }}
                >
                  See more photos and videos from this event
                </a>
              </div>
            </div>
            <div style={{ flex: '1 1 35%', maxWidth: '30%', textAlign: 'center', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
              <Image
                src={event.mainImage}
                alt={event.title}
                width={500}
                height={300}
                style={{ borderRadius: '8px', objectFit: 'fill' }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            {event.thumbnails.slice(0, 5).map((thumbnail, i) => (
              <div key={i} style={{ flex: '1', margin: '0 5px', border: '1px solid #ddd', padding: '5px', borderRadius: '8px' }}>
                <Image
                  src={thumbnail}
                  alt={`Thumbnail ${i + 1}`}
                  width={150}
                  height={100}
                  style={{ borderRadius: '8px', objectFit: 'fill', width: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
