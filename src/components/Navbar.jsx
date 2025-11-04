import React from 'react';
import { Rocket, User, FolderGit2 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
            <Rocket size={18} />
          </span>
          <span className="tracking-tight">Your Name</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-600">
          <a href="#about" className="hover:text-slate-900 transition-colors inline-flex items-center gap-2">
            <User size={18} /> About
          </a>
          <a href="#work" className="hover:text-slate-900 transition-colors inline-flex items-center gap-2">
            <FolderGit2 size={18} /> Work
          </a>
          <a href="#contact" className="inline-flex items-center bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors">Get in touch</a>
        </nav>
      </div>
    </header>
  );
}
