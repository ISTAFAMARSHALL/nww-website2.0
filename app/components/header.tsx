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
      className={`fixed top-3 left-[10%] z-30 w-[80%] transition-colors duration-300 rounded-xl ease-in-out ${
        top ? "bg-white" : "bg-[#F9F9F9] shadow-md"
      }`}
    >
      <div className="mx-auto max-w-9xl px-8 sm:px-10">
        <div className="relative flex items-center justify-between h-14 rounded-2xl px-3">
          <div style={{marginLeft:'-3.65%'}}className="flex rounded-xl items-center">
            {/* <Logo /> */}
            <LogoCopy />
          </div>

          <nav className="hidden md:flex md:grow items-center">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-2xl">
              <li className="px-3 py-1">
                <Link href="/" className="text-[#F4A690] hover:text-[#0D1F2D] transition">
                  Home
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/our-mission" className="text-[#F4A690] hover:text-[#0D1F2D] transition">
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
                <Link href="/faq" className="text-[#F4A690] hover:text-[#0D1F2D] transition">
                  FAQ
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/#testimonials" className="text-[#F4A690] hover:text-[#0D1F2D] transition">
                  Testimonials
                </Link>
              </li>
            </ul>
          </nav>
          <ul style={{marginRight:'-3.65%'}} className="hidden md:flex items-center gap-3">
            <li>
              <Link href="/form" className="btn-sm text-lg rounded-xl bg-[#F4A690] text-[#F9F9F9] hover:text-[#0D1F2D] transition">
                Request to Attend
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
