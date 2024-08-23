// import Link from "next/link";
// import Logo from "./logo";

// import LinkedinIcon from "@/app/images/social-icons/5296501_linkedin_network_linkedin logo_icon.png"
// import YouTubeIcon from "@/app/images/social-icons/5296522_youtube_youtube logo_icon.png"
// import InstagramIcon from "@/app/images/social-icons/5296765_camera_instagram_instagram logo_icon.png"
// import FacebookIcon from "@/app/images/social-icons/5296499_fb_facebook_facebook logo_icon.png"
// import TwitterIcon from "@/app/images/social-icons/11244080_x_twitter_elon musk_twitter new logo_icon.png"
// import VimeoIcon from "@/app/images/social-icons/5296519_video_vimeo_vimeo logo_icon.png"

// export default function Footer({ border = false }: { border?: boolean }) {
//   return (
//     <footer style={{justifyContent:"center"}}className="footer">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         {/* Top area: Blocks */}
//         <div
//           className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
//         >
//           {/* 1st block */}
//           <div className="space-y-2 sm:col-span-12 lg:col-span-4">
//             <div>
//               <Logo />
//             </div>
//             <div className="text-sm text-gray-600">
//               &copy; MoreThanJustaLunch.com - All rights reserved.
//             </div>
//           </div>

//           {/* 2nd block */}
//           {/* <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
//             <h3 className="text-sm font-medium">Product</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="#0"
//                 >
//                   Features
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="#0"
//                 >
//                   Integrations
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="#0"
//                 >
//                   Pricing & Plans
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="#0"
//                 >
//                   Changelog
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="#0"
//                 >
//                   Our method
//                 </Link>
//               </li>
//             </ul>
//           </div> */}

//           {/* 3rd block */}
//           <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
//             <h3 className="text-sm font-medium">Company</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="/about"
//                 >
//                   Our Mission
//                 </Link>
//               </li>
//               {/* <li>
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="#0"
//                 >
//                   Diversity & Inclusion
//                 </Link>
//               </li> */}
//               <li>
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="#0"
//                 >
//                   Blog
//                 </Link>
//               </li>
//               {/* <li>
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="#0"
//                 >
//                   Careers
//                 </Link>
//               </li> */}
//               {/* <li>
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="#0"
//                 >
//                   Financial statements
//                 </Link>
//               </li> */}
//             </ul>
//           </div>

//           {/* 4th block */}
//           <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
//             <h3 className="text-sm font-medium">Resources</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="#0"
//                 >
//                   NetworkWise
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="/faq"
//                 >
//                   FAQ
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="#0"
//                 >
//                   Store Info
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* 5th block */}
//           <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
//             <h3 className="text-sm font-medium">Social</h3>
//             <ul className="flex gap-1">

//               {/* LinkedIn */}
//               <li>
//                 <Link
//                   className="flex items-center justify-center text-black-500 transition hover:text-blue-600"
//                   href="https://www.linkedin.com"
//                   aria-label="LinkedIn"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <svg
//                     className="h-10 w-8 fill-current"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 42 42"
//                   >
//                     <path d="M27.8 0H4.2A4.2 4.2 0 0 0 0 4.2v23.6A4.2 4.2 0 0 0 4.2 32h23.6A4.2 4.2 0 0 0 32 27.8V4.2A4.2 4.2 0 0 0 27.8 0zM10.6 27.1H5.9V12.2h4.7v14.9zM8.3 10.5C7 10.5 6 9.5 6 8.3S7 6.2 8.3 6.2 10.6 7.3 10.6 8.3 9.7 10.5 8.3 10.5zM27.1 27.1h-4.7v-7.4c0-1.8-.7-2.9-2.2-2.9-1.3 0-2 1-2.4 2-.1.4-.1.9-.1 1.4v6.9h-4.7V17c0-2.7-.9-4.4-3.2-4.4-1.7 0-2.7 1.1-3.2 2.1-.2.4-.2 1-.2 1.6v10.8H5.9V12.2h4.5v2h.1c.6-.9 1.7-2.1 3.7-2.1 2.7 0 4.8 1.8 4.8 5.5v9.6h-.1zm0 0"/>
//                   </svg>
//                 </Link>
//               </li>
              
