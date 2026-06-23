export default function Navbar() {
  const trackLead = () => {
    if (window.fbq) window.fbq('track', 'Lead');
  };

  const trackContact = () => {
    if (window.fbq) window.fbq('track', 'Contact');
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-md border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-yellow-500">Paisa</span>
          <span className="text-green-600">BASE</span>
        </h1>

        <div className="flex gap-2 md:gap-4">
          <a
            href="https://pf-app.paisa-base.com/signUp/?inviteCode=yYMZ8a"
            target="_blank"
            rel="noreferrer"
            onClick={trackLead}
            className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-sm md:text-base"
          >
            Register
          </a>

          <a
            href="https://t.me/Paisabaseofficial"
            target="_blank"
            rel="noreferrer"
            onClick={trackContact}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-sm md:text-base"
          >
            Telegram
          </a>
        </div>
      </div>
    </nav>
  );
}