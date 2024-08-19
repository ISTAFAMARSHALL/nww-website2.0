export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import HomeHeader from '@/app/components/home-header'
// import BusinessCategories from "@/components/business-categories";
import LargeTestimonial from "@/components/large-testimonial";
import FeaturesPlanet from "@/components/features-planet";
import Features from "@/components/features-home";
// import TestimonialsCarousel from "@/components/testimonials-carousel";
import Cta from "@/components/cta";
import ImageSlideShow from "@/app/components/image-slide-show";

import HomePageContent from "@/app/components/home-page-content"

import BusinessCategories from "@/app/components/business-categories";

import TestimonialsCarousel from "@/app/components/testimonials-carousel";

export default function Home() {
  return (
    <>
      {/* <Hero />
      <BusinessCategories />
      <LargeTestimonial />
      <FeaturesPlanet />
      <Features />
      <TestimonialsCarousel />
      <Cta /> */}
      {/* <HomeHeader /> */}
      <ImageSlideShow />
      <HomePageContent />
      <BusinessCategories />
    
      <Features />
      <TestimonialsCarousel />
      
    </>
  );
}
