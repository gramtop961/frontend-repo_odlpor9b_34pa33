import React from 'react';
import { FileText, Stethoscope, FlaskConical } from 'lucide-react';

function Badge({ children, color = 'bg-emerald-50 text-emerald-700 border-emerald-200' }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${color}`}>
      {children}
    </span>
  );
}

function RecordCard({ record }) {
  const Icon = record.type === 'lab' ? FlaskConical : record.type === 'rx' ? Stethoscope : FileText;
  const color = record.type === 'lab'
    ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
    : record.type === 'rx'
    ? 'bg-violet-50 text-violet-700 border-violet-200'
    : 'bg-amber-50 text-amber-700 border-amber-200';

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100">
              <Icon className="w-5 h-5 text-slate-700" />
            </div>
            <div>
              <h3 className="font-medium leading-snug text-slate-900">{record.title}</h3>
              <p className="text-xs text-slate-500">{record.date} • {record.provider}</p>
            </div>
          </div>
          <Badge color={color}>{record.type === 'lab' ? 'Lab' : record.type === 'rx' ? 'Prescription' : 'Note'}</Badge>
        </div>
        <p className="mt-3 text-sm text-slate-600 line-clamp-2">{record.summary}</p>

        {record.highlights?.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {record.highlights.map((h, idx) => (
              <div key={idx} className="rounded-lg bg-slate-50 border border-slate-200 p-2">
                <p className="text-[11px] uppercase tracking-wide text-slate-500">{h.label}</p>
                <p className="text-sm font-medium text-slate-900">{h.value}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center gap-3">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Open</button>
          <button className="text-sm text-slate-500 hover:text-slate-700">Share</button>
        </div>
      </div>
    </div>
  );
}

export default function RecordGrid({ records }) {
  if (!records?.length) {
    return (
      <div className="text-center py-16">
        <p className="text-slate-500">No records match your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {records.map((r) => (
        <RecordCard key={r.id} record={r} />
      ))}
    </div>
  );
}
