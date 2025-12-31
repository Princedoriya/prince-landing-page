import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-gradient-to-b from-indigo-100 via-white to-purple-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Carefully crafted projects demonstrating my expertise in full-stack
            development, scalable systems, and modern UI design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Project Card */}
          <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500 to-purple-500">
            <div className="h-full bg-white rounded-2xl p-8 transition transform group-hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3">
                EclairAI – AI Summary Platform
              </h3>
              <p className="text-gray-600 mb-6">
                AI-powered application that generates structured PDF summaries
                using large language models, built with a scalable and secure
                full-stack architecture.
              </p>

              <div className="flex items-center gap-6 mt-auto">
                <a
                  href="https://github.com/Princedoriya/EclairAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-600 font-medium hover:underline"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href="https://eclair-ai.vercel.app/"
                  className="flex items-center gap-2 text-indigo-600 font-medium hover:underline"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              </div>
            </div>
          </div>

          {/* Project Card */}
          <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500 to-purple-500">
            <div className="h-full bg-white rounded-2xl p-8 transition transform group-hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3">
                BaatCheet – Real-Time Chat App
              </h3>
              <p className="text-gray-600 mb-6">
                A modern real-time chat application with secure authentication,
                socket-based messaging, and a fully responsive interface.
              </p>

              <div className="flex items-center gap-6 mt-auto">
                <a
                  href="https://github.com/Princedoriya/Project-chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-600 font-medium hover:underline"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href="https://project-chat-twvc.onrender.com/"
                  className="flex items-center gap-2 text-indigo-600 font-medium hover:underline"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              </div>
            </div>
          </div>

          {/* Project Card */}
          <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500 to-purple-500">
            <div className="h-full bg-white rounded-2xl p-8 transition transform group-hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3">
                Prince’s Electronics – E-Commerce
              </h3>
              <p className="text-gray-600 mb-6">
                Full-stack e-commerce platform featuring JWT authentication,
                role-based access control, RESTful APIs, and optimized checkout
                flows.
              </p>

              <div className="flex items-center gap-6 mt-auto">
                <a
                  href="https://github.com/Princedoriya/Project_ecommerce_web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-600 font-medium hover:underline"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href="https://project-ecommerce-web01.vercel.app/"
                  className="flex items-center gap-2 text-indigo-600 font-medium hover:underline"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
