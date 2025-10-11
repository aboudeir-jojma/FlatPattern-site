import ShapeList from "../components/ShapeList";

export default function HomePage() {
  return (
    <section className="text-center py-10">
      <h1 className="text-3xl font-bold mb-4">Choose Your Shape</h1>
    
      <ShapeList />
    </section>
  );
}
