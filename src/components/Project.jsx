export default function Projects() {
  const projects = [
    {
      name: "Medical Diagnosis App",
      description: "Flask + SVM classifier for disease prediction.",
    },
    {
      name: "Heart Disease Analysis",
      description: "EDA and visualization using Python.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
            <h2 className="text-2xl font-semibold text-blue-600">{project.name}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
