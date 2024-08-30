'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import HomePageIMG from "@/app/images/home-page-header-images/2024-05-29 (1).jpeg";
import HomePageIMG2 from "@/app/images/home-page-header-images/2024-06-11  (1).jpeg";
import HomePageIMG3 from "@/app/images/home-page-header-images/2024-06-26 (4).jpeg";
import HomePageIMG4 from "@/app/images/home-page-header-images/2024.01.31_Motley Crew doing Yave shots.jpg";
import HomePageIMG5 from "@/app/images/home-page-header-images/Pasted Graphic.png";
import HomePageIMG6 from "@/app/images/home-page-header-images/Pasted Graphic 1.png";

const images = [
  { image: HomePageIMG6, alt: "More Than Just A Lunch!" },
  { image: HomePageIMG, alt: "More Than Just A Lunch!" },
  { image: HomePageIMG2, alt: "More Than Just A Lunch!" },
  { image: HomePageIMG3, alt: "More Than Just A Lunch!" },
  { image: HomePageIMG5, alt: "More Than Just A Lunch!" },
  { image: HomePageIMG4, alt: "More Than Just A Lunch!" },
];

export default function ImageSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: index === currentImageIndex ? 1 : 0,
            transition: "ease",
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        >
          <Image
            src={img.image}
            alt={img.alt}
            fill
            style={{ objectFit: "cover" }}
            priority={index === currentImageIndex}
          />
        </div>
      ))}
      <div>
        {/* Curved Text */}
        <svg
          viewBox="0 0 1000 200"
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            width: "100%",
          }}
        >
          <path
            id="curve1"
            d="M 50,150 Q 500,50 950,150"
            fill="transparent"
          />
          <text width="1000">
            <textPath
              xlinkHref="#curve1"
              startOffset="50%"
              textAnchor="middle"
              style={{
                fontSize: "1.5vw",
                fill: "#F4A690",
                fontWeight: "900",
                textShadow:
                  "4px 4px 2px rgba(0, 0, 0, 0.7), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff", // white outline
                padding: "20px",
              }}
            >
              Not your ordinary people and it's not Just a Meal. It's...
            </textPath>
          </text>
        </svg>

        {/* Straight Text */}
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            textAlign: "center",
            fontSize: "3.5vw",
            color: "#F4A690",
            fontWeight: "750",
            paddingBottom: "10px",
            width: "100%",
            textShadow:
              "2px 2px 4px rgba(0, 0, 0, 0.7), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff", // white outline
            padding: "20px",
          }}
        >
          "More Than Just a Lunch!"
        </h1>

        {/* Buttons */}
        <div
          style={{
            position: "absolute",
            top: "65%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
          }}
        >
          {/* <a
            className="btn text-white shadow hover:text-[#0D1F2D] transition"
            href="#home-page-content"
            style={{
              backgroundColor: "#F4A690",
              
              fontSize: "2vw",
              padding: "10px 20px",
              fontWeight: "700",
              borderRadius: "5px",
              textAlign: "center",
              textDecoration: "none",
              flex: 1,
              marginRight: "20px",
            }}
          >
            Learn More
          </a> */}
            <Link href="#home-page-content" className="btn-sm text-lg bg-[#F4A690] text-[#F9F9F9] hover:text-[#0D1F2D] transition">
              Learn More
            </Link>
            <Link href="/form" className="btn-sm text-lg bg-[#F4A690] text-[#F9F9F9] hover:text-[#0D1F2D] transition">
              Request to Attend
            </Link>
          {/* <a
            className="btn text-white shadow hover:text-[#0D1F2D] transition"
            href="/form"
            style={{
              backgroundColor: "#F4A690",
              
              fontSize: "2vw",
              padding: "10px 20px",
              fontWeight: "700",
              borderRadius: "5px",
              textAlign: "center",
              textDecoration: "none",
              flex: 1,
              marginLeft: "20px",
              
            }}
          >
            Request to Attend
          </a> */}
        </div>
      </div>
    </div>
  );
}
