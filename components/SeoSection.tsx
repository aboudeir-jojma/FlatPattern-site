// components/SeoSection.tsx
export default function SeoSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black py-16 px-6 border-b border-gray-300">
      <div className="max-w-5xl mx-auto text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Online DXF Flat Pattern Generator – Flat Pattern
        </h1>

        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          <strong>Flat Pattern</strong> is a free professional tool that
          automatically calculates and generates <strong>DXF</strong> files
          ready for laser cutting, bending, or industrial manufacturing — in
          just a few seconds.
        </p>

        <p className="text-gray-800 leading-relaxed mb-6">
          Select a shape (<em>cone</em>, <em>frustum cone</em>,
          <em> pyramid</em>, <em>truncated cylinder</em>, <em>elbow</em>, etc.),
          enter your dimensions, and instantly get the flat pattern in
          <strong> DXF format</strong>. Optimized for
          <strong> sheet metal work</strong>, <strong>laser cutting</strong>, and
          <strong> mechanical design</strong>.
        </p>

        <div className="mt-10 bg-white rounded-xl border border-gray-300 p-8 shadow-sm">
          <h2 className="text-3xl font-semibold mb-4 text-black">
            What is a sheet metal flat pattern?
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            A <strong>sheet metal flat pattern</strong> is a two-dimensional
            representation of a three-dimensional metal part. It allows the
            piece to be cut, bent, and formed before assembly. Flat Pattern
            automates these complex geometric calculations to produce an
            accurate <strong>DXF</strong> file directly usable by industrial
            machines.
          </p>

          <h3 className="text-2xl font-semibold mb-3 text-gray-900 uppercase tracking-wide">
            Available Shapes
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-gray-900 text-lg font-medium list-none">
            <li className="before:content-['▸'] before:mr-2 before:text-black">
              Cone
            </li>
            <li className="before:content-['▸'] before:mr-2 before:text-black">
              Frustum Cone
            </li>
            <li className="before:content-['▸'] before:mr-2 before:text-black">
              Pyramid
            </li>
            <li className="before:content-['▸'] before:mr-2 before:text-black">
              Truncated Cylinder
            </li>
            <li className="before:content-['▸'] before:mr-2 before:text-black">
              Elbow
            </li>
            <li className="before:content-['▸'] before:mr-2 before:text-black">
              Flange & Transition
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
