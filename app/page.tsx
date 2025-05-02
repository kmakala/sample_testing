import Link from 'next/link';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturedCourses } from '@/components/home/featured-courses';
import { Categories } from '@/components/home/categories';
import { HowItWorks } from '@/components/home/how-it-works';
import { Testimonials } from '@/components/home/testimonials';
import { Stats } from '@/components/home/stats';
import { CTASection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturedCourses />
      <Categories />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTASection />
    </div>
  );
}