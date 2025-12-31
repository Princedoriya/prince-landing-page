const skills = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "ShadCN UI"],
  Backend: ["Node.js", "Express", "REST APIs", "JWT"],
  Database_AI: ["MongoDB", "SQL", "OpenAI", "LangChain"],
  Core_CS: ["DSA", "OOPs", "Networking"],
};

export default function Skills() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([title, items]) => (
            <div
              key={title}
              className="relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500 to-purple-500"
            >
              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold text-xl mb-4">
                  {title.replace("_", " ")}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
