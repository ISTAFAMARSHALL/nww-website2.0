// import Link from "next/link";

// const lunches = [
//   {
//     date: 'August 7th, 2024',
//     slug: 'pickleball-allstar-team',
//     title: 'Pickleball Allstar Team',
//     description: 'TBD',
//     location: 'Tenth Street Pasta and Pizza - 1000 Willow Ave (corner of 10th & Willow) Hoboken, NJ',
//     state: 'NJ'
//   },
//   // {
//   //   date: 'August 21st, 2024',
//   //   slug: 'inmates-run-the-asylum',
//   //   title: 'Inmates run the Asylum',
//   //   description: 'TBD',
//   //   location: 'Tenth Street Pasta and Pizza - 1000 Willow Ave (corner of 10th & Willow) Hoboken, NJ',
//   //   state: 'NJ'
//   // },
//   {
//     date: 'August 27th, 2024',
//     slug: 'tbd-nyc-august-27',
//     title: 'TBD',
//     description: 'TBD',
//     location: 'Bareburger, 366 W 46th St, New York, NY 10036, USA',
//     state: 'NY'
//   },
//   {
//     date: 'August 28th, 2024',
//     slug: 'tbd-hoboken-august-28',
//     title: 'TBD',
//     description: 'TBD',
//     location: 'Tenth Street Pasta and Pizza - 1000 Willow Ave (corner of 10th & Willow) Hoboken, NJ',
//     state: 'NJ'
//   },
//   {
//     date: 'September 4th, 2024',
//     slug: 'tbd-hoboken-september-4',
//     title: 'TBD',
//     description: 'TBD',
//     location: 'Tenth Street Pasta and Pizza - 1000 Willow Ave (corner of 10th & Willow) Hoboken, NJ',
//     state: 'NJ'
//   },
//   {
//     date: 'September 11th, 2024',
//     slug: 'tbd-hoboken-september-11',
//     title: 'TBD',
//     description: 'TBD',
//     location: 'Tenth Street Pasta and Pizza - 1000 Willow Ave (corner of 10th & Willow) Hoboken, NJ',
//     state: 'NJ'
//   },
//   {
//     date: 'September 18th, 2024',
//     slug: 'tbd-hoboken-september-18',
//     title: 'TBD',
//     description: 'TBD',
//     location: 'Tenth Street Pasta and Pizza - 1000 Willow Ave (corner of 10th & Willow) Hoboken, NJ',
//     state: 'NJ'
//   },
// ]



// export default function LunchDisplay() {

//   const futureEvents = lunches.slice(4)

//   return (
//     <section 
//       id="features-home"
//       className="relative">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6" style={{marginTop: '-40px' , marginBottom: '-80px'}}>
//         <div className="py-12 md:py-20" style={{marginBottom: '-80px'}} >
//           <div className="grid overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1] lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gradient-to-b [&>*]:before:from-transparent [&>*]:before:via-gray-200 [&>*]:before:[block-size:100%] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] md:[&>*]:px-10 md:[&>*]:py-12">
//             {/* Last Event */}
//             {lunches[0] && (
//               <article>
//                 <h3 className="mb-2 flex items-center space-x-2 font-medium">
//                   <span>Every Tuesday</span>
//                 </h3>
//                 <p className="text-[15px] text-gray-700">
                  
//                   <br />
//                   Hoboken, NJ
//                 </p>
//                 <Link href={`/gallery/${lunches[0].slug.split('-')[0]}`} className="mt-4 inline-block rounded bg-red-500 px-6 py-2 text-white">
//                   More Details
//                 </Link>
//               </article>
//             )}

//             {/* Next Event */}
//             {lunches[1] && (
//               <article>
//                 <h3 className="mb-2 flex items-center space-x-2 font-medium">
//                   <span>Next Lunch</span>
//                 </h3>
//                 <p className="text-[15px] text-gray-700">
//                   {lunches[3].date}
//                   <br />
//                   {lunches[3].state}
//                 </p>
//                 <Link href='/form' className="mt-4 inline-block rounded bg-green-500 px-6 py-2 text-white">
//                   Request to Attend
//                 </Link>
//               </article>
//             )}

//             {/* Future Events */}
//             {futureEvents.length > 0 && (
//               <article>
//                 <h3 className="mb-2 flex items-center space-x-2 font-medium">
//                   <span>Every Wednesday</span>
//                 </h3>
//                 <div className="text-[15px] text-gray-700">
//                   {futureEvents.map((event, index) => (
//                     <div key={index}>
//                       Date: {event.date}
//                       <br />
//                       State: {event.state}
//                       <br />
//                       <br />
//                     </div>
//                   ))}
//                 </div>
//                 <Link href='' className="mt-4 inline-block rounded bg-yellow-500 px-6 py-2 text-white">
//                   More Events
//                 </Link>
//               </article>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Link from "next/link";

// export default function LunchDisplay() {
//   return (
//     <section 
//       id="features-home"
//       className="relative py-12 md:py-20 bg-gray-100"
//       style={{fontFamily: 'Arial, sans-serif'}}
//     >
//       <div className="mx-auto max-w-4xl px-4 sm:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-y border-gray-300 py-8">
          
//           {/* New York Lunch */}
//           <article className="text-center">
//             <h3 className="mb-4 text-2xl font-bold text-gray-900">
//               Every Tuesday
//             </h3>
//             <p className="text-lg text-gray-700">
//               New York, NY
//             </p>
//             <Link href="/form">
//               <p className="mt-6 inline-block rounded bg-green-600 px-8 py-4 text-white text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
//                 Reserve Your Spot
//               </p>
//             </Link>
//           </article>

//           {/* Hoboken Lunch */}
//           <article className="text-center">
//             <h3 className="mb-4 text-2xl font-bold text-gray-900">
//               Every Wednesday
//             </h3>
//             <p className="text-lg text-gray-700">
//               Hoboken, NJ
//             </p>
//             <Link href="/form">
//               <p className="mt-6 inline-block rounded bg-green-600 px-8 py-4 text-white text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
//                 Reserve Your Spot
//               </p>
//             </Link>
//           </article>
          
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";

export default function LunchDisplay() {
  return (
    <section 
      id="features-home"
      className="relative py-12 md:py-20 bg-gray-100 text-center"
      style={{fontFamily: 'Arial, sans-serif'}}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          We host regular lunch events across different cities. 
          <br></br>
          Join us for impactful lunches in your city.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
          
          {/* New York Lunch */}
          <article>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Every Tuesday
            </h3>
            <p className="text-lg text-gray-700">
              New York, NY
            </p>
          </article>

          {/* Hoboken Lunch */}
          <article>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Every Wednesday
            </h3>
            <p className="text-lg text-gray-700">
              Hoboken, NJ
            </p>
          </article>
          
        </div>

        <div className="mt-8">
          <Link href="/form">
            <p className="inline-block rounded bg-green-600 px-12 py-4 text-white text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
              Reserve Your Spot
            </p>
          </Link>
        </div>
        
      </div>
    </section>
  );
}
