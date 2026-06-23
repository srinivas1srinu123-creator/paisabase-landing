export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-6 flex flex-col gap-4 z-50">

      {/* Telegram */}
      <a
        href="https://t.me/Paisabaseofficial"
        target="_blank"
        rel="noreferrer"
        className="shadow-lg hover:scale-110 transition"
      >
        <img src="/telegram.png" alt="Telegram" className="w-14 h-14" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919236243851?text=Hi%20I%27m%20from%20PaisaBASE,%20If%20you%20want%20to%20know%20more%20about%20INR%20purchase%20and%20USDT%20trading%20contact%20me."
        target="_blank"
        rel="noreferrer"
        className="shadow-lg hover:scale-110 transition"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-14 h-14" />
      </a>

    </div>
  );
}