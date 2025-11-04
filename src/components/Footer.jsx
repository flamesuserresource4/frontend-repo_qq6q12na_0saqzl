import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Let’s build something great</h3>
            <p className="mt-2 text-slate-600 max-w-xl">Available for select consulting, prototype sprints, and end‑to‑end product development.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition-colors">
              <Mail size={18} /> hello@example.com
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="mt-10 text-sm text-slate-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
