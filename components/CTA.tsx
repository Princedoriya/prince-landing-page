import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 bg-indigo-600 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
      <p className="mb-10 text-indigo-100">
        Reach out or explore my work through the platforms below.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 text-lg">
        <a
          href="mailto:princedoriya691@gmail.com"
          className="flex items-center gap-2 hover:text-indigo-200 transition"
        >
          <FaEnvelope size={22} />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/PrinceDoriya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-indigo-200 transition"
        >
          <FaGithub size={22} />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/prince-doriya-664990320"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-indigo-200 transition"
        >
          <FaLinkedin size={22} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://my-portfolio-livid-ten-99.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-indigo-200 transition"
        >
          <FaGlobe size={22} />
          <span>Portfolio</span>
        </a>
      </div>
    </section>
  );
}