//               {/* Vimeo */}
//               <li>
//                 <Link
//                   className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
//                   href="https://www.vimeo.com"
//                   aria-label="Vimeo"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <svg
//                     className="h-8 w-8 fill-current"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 32 32"
//                   >
//                     <path d="M31 9.4s-.3-2.1-1.2-3c-1.1-1.2-2.3-1.2-2.9-1.4C22.6 4.7 16 4.7 16 4.7h-.1s-6.6 0-10.8.3c-.7.1-1.8.2-2.9 1.4-.9.9-1.2 3-1.2 3S.1 12.8.1 16.2v.9c0 3.3.3 6.8.3 6.8s.3 2.1 1.2 3c1.1 1.2 2.6 1.1 3.3 1.3 2.4.2 10.4.3 10.4.3s6.6 0 10.8-.3c.7-.1 1.8-.2 2.9-1.4.9-.9 1.2-3 1.2-3s.3-3.5.3-6.8v-.9c0-3.4-.3-6.8-.3-6.8zm-17.6 10.3V12.5l8.3 3.6-8.3 3.6z"/>
//                   </svg>
//                 </Link>
//               </li>

//               {/* Instagram */}
//               <li>
//                 <Link
//                   className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
//                   href="https://www.instagram.com/networkwise/"
//                   aria-label="Instagram"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <svg
//                     className="h-8 w-8 fill-current"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 32 32"
//                   >
//                     <path d="M16 7.1c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9 8.9-4 8.9-8.9-4-8.9-8.9-8.9zM24.3 1.6h-3.2c-1.1 0-1.7.6-1.7 1.7v3.2c0 1.1.6 1.7 1.7 1.7h3.2c1.1 0 1.7-.6 1.7-1.7v-3.2c-.1-1.1-.7-1.7-1.7-1.7zM16 11.6c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5zm5.4 0c-.4 0-.8-.3-.8-.7v-1.7c0-.4.4-.8.8-.8h1.7c.4 0 .8.3.8.7v1.7c0 .4-.3.8-.7.8h-1.7zm0 0M16 4.4c-6.4 0-11.6 5.2-11.6 11.6s5.2 11.6 11.6 11.6 11.6-5.2 11.6-11.6S22.4 4.4 16 4.4z"/>
//                   </svg>
//                 </Link>
//               </li>

//               {/* Medium */}
//               {/* <li>
//                 <Link
//                   className="flex items-center justify-center text-black-500 transition hover:text-blue-600"
//                   href="#0"
//                   aria-label="Medium"
//                 >
//                   <svg
//                     className="h-8 w-8 fill-current"
//                     viewBox="0 0 32 32"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z"></path>
//                   </svg>
//                 </Link>
//               </li> */}

//               {/* Facebook */}
//               <li>
//                 <Link
//                   className="flex items-center justify-center text-black-500 transition hover:text-blue-600"
//                   href="https://www.facebook.com"
//                   aria-label="Facebook"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {/* <svg
//                     className="h-8 w-8 fill-current"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 32 32"
//                   >
//                     <path d="M20.9 3.2h-4.6c-4 0-6.4 2.4-6.4 6.2v3.2H6.8c-.2 0-.3.1-.3.3v4.7c0 .2.1.3.3.3h3.1v12.1c0 .2.1.3.3.3h4.8c.2 0 .3-.1.3-.3V17.7h4.3c.2 0 .3-.1.3-.3v-4.7c0-.2-.1-.3-.3-.3h-4.3v-2.6c0-1.2.6-1.9 2-1.9h2.3c.2 0 .3-.1.3-.3V3.5c0-.2-.1-.3-.3-.3h-3.7zm0 0"/>
//                   </svg> */}
//                 </Link>
//               </li>

//               {/* Twitter */}
//               <li>
//                 <Link
//                   className="flex items-center justify-center text-black-500 transition hover:text-blue-600"
//                   href="https://x.com/thenetworkwise"
//                   aria-label="Twitter"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <svg
//                     className="h-8 w-8 fill-current"
//                     viewBox="0 0 32 32"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
//                   </svg>
//                 </Link>
//               </li>

