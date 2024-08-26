import Link from "next/link";

const lunches = [
  {
    date: 'August 7th, 2024',
    slug: 'pickleball-allstar-team',
    title: 'Pickleball Allstar Team',
    description: 'TBD',
    location: 'Tenth Street Pasta and Pizza - 1000 Willow Ave (corner of 10th & Willow) Hoboken, NJ',
    state: 'NJ'
  },
  // {
  //   date: 'August 21st, 2024',
  //   slug: 'inmates-run-the-asylum',
  //   title: 'Inmates run the Asylum',
  //   description: 'TBD',
  //   location: 'Tenth Street Pasta and Pizza - 1000 Willow Ave (corner of 10th & Willow) Hoboken, NJ',
  //   state: 'NJ'
  // },
  {
    date: 'August 27th, 2024',
    slug: 'tbd-nyc-august-27',
    title: 'TBD',
    description: 'TBD',
    location: 'Bareburger, 366 W 46th St, New York, NY 10036, USA',
    state: 'NY'
  },
  {
    date: 'August 28th, 2024',
    slug: 'tbd-hoboken-august-28',
    title: 'TBD',
    description: 'TBD',
    location: 'Tenth Street Pasta and Pizza - 1000 Willow Ave (corner of 10th & Willow) Hoboken, NJ',
    state: 'NJ'
  },
  {
    date: 'September 4th, 2024',
    slug: 'tbd-hoboken-september-4',
    title: 'TBD',
    description: 'TBD',
    location: 'Tenth Street Pasta and Pizza - 1000 Willow Ave (corner of 10th & Willow) Hoboken, NJ',
    state: 'NJ'
  },
  // {
  //   date: 'September 11th, 2024',
  //   slug: 'tbd-hoboken-september-11',
  //   title: 'TBD',
  //   description: 'TBD',
  //   location: 'Tenth Street Pasta and Pizza - 1000 Willow Ave (corner of 10th & Willow) Hoboken, NJ',
  //   state: 'NJ'
  // },
  // {
  //   date: 'September 18th, 2024',
  //   slug: 'tbd-hoboken-september-18',
  //   title: 'TBD',
  //   description: 'TBD',
  //   location: 'Tenth Street Pasta and Pizza - 1000 Willow Ave (corner of 10th & Willow) Hoboken, NJ',
  //   state: 'NJ'
  // },
]



export default function LunchDisplay() {

  const futureEvents = lunches.slice(2)

  return (
    <section 
      id="features-home"
      className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" style={{marginBottom: '-80px'}}>
        <div className="py-12 md:py-20" style={{marginBottom: '-80px'}} >
          <div className="grid overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1] lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gradient-to-b [&>*]:before:from-transparent [&>*]:before:via-gray-200 [&>*]:before:[block-size:100%] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] md:[&>*]:px-10 md:[&>*]:py-12">
            {/* Last Event */}
            {lunches[0] && (
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium">
                  <span>Last Event</span>
                </h3>
                <p className="text-[15px] text-gray-700">
                  {lunches[0].date}
                  <br />
                  {lunches[0].location.split('-')[0]}
                </p>
                <Link href={`/gallery/${lunches[0].slug.split('-')[0]}`} className="mt-4 inline-block rounded bg-red-500 px-6 py-2 text-white">
                  More Details
                </Link>
              </article>
            )}

            {/* Next Event */}
            {lunches[1] && (
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium">
                  <span>Next Event</span>
                </h3>
                <p className="text-[15px] text-gray-700">
                  {lunches[1].date}
                  <br />
                  {lunches[1].state}
                </p>
                <Link href='' className="mt-4 inline-block rounded bg-green-500 px-6 py-2 text-white">
                  Request to Attend
                </Link>
              </article>
            )}

            {/* Future Events */}
            {futureEvents.length > 0 && (
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium">
                  <span>Future Events</span>
                </h3>
                <div className="text-[15px] text-gray-700">
                  {futureEvents.map((event, index) => (
                    <div key={index}>
                      Date: {event.date}
                      <br />
                      State: {event.state}
                      <br />
                      <br />
                    </div>
                  ))}
                </div>
                <Link href='' className="mt-4 inline-block rounded bg-yellow-500 px-6 py-2 text-white">
                  More Events
                </Link>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
