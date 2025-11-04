import React, { useRef, useState } from 'react';

function PhonePreview({ title, image, tags }) {
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: -10, y: 20 });
  const start = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  const onPointerDown = (e) => {
    setIsDragging(true);
    start.current = { x: e.clientX, y: e.clientY, rx: rotation.x, ry: rotation.y };
    ref.current && ref.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - start.current.x;
    const dy = e.clientY - start.current.y;
    const ry = start.current.ry + dx * 0.3;
    const rx = start.current.rx - dy * 0.3;
    setRotation({ x: Math.max(-60, Math.min(60, rx)), y: ry });
  };

  const onPointerUp = (e) => {
    setIsDragging(false);
    ref.current && ref.current.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="group">
      <div
        ref={ref}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={() => setIsDragging(false)}
        className="relative mx-auto h-80 w-40 sm:h-96 sm:w-48 cursor-grab active:cursor-grabbing"
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative h-full w-full rounded-[2rem] bg-white border border-slate-200 shadow-xl"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          }}
        >
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
            <img src={image} alt={title} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-24 rounded-b-2xl bg-slate-200/70" style={{ transform: 'translateZ(24px)' }} />
          <div className="absolute inset-0 rounded-[2rem] ring-1 ring-black/5" />
          <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-slate-900 font-medium">{title}</h3>
        <div className="mt-1 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100">{t}</span>
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-500">Drag to rotate the phone</p>
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const projects = [
    {
      title: 'FinTrack – Personal Finance',
      image: 'https://images.unsplash.com/photo-1597132828040-a5b1e12b417e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW5UcmFjayUyMCVFMiU4MCU5MyUyMFBlcnNvbmFsJTIwRmluYW5jZXxlbnwwfDB8fHwxNzYyMjI2ODQ4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      tags: ['React Native', 'TypeScript', 'GraphQL']
    },
    {
      title: 'Wellnest – Health Companion',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1280&auto=format&fit=crop',
      tags: ['Flutter', 'Firebase', 'Design Systems']
    },
    {
      title: 'Shoply – E‑commerce',
      image: 'https://images.unsplash.com/photo-1653946402580-72e2d34df646?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaG9wbHklMjAlRTIlODAlOTMlMjBFJUUyJTgwJTkxY29tbWVyY2V8ZW58MHwwfHx8MTc2MjIyNjg0OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      tags: ['Next.js', 'Stripe', 'SSR']
    }
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Selected work</h2>
          <p className="mt-2 text-slate-600">An interactive gallery – rotate the 3D phones to explore app screens from different angles.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <PhonePreview key={p.title} title={p.title} image={p.image} tags={p.tags} />
          ))}
        </div>
      </div>
    </section>
  );
}
