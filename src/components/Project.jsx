export default function Education() {
  const education = [
    {
      title: "BCA Data Science",
      place: "SRM Institute of Science and Technology",
      year: "2022 - 2025",
    },
    {
      title: "Higher Secondary",
      place: "Kerala State Board",
      year: "2020 - 2022",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Education</h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {education.map((edu, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-500">{edu.title}</h2>
            <p className="text-gray-700">{edu.place}</p>
            <span className="text-gray-500">{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
