import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="max-w-3xl">
          <p className="uppercase text-xs tracking-[0.2em] text-sky-600 font-semibold">Programmer • Technology Consultant</p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-slate-900">
            Building clean, modern digital products that feel effortless
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            I help teams and founders ship elegant apps with robust, scalable engineering. Minimalist aesthetics, pragmatic execution.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="inline-flex items-center px-5 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">Explore projects</a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-white transition-colors">Get a proposal</a>
          </div>
        </div>
      </div>
    </section>
  );
}
