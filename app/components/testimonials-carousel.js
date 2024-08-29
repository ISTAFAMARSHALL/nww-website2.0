// import {TESTIMONIALCONTENT} from "@/app/lib/testimonial-content"

// import Testimonial from "@/app/components/testimonial";

// export default function TestimonialsCarousel() {

//   return (
//     <section id="testimonials"
//     style={{fontFamily: 'Arial, sans-serif'}}className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100">
//       <div className="pt-12 md:pt-20">
//         {/* <div className="mx-auto max-w-6xl px-4 sm:px-6">
//           <div className="mx-auto max-w-3xl text-center">
//             <h2 className="text-3xl font-bold md:text-4xl"
//                 style={{marginBottom: '-5px'}}>
//               Testimonials
//             </h2>
//           </div>
//         </div > */}
//         <div className="relative mx-auto flex max-w-[94rem] justify-center"
//         >
//           <div
//             className="absolute bottom-20 -z-10 -translate-x-36"
//             aria-hidden="true"
//           >
//             <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px]" />
//           </div>
//           <div className="absolute -bottom-10 -z-10" aria-hidden="true">
//             <div className="h-80 w-80 rounded-full bg-blue-500 opacity-40 blur-[160px]" />
//           </div>
//           <div className="absolute bottom-0 -z-10" aria-hidden="true">
//             <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px]" />
//           </div>
//           {/* Row */}
//           <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
//             <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3">
//               {/* Items */}
//               {TESTIMONIALCONTENT.map((testimonial, index) => (
//                 <Testimonial
//                   key={index}
//                   testimonial={testimonial}
//                   className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
//                 >
//                   {testimonial.content.split('.').splice(0,2)}
//                 </Testimonial>
//               ))}
//             </div>
//             {/* Duplicated element for infinite scroll */}
//             <div
//               className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3"
//               aria-hidden="true"
//             >
//               {/* Items */}
//               {TESTIMONIALCONTENT.map((testimonial, index) => (
//                 <Testimonial
//                   key={index}
//                   testimonial={testimonial}
//                   cloned={true}
//                   className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
//                 >
//                   {testimonial.content.split('.').splice(0,2)}
//                 </Testimonial>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import { useState } from 'react';
// import { TESTIMONIALCONTENT } from "@/app/lib/testimonial-content";
// import Testimonial from "@/app/components/testimonial";
// import Modal from "@/app/components/modal";

// export default function TestimonialsCarousel() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedTestimonial, setSelectedTestimonial] = useState(null);

//   const openModal = (testimonial) => {
//     setSelectedTestimonial(testimonial);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedTestimonial(null);
//   };

//   return (
//     <section
//       id="testimonials"
//       className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100"
//     >
//       <div className="pt-12 md:pt-20">
//         <div className="relative mx-auto flex max-w-[94rem] justify-center">
//           <div
//             className="absolute bottom-20 -z-10 -translate-x-36"
//             aria-hidden="true"
//           >
//             <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px]" />
//           </div>
//           <div className="absolute -bottom-10 -z-10" aria-hidden="true">
//             <div className="h-80 w-80 rounded-full bg-blue-500 opacity-40 blur-[160px]" />
//           </div>
//           <div className="absolute bottom-0 -z-10" aria-hidden="true">
//             <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px]" />
//           </div>
//           <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
//             <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3">
//               {TESTIMONIALCONTENT.map((testimonial, index) => (
//                 <Testimonial
//                   key={index}
//                   testimonial={testimonial}
//                   onClick={() => openModal(testimonial)}
//                   className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
//                 >
//                   {testimonial.content.split('.').splice(0, 2).join('.')}...
//                 </Testimonial>
//               ))}
//             </div>
//             <div
//               className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3"
//               aria-hidden="true"
//             >
//               {TESTIMONIALCONTENT.map((testimonial, index) => (
//                 <Testimonial
//                   key={index}
//                   testimonial={testimonial}
//                   onClick={() => openModal(testimonial)}
//                   cloned={true}
//                   className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
//                 >
//                   {testimonial.content.split('.').splice(0, 2).join('.')}...
//                 </Testimonial>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && (
//         <Modal isOpen={isModalOpen} onClose={closeModal}>
//           <h2 className="text-2xl font-bold mb-4">
//             {selectedTestimonial?.name}
//           </h2>
//           <p className="text-gray-700">{selectedTestimonial?.content}</p>
//         </Modal>
//       )}
//     </section>
//   );
// }

'use client';

import { useState } from 'react';
import { TESTIMONIALCONTENT } from "@/app/lib/testimonial-content";
import Testimonial from "@/app/components/testimonial";
import Modal from "@/app/components/testimonial-modal";

export default function TestimonialsCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
    setIsScrollingPaused(true); // Pause scrolling when modal is opened
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
    setIsScrollingPaused(false); // Resume scrolling when modal is closed
  };

  return (
    <section
      id="testimonials"
      className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100"
    >
      <div className="pt-12 md:pt-20">
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div
            className="absolute bottom-20 -z-10 -translate-x-36"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px]" />
          </div>
          <div className="absolute -bottom-10 -z-10" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-blue-500 opacity-40 blur-[160px]" />
          </div>
          <div className="absolute bottom-0 -z-10" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px]" />
          </div>
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div
              className={`flex ${isScrollingPaused ? '' : 'animate-[infinite-scroll_60s_linear_infinite]'} items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3`}
            >
              {TESTIMONIALCONTENT.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  onClick={() => openModal(testimonial)}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content.split('.').splice(0, 2).join('.')}...
                </Testimonial>
              ))}
            </div>
            <div
              className={`flex ${isScrollingPaused ? '' : 'animate-[infinite-scroll_60s_linear_infinite]'} items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3`}
              aria-hidden="true"
            >
              {TESTIMONIALCONTENT.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  onClick={() => openModal(testimonial)}
                  cloned={true}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content.split('.').splice(0, 2).join('.')}...
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl font-bold mb-4">
            {selectedTestimonial?.name}
          </h2>
          <div className="text-1xl font-medium mb-4 font-italic">
            {selectedTestimonial?.title}
          </div>
          <p className="text-gray-300 text-meduim">{selectedTestimonial?.content}</p>
        </Modal>
      )}
    </section>
  );
}
