import { useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trending from './components/Trending';
import { FunFact, Promo, Footer } from './components/Sections';
import { KategoriPage, FoodPage } from './components/Pages';

function App() {
  const [route, setRoute] = useState('home');
  const [search, setSearch] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentFood, setCurrentFood] = useState(null);

  const onOpenFood = (item) => {
    setCurrentFood(item);
    setRoute('food');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredHint = useMemo(() => search.trim(), [search]);

  return (
    <div className="min-h-screen bg-[#fffdf8] text-neutral-800">
      <Header onNavigate={setRoute} loggedIn={loggedIn} onLoginToggle={setLoggedIn} />

      {route === 'home' && (
        <>
          <Hero onSearch={setSearch} />
          {filteredHint && (
            <div className="max-w-6xl mx-auto px-4 -mt-8 mb-6 text-sm text-neutral-600">Hasil untuk: <span className="font-medium">{filteredHint}</span></div>
          )}
          <Trending onOpenFood={onOpenFood} />
          <FunFact />
          <Promo onNavigate={setRoute} />
        </>
      )}

      {route === 'kategori' && (
        <KategoriPage onOpenFood={onOpenFood} />
      )}

      {route === 'food' && (
        <FoodPage data={currentFood} onFilterIngredient={(i) => { setRoute('kategori'); alert(`Filter kategori berdasarkan bahan: ${i}`); }} />
      )}

      <Footer />
    </div>
  );
}

export default App;
