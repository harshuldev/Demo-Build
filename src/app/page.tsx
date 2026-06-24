/**
 * page.tsx  –  Home page
 *
 * Assembles all section components in order.
 * Each section is a self-contained component — edit
 * the section files in /components/ to change content.
 */

import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WebsiteOffer from "@/components/WebsiteOffer";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero – above the fold */}
      <Hero />

      {/* 2. Trust bar – full-width dark strip */}
      <TrustIndicators />

      {/* 3. Services grid */}
      <AnimateOnScroll>
        <Services />
      </AnimateOnScroll>

      {/* 4. About the business */}
      <AnimateOnScroll>
        <About />
      </AnimateOnScroll>

      {/* 5. Why choose us */}
      <AnimateOnScroll>
        <WhyChooseUs />
      </AnimateOnScroll>

      {/* 6. Our process / how it works */}
      <AnimateOnScroll>
        <Process />
      </AnimateOnScroll>

      {/* 7. Photo gallery */}
      <AnimateOnScroll>
        <Gallery />
      </AnimateOnScroll>

      {/* 8. Before & after showcase */}
      <AnimateOnScroll>
        <BeforeAfter />
      </AnimateOnScroll>

      {/* 9. Google reviews carousel */}
      <AnimateOnScroll>
        <Reviews />
      </AnimateOnScroll>

      {/* 10. FAQ accordion */}
      <AnimateOnScroll>
        <FAQ />
      </AnimateOnScroll>

      {/* 11. CTA banner */}
      <CTABanner />

      {/* 11.5 Website offer */}
      <WebsiteOffer />

      {/* 12. Contact form */}
      <AnimateOnScroll>
        <Contact />
      </AnimateOnScroll>
    </>
  );
}
