export default function CTA() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Ready to Start Earning?
      </h2>

      <p className="text-lg md:text-xl mb-8 text-gray-600">
        Think Wise. Choose PaisaBASE.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://pf-app.paisa-base.com/signUp/?inviteCode=yYMZ8a"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 text-white px-6 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 transition duration-300"
        >
          Register Now
        </a>

        <a
          href="https://t.me/Paisabaseofficial"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-500 text-white px-6 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
        >
          Join Telegram
        </a>
      </div>
    </section>
  );
}