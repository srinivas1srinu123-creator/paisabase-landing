export default function CTA() {
  const trackLead = () => {
    if (window.fbq) window.fbq('track', 'Lead');
  };

  const trackContact = () => {
    if (window.fbq) window.fbq('track', 'Contact');
  };

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-5xl font-bold mb-6">
        Ready to Start Earning?
      </h2>

      <p className="text-xl mb-8 text-gray-500">
        Think Wise. Choose PaisaBASE.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="https://pf-app.paisa-base.com/signUp/?inviteCode=fqEKqL"
          target="_blank"
          rel="noreferrer"
          onClick={trackLead}
          className="bg-green-500 px-6 py-4 rounded-xl font-bold text-white hover:scale-105 transition"
        >
          Register Now
        </a>

        <a
          href="https://t.me/paisabase_channel"
          target="_blank"
          rel="noreferrer"
          onClick={trackContact}
          className="bg-blue-500 px-6 py-4 rounded-xl font-bold text-white hover:scale-105 transition"
        >
          Join Telegram
        </a>
      </div>
    </section>
  );
}
