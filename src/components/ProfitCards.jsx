export default function ProfitCards() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-r from-green-500 to-cyan-500 p-[2px] rounded-2xl">
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 text-center">
            <h2 className="text-5xl font-bold text-green-400">4.5%</h2>
            <p className="text-xl mt-3">INR Purchase</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-[2px] rounded-2xl">
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 text-center">
            <h2 className="text-5xl font-bold text-cyan-400">₹107–115</h2>
            <p className="text-xl mt-3">USDT Trading</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-2xl">
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 text-center">
            <h2 className="text-5xl font-bold text-purple-400">1%</h2>
            <p className="text-xl mt-3">Team Bonus</p>
          </div>
        </div>

      </div>
    </section>
  );
}