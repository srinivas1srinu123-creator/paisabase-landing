export default function Comparison() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Stop Losing Money in Decimals
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Others */}
        <div className="bg-red-500/10 border border-red-500 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-red-400 mb-6 text-center">
            Others
          </h3>

          <div className="space-y-4 text-center">
            <p className="text-4xl font-bold text-red-400">₹499.5</p>
            <p className="text-4xl font-bold text-red-400">₹999.3</p>
            <p className="text-4xl font-bold text-red-400">₹4999.3</p>
          </div>
        </div>

        {/* PaisaBASE */}
        <div className="bg-green-500/10 border border-green-500 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-green-400 mb-6 text-center">
            PaisaBASE
          </h3>

          <div className="space-y-4 text-center">
            <p className="text-4xl font-bold text-green-400">₹500</p>
            <p className="text-4xl font-bold text-green-400">₹1000</p>
            <p className="text-4xl font-bold text-green-400">₹5000</p>
          </div>
        </div>

      </div>
    </section>
  );
}