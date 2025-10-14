import ShapeList from "../components/ShapeList";
import SeoSection from "../components/SeoSection";
export default function HomePage() {
  return (
    <>
    <section className="text-center py-10">
<h1
  className="text-3xl font-bold mb-4 mt-15 text-black"
>
  Choose Your Shape
</h1>


    
      <ShapeList />

        <SeoSection />
    </section>

    
    
   
    </>
  );
}
