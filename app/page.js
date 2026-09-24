'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import Motorsport from '@/components/Motorsport';
import BrandsCarousel from '@/components/BrandsCarousel';
import AboutUs from '@/components/AboutUs';
import WhyBuyHere from '@/components/WhyBuyHere';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import QuoteCart from '@/components/QuoteCart';
import SocialFab from '@/components/SocialFab';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Motorsport />
        <BrandsCarousel />
        <AboutUs />
        <WhyBuyHere />
        <Contact />
      </main>
      <Footer />
      <QuoteCart />
      <SocialFab />
    </>
  );
}
