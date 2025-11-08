import { useState } from 'react';
import { Home, Flame, Heart, Layers, User, Menu, X } from 'lucide-react';

export default function Header({ onNavigate, loggedIn, onLoginToggle }) {
  const [showProfile, setShowProfile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const MenuItems = () => (
    <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6 text-sm font-medium">
      <li>
        <button onClick={() => { onNavigate('home'); setMobileOpen(false); }} className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
          <Home size={18} /> Home
        </button>
      </li>
      <li>
        <a href="#trending" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
          <Flame size={18} /> Trending
        </a>
      </li>
      <li>
        <button onClick={() => { alert('Fitur Favorite akan hadir!'); setMobileOpen(false); }} className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
          <Heart size={18} /> Favorite
        </button>
      </li>
      <li>
        <button onClick={() => { onNavigate('kategori'); setMobileOpen(false); }} className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
          <Layers size={18} /> Kategori
        </button>
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu />
          </button>
          <div onClick={() => onNavigate('home')} className="cursor-pointer select-none">
            <div className="text-xl font-bold tracking-tight">BagiBagiResep</div>
            <div className="text-[10px] uppercase tracking-widest text-emerald-700">Masak Jadi Mudah</div>
          </div>
        </div>

        <nav className="hidden md:block">
          <MenuItems />
        </nav>

        <div className="relative">
          <button
            onClick={() => setShowProfile((s) => !s)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
            aria-haspopup="menu"
            aria-expanded={showProfile}
          >
            <User size={18} />
            <span className="hidden sm:inline text-sm">Profil</span>
          </button>
          {showProfile && (
            <div className="absolute right-0 mt-2 w-44 rounded-lg shadow-lg border border-neutral-200 bg-white p-2">
              {loggedIn ? (
                <button
                  onClick={() => {
                    onLoginToggle(false);
                    setShowProfile(false);
                  }}
                  className="w-full px-3 py-2 rounded-md bg-rose-50 hover:bg-rose-100 text-rose-600 text-sm"
                >
                  Logout
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      onLoginToggle(true);
                      setShowProfile(false);
                    }}
                    className="w-full px-3 py-2 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => alert('Sign Up sederhana - simulasi')} 
                    className="w-full px-3 py-2 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-sm"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {mobileOpen && (
        <>
          <button
            className="fixed inset-0 bg-black/30" onClick={() => setMobileOpen(false)} aria-label="Close menu overlay"
          />
          <button
            className="fixed right-3 top-3 z-[60] p-2 rounded-full bg-white/90 border border-neutral-200"
            onClick={() => setMobileOpen(false)} aria-label="Close menu"
          >
            <X />
          </button>
          <aside className="fixed z-[55] top-0 left-0 h-full w-80 max-w-[80%] bg-white shadow-xl border-r border-neutral-200 p-4 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="text-lg font-semibold">BagiBagiResep</div>
            </div>
            <MenuItems />
            <div className="mt-auto border-t pt-4">
              <div className="flex items-center gap-2 mb-3 text-sm text-neutral-600">
                <User size={18} /> Profil
              </div>
              {loggedIn ? (
                <button
                  onClick={() => {
                    onLoginToggle(false);
                    setMobileOpen(false);
                  }}
                  className="w-full px-4 py-2 rounded-md bg-rose-50 hover:bg-rose-100 text-rose-600"
                >
                  Logout
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      onLoginToggle(true);
                      setMobileOpen(false);
                    }}
                    className="flex-1 px-4 py-2 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-700"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => alert('Sign Up sederhana - simulasi')}
                    className="flex-1 px-4 py-2 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
