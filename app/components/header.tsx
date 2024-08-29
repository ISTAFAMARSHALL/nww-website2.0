"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from './mobile-menu';

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header 
      style={{fontFamily: 'Arial, sans-serif'}}
      className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul 
              style={{marginLeft: "150px"}}
              className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-4">
              <li className="px-3 py-1">
                <Link
                  href="/"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              {/* <li className="px-3 py-1">
                <Link
                  href="/company"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Company
                </Link>
              </li> */}
              <li className="px-3 py-1">
                <Link
                  href="/our-mission"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Our Mission
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Events">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="/gallery"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Upcoming
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery/#past-events"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Past
                  </Link>
                </li>
              </Dropdown>
              {/* <li className="px-3 py-1">
                <Link
                  href="/gallery"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Events
                </Link>
              </li> */}
              <li className="px-3 py-1">
                <Link
                  href="/faq"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  FAQ
                </Link>
              </li>
              
              <li className="px-3 py-1">
                <Link
                  href="/#testimonials"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Testimonials
                </Link>
              </li>
              {/* <li className="px-3 py-1">
                <Link
                  href="/survey"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Survey
                </Link>
              </li> */}

              
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/form"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Request to Attend
              </Link>
            </li>
            {/* <li>
              <Link
                href="/"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
              >
                Events
              </Link>
            </li> */}
          </ul>

          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
}
