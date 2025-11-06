import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] overflow-hidden rounded-b-3xl">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0b1020]/90 via-[#0b1020]/60 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 md:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs md:text-sm">
            Your health, clearly organized
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Find any health record in seconds.
          </h1>
          <p className="text-white/80 text-base md:text-lg">
            A calm, friendly space to browse your lab reports and prescriptions with instant summaries,
            clear reasons, and filters that match how you remember.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-[#0b1020] font-medium shadow-lg shadow-blue-500/20">
              Start Browsing
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 text-white border border-white/20 hover:bg-white/20">
              Upload Records
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
