export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-2 md:bottom-6 md:right-6 z-50">
      <a
        href="https://telegram.me/paisabase_channel"
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
    </div>
  );
}
