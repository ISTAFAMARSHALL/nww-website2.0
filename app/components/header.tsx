// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Logo from "./logo";
// import Dropdown from "@/components/dropdown";
// import MobileMenu from './mobile-menu';

// export default function Header() {
//   const [top, setTop] = useState<boolean>(true);

//   // detect whether user has scrolled the page down by 10px
//   const scrollHandler = () => {
//     window.pageYOffset > 10 ? setTop(false) : setTop(true);
//   };

//   useEffect(() => {
//     scrollHandler();
//     window.addEventListener("scroll", scrollHandler);
//     return () => window.removeEventListener("scroll", scrollHandler);
//   }, [top]);

//   return (
//     <header 
//       style={{fontFamily: 'Arial, sans-serif'}}
//       className={`fixed top-2 z-30 w-full ${top ? 'bg-transparent' : 'bg-white shadow-md'} transition-colors duration-300 ease-in-out`}>
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="relative flex items-center justify-between h-14 rounded-2xl px-3">
//           {/* Site branding */}
//           <div className="flex items-center">
//             <Logo />
//           </div>

//           {/* Desktop navigation */}
//           <nav className="hidden md:flex md:grow items-center">
//             <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm">
//               <li className="px-3 py-1">
//                 <Link
//                   href="/"
//                   className="flex items-center text-gray-700 transition hover:text-gray-900"
//                 >
//                   Home
//                 </Link>
//               </li>
//               {/* Uncomment if needed */}
//               {/* <li className="px-3 py-1">
//                 <Link
//                   href="/company"
//                   className="flex items-center text-gray-700 transition hover:text-gray-900"
//                 >
//                   Company
//                 </Link>
//               </li> */}
//               <li className="px-3 py-1">
//                 <Link
//                   href="/our-mission"
//                   className="flex items-center text-gray-700 transition hover:text-gray-900"
//                 >
//                   Our Mission
//                 </Link>
//               </li>
//               {/* <Dropdown title="Events">
//                 <li>
//                   <Link
//                     href="/gallery"
//                     className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Upcoming
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/gallery/#past-events"
//                     className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Past
//                   </Link>
//                 </li>
//               </Dropdown> */}
//               {/* Uncomment if needed */}
//               {/* <li className="px-3 py-1">
//                 <Link
//                   href="/gallery"
//                   className="flex items-center text-gray-700 transition hover:text-gray-900"
//                 >
//                   Events
//                 </Link>
//               </li> */}
//               <li className="px-3 py-1">
//                 <Link
//                   href="/faq"
//                   className="flex items-center text-gray-700 transition hover:text-gray-900"
//                 >
//                   FAQ
//                 </Link>
//               </li>
//               <li className="px-3 py-1">
//                 <Link
//                   href="/#testimonials"
//                   className="flex items-center text-gray-700 transition hover:text-gray-900"
//                 >
//                   Testimonials
//                 </Link>
//               </li>
//               {/* Uncomment if needed */}
//               {/* <li className="px-3 py-1">
//                 <Link
//                   href="/survey"
//                   className="flex items-center text-gray-700 transition hover:text-gray-900"
//                 >
//                   Survey
//                 </Link>
//               </li> */}
//             </ul>
//           </nav>

//           {/* Desktop sign-in links */}
//           <ul className="hidden md:flex items-center gap-3">
//             <li>
//               <Link
//                 href="/form"
//                 className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
//               >
//                 Request to Attend
//               </Link>
//             </li>
//             {/* Uncomment if needed */}
//             {/* <li>
//               <Link
//                 href="/"
//                 className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
//               >
//                 Events
//               </Link>
//             </li> */}
//           </ul>

//           {/* Mobile menu */}
//           {/* <MobileMenu /> */}
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import LogoCopy from "./logo copy"
import Dropdown from "@/components/dropdown";

export default function Header() {
  const [top, setTop] = useState(true);

  const scrollHandler = () => {
    setTop(window.pageYOffset <= 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header
      style={{ fontFamily: "Arial, sans-serif" }}
      className={`fixed top-2 z-30 w-full transition-colors duration-300 ease-in-out ${
        top ? "bg-transparent" : "bg-[#F9F9F9] shadow-md"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex items-center justify-between h-14 rounded-2xl px-3">
          <div className="flex items-center">
            {/* <Logo /> */}
            <LogoCopy />
          </div>

          <nav className="hidden md:flex md:grow items-center">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm">
              <li className="px-3 py-1">
                <Link href="/" className="text-[#0D1F2D] hover:text-[#546A7B] transition">
                  Home
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/our-mission" className="text-[#0D1F2D] hover:text-[#546A7B] transition">
                  Our Mission
                </Link>
              </li>
              {/* <Dropdown title="Events">
                <li>
                  <Link href="/gallery" className="px-2 py-1.5 text-sm text-[#0D1F2D] hover:bg-[#90FCF9] rounded-lg transition">
                    Upcoming
                  </Link>
                </li>
                <li>
                  <Link href="/gallery/#past-events" className="px-2 py-1.5 text-sm text-[#0D1F2D] hover:bg-[#90FCF9] rounded-lg transition">
                    Past
                  </Link>
                </li>
              </Dropdown> */}
              <li className="px-3 py-1">
                <Link href="/faq" className="text-[#0D1F2D] hover:text-[#546A7B] transition">
                  FAQ
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/#testimonials" className="text-[#0D1F2D] hover:text-[#546A7B] transition">
                  Testimonials
                </Link>
              </li>
            </ul>
          </nav>

          <ul className="hidden md:flex items-center gap-3">
            <li>
              <Link href="/form" className="btn-sm bg-[#FF8577] text-[#F9F9F9] hover:bg-[#90FCF9] transition">
                Request to Attend
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
