import React from 'react';
import { Calendar, Search, Filter } from 'lucide-react';

export default function RecordFilters({ query, setQuery, dateRange, setDateRange, type, setType }) {
  return (
    <div className="w-full bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-4 md:p-5 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="col-span-1 md:col-span-2 flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200">
          <Search className="w-4 h-4 text-slate-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by test name, doctor, or notes"
            className="w-full outline-none text-sm"
          />
        </div>

        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200">
          <Calendar className="w-4 h-4 text-slate-500" />
          <input
            type="month"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>

        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200">
          <Filter className="w-4 h-4 text-slate-500" />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full outline-none bg-transparent text-sm"
          >
            <option value="all">All Types</option>
            <option value="lab">Lab Reports</option>
            <option value="rx">Prescriptions</option>
            <option value="note">Doctor Notes</option>
          </select>
        </div>
      </div>
    </div>
  );
}
