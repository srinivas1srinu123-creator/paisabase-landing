export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-3 md:right-6 flex flex-col gap-3 md:gap-4 z-50">
      <a href="https://t.me/Paisabaseofficial" target="_blank" rel="noreferrer">
        <img src="/telegram.png" alt="Telegram" className="w-12 h-12 md:w-14 md:h-14" />
      </a>

      <a href="https://wa.me/919236243851" target="_blank" rel="noreferrer">
        <img src="/whatsapp.png" alt="WhatsApp" className="w-12 h-12 md:w-14 md:h-14" />
      </a>
    </div>
  );
}
