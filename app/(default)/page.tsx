export const metadata = {
  title: "Home - More Than Just a Lunch",
  description: "Page description",
};

import ImageSlideShow from "@/app/components/image-slide-show";

import HomePageContent from "@/app/components/home-page-content"

import BusinessCategories from "@/app/components/business-categories";

import FAQDisplay from "@/app/components/faq-display"

import TestimonialsCarousel from "@/app/components/testimonials-carousel";
import LunchDisplay from "../components/lunch-display";

export default function Home() {
  return (
    <div className="main">

      <ImageSlideShow />
      <HomePageContent />
      {/* <BusinessCategories /> */}
      <LunchDisplay />
      <FAQDisplay />
      <TestimonialsCarousel />
      
    </div>
  );
}
