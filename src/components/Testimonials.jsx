export default function Testimonials() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Trusted by Thousands
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

        <div className="bbg-white/90 backdrop-blur-md shadow-xl border border-green-200 rounded-2xl p-6">
          ⭐⭐⭐⭐⭐
          <p className="mt-4">
            Fast payouts and reliable support.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-md shadow-xl border border-green-200 rounded-2xl p-6">
          ⭐⭐⭐⭐⭐
          <p className="mt-4">
            Best platform for INR and USDT trading.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-md shadow-xl border border-green-200 rounded-2xl p-6">
          ⭐⭐⭐⭐⭐
          <p className="mt-4">
            Whole number payouts make huge difference.
          </p>
        </div>

      </div>
    </section>
  );
}