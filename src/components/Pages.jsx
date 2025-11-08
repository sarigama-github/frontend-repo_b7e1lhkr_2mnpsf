import { useMemo } from 'react';

export function KategoriPage({ onOpenFood }) {
  const items = useMemo(() => (
    Array.from({ length: 9 }).map((_, i) => ({
      id: String(i+1),
      title: i % 2 ? 'Nasi Goreng Spesial' : 'Grilled Salmon',
      image: i % 2 ? 'https://images.unsplash.com/photo-1604908554007-7f3b06e3f65b?q=80&w=1600&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
      ingredients: ['Nasi', 'Telur', 'Kecap', 'Bawang', 'Cabai']
    }))
  ), []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex gap-6">
      {/* Sidebar sticky */}
      <aside className="hidden md:block w-64 shrink-0">
        <div className="sticky top-20 space-y-4">
          <div className="p-4 rounded-2xl border bg-white">
            <div className="text-lg font-semibold mb-2">Kategori Page</div>
            <div className="text-sm text-neutral-600">Pilih tipe makanan</div>
          </div>
          <div className="p-4 rounded-2xl border bg-white">
            <div className="font-medium mb-2">Asal Masakan</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <button className="px-3 py-2 rounded-lg border hover:border-emerald-300 hover:bg-emerald-50">Lokal</button>
              <button className="px-3 py-2 rounded-lg border hover:border-emerald-300 hover:bg-emerald-50">Mancanegara</button>
            </div>
          </div>
          <div className="p-4 rounded-2xl border bg-white">
            <div className="font-medium mb-2">Jenis Proses</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {['Digoreng','Direbus','Dipanggang','Dibakar'].map((t) => (
                <button key={t} className="px-3 py-2 rounded-lg border hover:border-emerald-300 hover:bg-emerald-50">{t}</button>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-2xl border bg-white">
            <label className="font-medium mb-2 block">Difficulty</label>
            <select className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-200">
              <option>Semua</option>
              <option>Mudah</option>
              <option>Sedang</option>
              <option>Sulit</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1">
        <div className="mb-4">
          <input placeholder="Cari resep di kategori" className="w-full px-5 py-3 rounded-xl border bg-white focus:outline-none focus:ring-4 focus:ring-emerald-100" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.id} onClick={() => onOpenFood(item)} className="cursor-pointer bg-white rounded-2xl border p-3 hover:shadow-md transition">
              <img src={item.image} alt={item.title} className="w-full h-44 object-cover rounded-xl" />
              <div className="pt-3">
                <div className="font-semibold">{item.title}</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.ingredients.slice(0,4).map((i) => (
                    <span key={i} className="px-2.5 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">{i}</span>
                  ))}
                  {item.ingredients.length > 4 && <span className="px-2.5 py-1 text-xs rounded-full bg-neutral-100 text-neutral-600 border">…</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export function FoodPage({ data, onFilterIngredient }) {
  if (!data) return null;
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div>
          <img src={data.image} alt={data.title} className="w-full h-[420px] object-cover rounded-3xl border" />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-3">{data.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {data.ingredients.map((i) => (
              <button key={i} onClick={() => onFilterIngredient?.(i)} className="px-2.5 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">{i}</button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="p-3 rounded-xl border bg-white">
              <div className="text-neutral-500">Kesulitan</div>
              <div className="font-semibold">Sedang</div>
            </div>
            <div className="p-3 rounded-xl border bg-white">
              <div className="text-neutral-500">Jenis</div>
              <div className="font-semibold">Dipanggang</div>
            </div>
            <div className="p-3 rounded-xl border bg-white">
              <div className="text-neutral-500">Waktu</div>
              <div className="font-semibold">30 menit</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="font-semibold mb-2">Coba resep serupa</div>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {[1,2,3,4].map((i) => (
                <div key={i} className="min-w-[180px] p-2 rounded-xl border bg-white">
                  <div className="h-24 rounded-lg bg-neutral-100" />
                  <div className="mt-2 text-sm font-medium">Resep Mirip {i}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div>
          <h2 className="text-xl font-semibold mb-3">Langkah-langkah</h2>
          <ol className="space-y-3 text-sm leading-relaxed">
            <li className="p-3 rounded-xl border bg-white">1. Siapkan semua bahan dan bumbu.</li>
            <li className="p-3 rounded-xl border bg-white">2. Panaskan wajan, tumis bumbu hingga harum.</li>
            <li className="p-3 rounded-xl border bg-white">3. Masukkan bahan utama, masak hingga matang.</li>
            <li className="p-3 rounded-xl border bg-white">4. Sajikan hangat dengan topping pilihan.</li>
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Video</h2>
          {false ? (
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe title="YouTube" className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          ) : (
            <div className="aspect-video rounded-2xl border bg-neutral-50 flex items-center justify-center text-neutral-500">Video belum tersedia</div>
          )}
        </div>
      </div>
    </div>
  );
}
