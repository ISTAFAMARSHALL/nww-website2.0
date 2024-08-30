// export default function FAQDisplay() {
//   return (
//     <section id="features-home" className="relative">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6" style={{ marginBottom: '-80px', marginTop: '-60px' }}>
//         <div className="py-12 md:py-20">
//           <div
//             style={{ fontFamily: 'Arial, sans-serif' }}
//             className="grid overflow-hidden border-y border-transparent lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gradient-to-b [&>*]:before:from-transparent [&>*]:before:via-[#F9F9F9] [&>*]:before:[block-size:100%] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] md:[&>*]:px-10 md:[&>*]:py-12"
//           >
//             <article>
//               <h3 style={{fontSize: '145%'}} className="mb-2 flex items-center space-x-2 font-medium text-[#0D1F2D]">
//                 Why join membership groups?
//               </h3>
//               <p className="text-[20px] text-[#546A7B]">
//                 People join membership groups and communities for various reasons, each offering different benefits and fulfilling different needs. These include networking opportunities, professional development, access to exclusive resources, mentorship, and a sense of belonging.
//               </p>
//             </article>

//             <article>
//               <h3 style={{fontSize: '145%'}} className="mb-2 flex items-center space-x-2 font-medium text-[#0D1F2D]">
//                 What networking opportunities do membership groups provide?
//               </h3>
//               <p className="text-[20px] text-[#546A7B]">
//                 Membership groups provide access to a vast network of like-minded professionals, enabling members to build meaningful relationships, collaborate on projects, and exchange ideas that drive both personal and professional success.
//               </p>
//             </article>

//             <article>
//               <h3 style={{fontSize: '145%'}} className="mb-2 flex items-center space-x-2 font-medium text-[#0D1F2D]">
//                 What exclusive resources do members gain access to?
//               </h3>
//               <p className="text-[20px] text-[#546A7B]">
//                 Members of certain groups gain access to specialized content, industry-specific tools, and exclusive events that are not available to the general public, giving them a unique advantage in their professional journeys.
//               </p>
//             </article>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";

export default function FAQDisplay() {
  return (
    <section id="features-home" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" style={{ marginBottom: '-80px', marginTop: '-60px' }}>
        <div className="py-12 md:py-20">
          <div
            style={{ fontFamily: 'Arial, sans-serif' }}
            className="grid overflow-hidden border-y border-transparent lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gradient-to-b [&>*]:before:from-transparent [&>*]:before:via-[#F9F9F9] [&>*]:before:[block-size:100%] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] md:[&>*]:px-10 md:[&>*]:py-12"
          >
            <article>
              <h3 style={{ fontSize: '145%' }} className="mb-2 flex items-center space-x-2 font-medium text-[#0D1F2D]">
                Why come to More Than Just a Lunch?
              </h3>
              <p className="text-[20px] text-[#546A7B]">
                Networking opportunities, professional development, access to exclusive resources, mentorship, a sense of belonging, and some of the best food you will ever eat in your life.
              </p>
            </article>

            <article>
              <h3 style={{ fontSize: '145%' }} className="mb-2 flex items-center space-x-2 font-medium text-[#0D1F2D]">
                What opportunities does More Than Just a Lunch provide?
              </h3>
              <p className="text-[20px] text-[#546A7B]">
                Connect with like-minded professionals to build meaningful relationships, collaborate on projects, and exchange ideas that drive personal and professional success. More Than Just a Lunch brings you together with the right people to accelerate opportunities.
              </p>
            </article>

            <article>
              <h3 style={{ fontSize: '145%' }} className="mb-2 flex items-center space-x-2 font-medium text-[#0D1F2D]">
                What resources do More Than Just a Lunch attendees gain access to?
              </h3>
              <p className="text-[20px] text-[#546A7B]">
                Attendees gain access to specialized content, industry-specific tools, and exclusive events that are not available to the general public, giving them a unique advantage in their professional journeys.
              </p>
            </article>
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/faq">
            <p className="inline-block rounded bg-[#546A7B] hover:text-[#F4A690] transition px-12 py-4 text-[#F9F9F9] text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
            See All Frequently Asked Questions
            </p>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
