export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-md border-b border-green-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-4xl font-bold">
          <span className="text-yellow-500">Paisa</span>
          <span className="text-green-600">BASE</span>
        </h1>

       <div className="flex gap-4">
  <a
    href="https://pf-app.paisa-base.com/signUp/?inviteCode=yYMZ8a"
    target="_blank"
    rel="noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"
  >
    Register
  </a>

  <a
    href="https://t.me/Paisabaseofficial"
    target="_blank"
    rel="noreferrer"
    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold"
  >
    Telegram
  </a>
        </div>
      </div>
    </nav>
  );
}