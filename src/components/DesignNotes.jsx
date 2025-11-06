import React from 'react';

export default function DesignNotes() {
  return (
    <section className="mt-12 bg-gradient-to-br from-rose-50 to-emerald-50 border border-slate-200 rounded-3xl p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Design Rationale</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-6 text-sm text-slate-700">
        <div>
          <h3 className="font-medium text-slate-900">Problem Framing</h3>
          <p className="mt-1">We prioritize fast retrieval. Users recall dates, types, or keywords—so search, month picker, and type filter are primary.</p>
        </div>
        <div>
          <h3 className="font-medium text-slate-900">Quick Understanding</h3>
          <p className="mt-1">Cards surface purpose and highlights: “reason for visit / test,” key values, and provider, reducing clicks.</p>
        </div>
        <div>
          <h3 className="font-medium text-slate-900">Tone & Aesthetics</h3>
          <p className="mt-1">Friendly gradients and soft surfaces avoid a clinical feel and align with a modern, positive brand.</p>
        </div>
      </div>
    </section>
  );
}
