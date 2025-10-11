import ShapeList from "../components/ShapeList";

export default function HomePage() {
  return (
    <section className="text-center py-10">
<h1
  className="text-3xl font-bold mb-4 mt-15 bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-400 bg-clip-text text-transparent"
>
  Choose Your Shape
</h1>


    
      <ShapeList />
    </section>
  );
}
