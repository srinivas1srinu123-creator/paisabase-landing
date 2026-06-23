export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-2 md:bottom-6 md:right-6 flex flex-col gap-2 md:gap-4 z-50">

      <a
        href="https://t.me/Paisabaseofficial"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition"
      >
        <img
          src="/telegram.png"
          alt="Telegram"
          className="w-10 h-10 md:w-14 md:h-14"
        />
      </a>

      <a
        href="https://wa.me/919236243851?text=Hi%20I%20want%20to%20know%20more%20about%20PaisaBASE"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="w-10 h-10 md:w-14 md:h-14"
        />
      </a>

    </div>
  );
}