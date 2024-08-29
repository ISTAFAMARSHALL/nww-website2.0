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
                  href="/our-mission"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://www.networkwise.com/articles/networking-articles/"
                  target="_blank"
                  rel="noopener noreferrer"
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
      {/* <div className="relative -mt-16 h-60 w-full -z-10" aria-hidden="true"> */}
        {/* <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Simple'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Simple'] after:[text-shadow:0_1px_0_white]"></div> */}
        {/* Glow */}
        {/* <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div> */}
      {/* </div> */}
    </footer>
  );
}
