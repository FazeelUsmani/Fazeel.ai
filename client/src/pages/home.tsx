import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services-section';
import { FounderProfileSection } from '@/components/sections/founder-profile';
import { BlogSection } from '@/components/sections/blog-section';
import { ContactSectionNetlify } from '@/components/sections/contact-section-netlify';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <FounderProfileSection />
      <BlogSection />
      <ContactSectionNetlify />
    </div>
  );
}
