import { useEffect, useRef, useState } from 'react';

const mockTrending = [
  {
    id: '1',
    title: 'Ramen Pedas',
    image: 'https://images.unsplash.com/photo-1587837429795-27856bc577ee?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSYW1lbiUyMFBlZGFzfGVufDB8MHx8fDE3NjI1NjkzNjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    ingredients: ['Mie', 'Kaldu', 'Cabai', 'Telur', 'Daun Bawang', 'Kecap']
  },
  {
    id: '2',
    title: 'Ayam Panggang Madu',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
    ingredients: ['Ayam', 'Madu', 'Bawang', 'Jahe', 'Merica']
  },
  {
    id: '3',
    title: 'Pasta Creamy',
    image: 'https://images.unsplash.com/photo-1760390952135-12da7267ff8f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYXN0YSUyMENyZWFteXxlbnwwfDB8fHwxNzYyNTY5MzY1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    ingredients: ['Pasta', 'Krim', 'Keju', 'Bawang Putih', 'Peterseli', 'Jamur']
  },
  {
    id: '4',
    title: 'Sate Bakar',
    image: 'https://images.unsplash.com/photo-1751460374445-bf928dc7bd63?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYXRlJTIwQmFrYXJ8ZW58MHwwfHx8MTc2MjU2OTM2NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    ingredients: ['Daging', 'Kecap', 'Bumbu Kacang', 'Lontong']
  },
];

function IngredientChips({ items, max = 4 }) {
  const sliced = items.slice(0, max);
  const hasMore = items.length > max;
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {sliced.map((i) => (
        <span key={i} className="px-2.5 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
          {i}
        </span>
      ))}
      {hasMore && <span className="px-2.5 py-1 text-xs rounded-full bg-neutral-100 text-neutral-600 border">…</span>}
    </div>
  );
}

function TrendingCard({ item, onClick }) {
  return (
    <div onClick={onClick} className="group cursor-pointer bg-white rounded-2xl border border-neutral-200 p-3 transition-transform will-change-transform hover:scale-[1.02] shadow-sm hover:shadow-md overflow-hidden">
      <div className="relative rounded-xl overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="pt-3">
        <h3 className="font-semibold text-neutral-800">{item.title}</h3>
        <IngredientChips items={item.ingredients} />
      </div>
    </div>
  );
}

export default function Trending({ onOpenFood }) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    if (!isMobile || !containerRef.current) return;
    const el = containerRef.current;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e) => {
      el.classList.add('cursor-grabbing');
      startX = e.pageX || e.touches?.[0]?.pageX || 0;
      scrollLeft = el.scrollLeft;
    };
    const onMove = (e) => {
      if (startX === 0) return;
      const x = e.pageX || e.touches?.[0]?.pageX || 0;
      const walk = (x - startX) * 1.2;
      el.scrollLeft = scrollLeft - walk;
    };
    const onUp = () => {
      startX = 0;
      el.classList.remove('cursor-grabbing');
    };

    el.addEventListener('mousedown', onDown);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseup', onUp);
    el.addEventListener('mouseleave', onUp);
    el.addEventListener('touchstart', onDown, { passive: true });
    el.addEventListener('touchmove', onMove, { passive: true });
    el.addEventListener('touchend', onUp);

    return () => {
      el.removeEventListener('mousedown', onDown);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseup', onUp);
      el.removeEventListener('mouseleave', onUp);
      el.removeEventListener('touchstart', onDown);
      el.removeEventListener('touchmove', onMove);
      el.removeEventListener('touchend', onUp);
    };
  }, [isMobile]);

  return (
    <section id="trending" className="max-w-6xl mx-auto px-4 pb-12">
      <div className="flex items-end justify-between mb-5">
        <h2 className="text-xl md:text-2xl font-bold">Trending Minggu Ini</h2>
        <button className="text-emerald-700 text-sm hover:underline" onClick={() => alert('Lihat semua segera hadir!')}>Lihat semua</button>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 gap-5">
        {mockTrending.slice(0,3).map((item) => (
          <TrendingCard key={item.id} item={item} onClick={() => onOpenFood(item)} />
        ))}
      </div>

      {/* Mobile horizontal swipe */}
      <div ref={containerRef} className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
        {mockTrending.map((item) => (
          <div key={item.id} className="min-w-[85%] snap-start">
            <TrendingCard item={item} onClick={() => onOpenFood(item)} />
          </div>
        ))}
      </div>
    </section>
  );
}
