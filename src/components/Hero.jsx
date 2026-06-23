export default function Hero() {
  return (
    <section className="px-5 md:px-16 py-12 md:py-20 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute left-10 md:left-20 top-20 w-60 md:w-80 h-60 md:h-80 bg-green-300/30 rounded-full blur-3xl"></div>
      <div className="absolute left-20 md:left-40 bottom-20 w-40 md:w-60 h-40 md:h-60 bg-yellow-300/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Poster First on Mobile */}
        <div className="bg-gradient-to-r from-green-400 to-yellow-400 p-1 rounded-3xl shadow-2xl mt-4 lg:mt-0 order-1 lg:order-2">
          <img
            src="/poster1.png"
            alt="PaisaBASE Poster"
            className="rounded-3xl w-full max-h-[700px] object-cover"
          />
        </div>

        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <p className="text-green-500 text-lg md:text-xl mb-4 font-medium">
            Think Wise. Choose PaisaBASE.
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              Trade Smarter
            </span>
            <br />
            <span className="text-black">
              Earn Bigger
            </span>
          </h1>

          <p className="mt-4 md:mt-6 text-gray-600 text-lg md:text-2xl font-medium">
            Earn More. Grow Together.
          </p>

          <div className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-base md:text-xl">
            <p>✅ 4.5% on INR Purchase</p>
            <p>✅ ₹107–115 on USDT</p>
            <p>✅ Whole Number Payouts</p>
            <p>✅ Fast Withdrawals</p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://pf-app.paisa-base.com/signUp/?inviteCode=yYMZ8a"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 text-white text-center px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              Register Now
            </a>

            <a
              href="https://t.me/Paisabaseofficial"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 text-white text-center px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              Join Telegram
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}