export function FunFact() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold mb-3">Tahukah kamu?</h3>
          <p className="text-neutral-700 leading-relaxed">Riset menunjukkan bahwa menyiapkan bahan sebelum memasak (mise en place) dapat menghemat hingga 30% waktu di dapur. Mulai kebiasaan ini, dan lihat betapa mudahnya proses memasak!</p>
        </div>
        <div className="order-1 md:order-2">
          <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1400&auto=format&fit=crop" alt="Fun fact" className="rounded-2xl w-full h-64 object-cover border border-neutral-200" />
        </div>
      </div>
    </section>
  );
}

export function Promo({ onNavigate }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="rounded-3xl border border-neutral-200 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12 bg-emerald-50">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-3">Jangan Bingung, Mulai Masak!</h3>
            <p className="text-neutral-700 mb-6">Temukan resep favoritmu dengan cepat. Filter berdasarkan bahan, durasi, hingga tingkat kesulitan.</p>
            <div className="flex gap-3">
              <button onClick={() => onNavigate('kategori')} className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Ke Kategori</button>
              <button onClick={() => onNavigate('home')} className="px-5 py-3 rounded-xl border border-neutral-300 hover:bg-white">Ke Beranda</button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop" alt="Promo" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mt-16">
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop" alt="Background makanan" className="w-full h-72 object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <div className="text-2xl font-bold mb-2">BagiBagiResep</div>
            <p className="text-white/80 max-w-xl">Temukan dan bagikan resep favoritmu. Ikuti kami di sosial media!</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <a href="https://wa.me/6281111111111" className="px-3 py-1.5 rounded-full bg-white/90 text-neutral-800">WhatsApp Admin 1</a>
              <a href="https://wa.me/6281222222222" className="px-3 py-1.5 rounded-full bg-white/90 text-neutral-800">WhatsApp Admin 2</a>
            </div>
            <div className="mt-4 flex items-center gap-4 text-white/90">
              <a href="#" aria-label="Instagram">@bagibagiresep</a>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="TikTok">TikTok</a>
              <a href="#" aria-label="YouTube">YouTube</a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1584031745084-223095abdb0c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYWxhbHxlbnwwfDB8fHwxNzYyNTY5MzY2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Halal" className="h-8 bg-white rounded p-1" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Badan_POM_Republik_Indonesia.svg" alt="BPOM" className="h-8 bg-white rounded p-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 py-4 bg-white">© {new Date().getFullYear()} BagiBagiResep</div>
    </footer>
  );
}
