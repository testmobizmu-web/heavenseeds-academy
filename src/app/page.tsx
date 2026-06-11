import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProgrammesPreview from "@/components/home/ProgrammesPreview";
import EnrollmentCTA from "@/components/home/EnrollmentCTA";

const ParentTestimonials = dynamic(
  () => import("@/components/home/ParentTestimonials"),
  {
    loading: () => (
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto h-40 max-w-7xl animate-pulse rounded-[2rem] bg-white/40 shadow-[0_18px_55px_rgba(24,53,40,0.08)]" />
      </section>
    ),
  }
);

const GalleryPreview = dynamic(() => import("@/components/home/GalleryPreview"), {
  loading: () => (
    <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto h-56 max-w-7xl animate-pulse rounded-[2rem] bg-white/40 shadow-[0_18px_55px_rgba(24,53,40,0.08)]" />
    </section>
  ),
});

const BlogPreview = dynamic(() => import("@/components/home/BlogPreview"), {
  loading: () => (
    <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto h-56 max-w-7xl animate-pulse rounded-[2rem] bg-white/40 shadow-[0_18px_55px_rgba(24,53,40,0.08)]" />
    </section>
  ),
});

const HomeContact = dynamic(() => import("@/components/home/HomeContact"), {
  loading: () => (
    <section className="px-4 py-6 pb-12 sm:px-6 sm:py-8 sm:pb-14 lg:px-8 lg:py-10 lg:pb-16">
      <div className="mx-auto h-72 max-w-7xl animate-pulse rounded-[2rem] bg-white/40 shadow-[0_18px_55px_rgba(24,53,40,0.08)]" />
    </section>
  ),
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyChooseUs />
      <ProgrammesPreview />
      <EnrollmentCTA />
      <ParentTestimonials />
      <GalleryPreview />
      <BlogPreview />
      <HomeContact />
    </>
  );
}
