export default function Benefits() {
  const items = [
    "Personal transactions are NOT debited",
    "Other app transactions are NOT debited",
    "Set your own selling limit",
    "Buy using Mobikwik & Freecharge",
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Why Choose PaisaBASE?
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-md shadow-xl border border-green-200 rounded-2xl p-8 hover:scale-105 transition"
          >
            <p className="text-xl">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}