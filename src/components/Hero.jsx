export default function Hero() {
  return (
    <section className="px-10 md:px-16 py-20 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute left-20 top-20 w-80 h-80 bg-green-300/30 rounded-full blur-3xl"></div>
      <div className="absolute left-40 bottom-20 w-60 h-60 bg-yellow-300/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left Content */}
        <div>
          <p className="text-green-500 text-xl mb-4 font-medium">
            Think Wise. Choose PaisaBASE.
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              Trade Smarter
            </span>
            <br />
            <span className="text-black">
              Earn Bigger
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-2xl font-medium">
            Earn More. Grow Together.
          </p>

          <div className="mt-8 space-y-4 text-xl">
            <p className="flex items-center gap-2">✅ 4.5% on INR Purchase</p>
            <p className="flex items-center gap-2">✅ ₹107–115 on USDT</p>
            <p className="flex items-center gap-2">✅ Whole Number Payouts</p>
            <p className="flex items-center gap-2">✅ Fast Withdrawals</p>
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="https://pf-app.paisa-base.com/signUp/?inviteCode=yYMZ8a"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 transition duration-300"
            >
              Register Now
            </a>

            <a
              href="https://t.me/Paisabaseofficial"
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
            >
              Join Telegram
            </a>
          </div>
        </div>

        {/* Right Poster */}
        <div className="bg-gradient-to-r from-green-400 to-yellow-400 p-1 rounded-3xl shadow-2xl hover:scale-105 hover:rotate-1 transition duration-500">
          <img
            src="/poster1.png"
            alt="PaisaBASE Poster"
            className="rounded-3xl w-full max-h-[700px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}
