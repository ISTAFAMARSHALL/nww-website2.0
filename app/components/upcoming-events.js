// 'use client';

// import { FUTURE_EVENTS } from "@/app/lib/future-events";

// export default function UpcomingEvents() {
//   return (
//     <section className="py-12 px-4 bg-gray-50">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* <h2 className="text-4xl font-bold mb-8 text-gray-800">Upcoming Events</h2> */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {FUTURE_EVENTS.slice(0, 6).map((event, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">{event.date} - in {event.location.includes('NYC') ? 'NYC' : 'Hoboken'}</h3>
//               <p className="text-gray-600 mb-4">{event.description !== 'TBD' ? event.description : ""}</p>
//               <p className="text-sm font-medium text-gray-500 mb-4">{event.location}</p>
//               <button
//                 className="text-blue-500 font-semibold hover:underline"
//                 onClick={() => window.location.href = `/events/${event.slug}`}
//               >
//                 Request Invitation for this Event
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// button click handler using next/router
import { useRouter } from 'next/router';

export default function UpcomingEvents() {
  const router = useRouter();
  
  const handleButtonClick = (slug) => {
    router.push(`/events/${slug}`);
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FUTURE_EVENTS.slice(0, 6).map((event, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {event.date} - in {event.location.includes('NYC') ? 'NYC' : 'Hoboken'}
              </h3>
              <p className="text-gray-600 mb-4">{event.description !== 'TBD' ? event.description : ""}</p>
              <p className="text-sm font-medium text-gray-500 mb-4">{event.location}</p>
              <button
                className="text-blue-500 font-semibold hover:underline"
                onClick={() => handleButtonClick(event.slug)}
              >
                Request Invitation for this Event
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
