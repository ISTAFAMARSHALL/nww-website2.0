"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Header2 from '@/app/components/header'
import Footer from "@/components/ui/footer";
import Footer2 from '@/app/components/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      {/* <Header /> */}
      <Header2 />

      <main className="grow">{children}</main>

      {/* <Footer border={true} /> */}
      <Footer2 />
    </>
  );
}
