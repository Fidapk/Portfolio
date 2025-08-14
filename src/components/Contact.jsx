export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Your Email" className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Message" className="w-full border p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