//               {/* Vimeo
//               <li>
//                 <Link
//                   className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
//                   href="https://www.vimeo.com"
//                   aria-label="Vimeo"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <svg
//                     className="h-8 w-8 fill-current"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 32 32"
//                   >
//                     <path d="M31 9.4s-.3-2.1-1.2-3c-1.1-1.2-2.3-1.2-2.9-1.4C22.6 4.7 16 4.7 16 4.7h-.1s-6.6 0-10.8.3c-.7.1-1.8.2-2.9 1.4-.9.9-1.2 3-1.2 3S.1 12.8.1 16.2v.9c0 3.3.3 6.8.3 6.8s.3 2.1 1.2 3c1.1 1.2 2.6 1.1 3.3 1.3 2.4.2 10.4.3 10.4.3s6.6 0 10.8-.3c.7-.1 1.8-.2 2.9-1.4.9-.9 1.2-3 1.2-3s.3-3.5.3-6.8v-.9c0-3.4-.3-6.8-.3-6.8zm-17.6 10.3V12.5l8.3 3.6-8.3 3.6z"/>
//                   </svg>
//                 </Link>
//               </li> */}

//             </ul>
//           </div>
//         </div>
        
//       </div>

//       {/* Big text */}
//       <div className="relative -mt-16 h-60 w-full -z-10" aria-hidden="true">
//         <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Simple'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Simple'] after:[text-shadow:0_1px_0_white]"></div>
//         {/* Glow */}
//         <div
//           className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
//           aria-hidden="true"
//         >
//           <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import Logo from "./logo";

// Importing PNG icons for social media
import LinkedinIcon from "@/app/images/social-icons/5296501_linkedin_network_linkedin logo_icon.png";
import YouTubeIcon from "@/app/images/social-icons/5296521_play_video_vlog_youtube_youtube logo_icon.png";
import InstagramIcon from "@/app/images/social-icons/5296765_camera_instagram_instagram logo_icon.png";
import FacebookIcon from "@/app/images/social-icons/5296499_fb_facebook_facebook logo_icon.png";
import TwitterIcon from "@/app/images/social-icons/11244080_x_twitter_elon musk_twitter new logo_icon.png";
import VimeoIcon from "@/app/images/social-icons/5296519_video_vimeo_vimeo logo_icon.png";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer style={{ justifyContent: "center" }} className="footer">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]"
              : ""
          }`}
        >
          {/* 1st block */}
          <div style={{padding: '10px'}} className="space-y-2 sm:col-span-12 lg:col-span-4 transition hover:opacity-80">
            
            <Logo />
            
            <div className="text-sm text-gray-600">
              &copy; MoreThanJustaLunch.com - All rights reserved.
            </div>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/about"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://www.networkwise.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NetworkWise
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/faq"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://www.networkwise.com/shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Store Info
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1">

              {/* LinkedIn */}
              <li>
                <Link
                  className="flex items-center justify-center transition hover:opacity-80"
                  href="https://www.linkedin.com/company/network-wise/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={LinkedinIcon.src}
                    alt="LinkedIn"
                    className="h-8 w-8"
                  />
                </Link>
              </li>

              {/* YouTube */}
              <li>
                <Link
                  className="flex items-center justify-center transition hover:opacity-80"
                  href="https://www.youtube.com/channel/UC_GuuTjdzX92sVsQaN4iNWA/videos"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={YouTubeIcon.src}
                    alt="YouTube"
                    className="h-8 w-8"
                  />
                </Link>
              </li>

              {/* Instagram */}
              <li>
                <Link
                  className="flex items-center justify-center transition hover:opacity-80"
                  href="https://www.instagram.com/networkwise/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={InstagramIcon.src}
                    alt="Instagram"
                    className="h-8 w-8"
                  />
                </Link>
              </li>

              {/* Facebook */}
              <li>
                <Link
                  className="flex items-center justify-center transition hover:opacity-80"
                  href="https://www.facebook.com/TheNetWorkWise/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={FacebookIcon.src}
                    alt="Facebook"
                    className="h-8 w-8"
                  />
                </Link>
              </li>

              {/* Twitter */}
              <li>
                <Link
                  className="flex items-center justify-center transition hover:opacity-80"
                  href="https://x.com/thenetworkwise"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={TwitterIcon.src}
                    alt="Twitter"
                    className="h-8 w-8"
                  />
                </Link>
              </li>

              {/* Vimeo */}
              <li>
                <Link
                  className="flex items-center justify-center transition hover:opacity-80"
                  href="https://vimeo.com/networkwise"
                  aria-label="Vimeo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={VimeoIcon.src}
                    alt="Vimeo"
                    className="h-8 w-8"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full -z-10" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Simple'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Simple'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
