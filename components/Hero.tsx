export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        
        {/* Name */}
        <p className="text-sm tracking-widest uppercase text-indigo-200 mb-4">
          Prince Doriya
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Building Scalable Web & AI Applications
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-indigo-100 mb-10">
          Software Development Engineer candidate with strong foundations
          in DSA, system design, and full-stack development.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-indigo-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
