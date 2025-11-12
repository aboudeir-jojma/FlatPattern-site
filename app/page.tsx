import ShapeList from "../components/ShapeList";
import SeoSection from "../components/SeoSection";
import FeaturesSection from "../components/FeaturesSection";
import SubscribeBanner from "../components/SubscribeBanner";
import InoxSection from "../components/InoxSection";
export default function HomePage() {
  return (
    <>
      <section id="top" className="py-10 text-center">
        <h1 className="mt-15 mb-4 text-3xl font-bold text-black">
          Choose Your Shape
        </h1>
        <ShapeList />
      </section>
      <FeaturesSection />
      <InoxSection />
      <SeoSection />
      <SubscribeBanner />
    </>
  );
}
