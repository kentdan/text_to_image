import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageGenerator from '@/components/ImageGenerator';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImageGenerator />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}