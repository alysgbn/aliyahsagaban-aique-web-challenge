import Navbar from '@/components/Navbar';
import CardGrid from '@/components/CardGrid';
import HeroSection from '@/components/HeroSection';
import ContactUs from '@/components/ContactUs';
export default function Home() {
  return (
    <div className="mx-auto flex max-w-[1480px] flex-col gap-[24px] px-3">
      <Navbar />
      <HeroSection />
      <CardGrid />
      <ContactUs />
    </div>
  );
}
