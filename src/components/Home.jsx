import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Fida PK</h1>
        <p className="text-lg mb-6 text-gray-100">
          Final-year Data Science student passionate about AI, Machine Learning, and building impactful projects.
        </p>
        <div className="space-x-4">
          <Link
            to="/projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
