import React from 'react';
import HeroCover from './components/HeroCover';
import RecordFilters from './components/RecordFilters';
import RecordGrid from './components/RecordGrid';
import DesignNotes from './components/DesignNotes';

const MOCK_RECORDS = [
  {
    id: '1',
    type: 'lab',
    title: 'Complete Blood Count (CBC)',
    date: '2024-08-12',
    provider: 'Orange Labs',
    summary: 'Routine blood work to evaluate fatigue symptoms; hemoglobin slightly low, follow-up advised.',
    highlights: [
      { label: 'Reason', value: 'Fatigue check' },
      { label: 'HGB', value: '11.2 g/dL' },
    ],
  },
  {
    id: '2',
    type: 'rx',
    title: 'Dr. Rao — Prescription',
    date: '2024-09-05',
    provider: 'Lotus Clinic',
    summary: 'Prescription for iron supplements and diet changes to address anemia.',
    highlights: [
      { label: 'For', value: 'Iron deficiency' },
      { label: 'Duration', value: '6 weeks' },
    ],
  },
  {
    id: '3',
    type: 'note',
    title: 'Dermatology Follow-up Notes',
    date: '2024-03-22',
    provider: 'Skin+ Wellness',
    summary: 'Review of acne treatment plan; switch to gentler cleanser and reduce dosage.',
    highlights: [
      { label: 'Reason', value: 'Acne management' },
      { label: 'Next', value: 'Review in 2 months' },
    ],
  },
  {
    id: '4',
    type: 'lab',
    title: 'Lipid Profile',
    date: '2023-12-10',
    provider: 'Nova Diagnostics',
    summary: 'Cholesterol screening after annual check-up reminder.',
    highlights: [
      { label: 'LDL', value: '118 mg/dL' },
      { label: 'HDL', value: '56 mg/dL' },
    ],
  },
];

function useRecordFilters() {
  const [query, setQuery] = React.useState('');
  const [dateRange, setDateRange] = React.useState(''); // YYYY-MM
  const [type, setType] = React.useState('all');

  const filtered = React.useMemo(() => {
    return MOCK_RECORDS.filter((r) => {
      const matchesQuery = query
        ? [r.title, r.provider, r.summary].join(' ').toLowerCase().includes(query.toLowerCase())
        : true;

      const matchesType = type === 'all' ? true : r.type === type;

      const matchesMonth = dateRange
        ? r.date.startsWith(dateRange)
        : true;

      return matchesQuery && matchesType && matchesMonth;
    });
  }, [query, dateRange, type]);

  return { query, setQuery, dateRange, setDateRange, type, setType, filtered };
}

export default function App() {
  const { query, setQuery, dateRange, setDateRange, type, setType, filtered } = useRecordFilters();

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_70%_-10%,#e6f3ff_0%,transparent_60%),linear-gradient(to_bottom,#f9fbff,white)] text-slate-900">
      <HeroCover />

      <main className="container mx-auto px-6 md:px-8 -mt-12 md:-mt-16 space-y-8">
        <div className="bg-white/60 backdrop-blur rounded-3xl p-5 md:p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <h2 className="text-lg md:text-xl font-semibold">Your Records</h2>
            <p className="text-sm text-slate-500">Browse by month, type, or keywords</p>
          </div>
          <RecordFilters
            query={query}
            setQuery={setQuery}
            dateRange={dateRange}
            setDateRange={setDateRange}
            type={type}
            setType={setType}
          />

          <div className="mt-6">
            <RecordGrid records={filtered} />
          </div>
        </div>

        <DesignNotes />
      </main>

      <footer className="py-10 text-center text-xs text-slate-500">
        Designed for the Fluent design challenge — demo only.
      </footer>
    </div>
  );
}
