export default function Hero({ onSearch }) {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="relative rounded-3xl overflow-hidden border border-neutral-200 bg-emerald-50/40">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
            alt="Hero makanan"
            className="w-full h-[340px] md:h-[460px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-sm">Temukan Rasa Baru</h1>
            <p className="text-white/90 mt-3 md:mt-4 max-w-2xl">Resep modern, minimalis, dan mudah diikuti. Mulai dari bahan sampai plating, semua ada di sini.</p>
            <div className="mt-6 md:mt-8 w-full max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  onChange={(e) => onSearch?.(e.target.value)}
                  placeholder="Cari resep cepat, misal: ayam geprek, pasta, bakso..."
                  className="w-full rounded-full bg-white/95 border border-neutral-200 px-5 py-3.5 shadow-sm focus:outline-none focus:ring-4 focus:ring-emerald-200"
                />
                <button className="absolute right-1 top-1 bottom-1 px-5 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors">
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
