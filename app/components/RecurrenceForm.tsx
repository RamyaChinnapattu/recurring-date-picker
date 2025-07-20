'use client';

import { useState } from 'react';
import { addDays, addWeeks, addMonths, addYears } from 'date-fns';

export function RecurrenceForm({ onUpdateDates }: { onUpdateDates: (dates: Date[]) => void }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [frequency, setFrequency] = useState('daily');
  const [interval, setInterval] = useState(1);

  const generateDates = () => {
    if (!startDate) return;

    const dates: Date[] = [];
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : addMonths(start, 1);
    let current = new Date(start);

    while (current <= end) {
      dates.push(new Date(current));

      switch (frequency) {
        case 'daily':
          current = addDays(current, interval);
          break;
        case 'weekly':
          current = addWeeks(current, interval);
          break;
        case 'monthly':
          current = addMonths(current, interval);
          break;
        case 'yearly':
          current = addYears(current, interval);
          break;
      }
    }
    onUpdateDates(dates);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <label className="block mb-2">Start Date</label>
      <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="border px-2 py-1 rounded w-full mb-4" />

      <label className="block mb-2">End Date (optional)</label>
      <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="border px-2 py-1 rounded w-full mb-4" />

      <label className="block mb-2">Recurrence</label>
      <select value={frequency} onChange={e => setFrequency(e.target.value)} className="border px-2 py-1 rounded w-full mb-4">
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      <label className="block mb-2">Interval (e.g. every X days)</label>
      <input type="number" value={interval} min={1} onChange={e => setInterval(parseInt(e.target.value))} className="border px-2 py-1 rounded w-full mb-4" />

      <button onClick={generateDates} className="bg-blue-600 text-white px-4 py-2 rounded">Generate</button>
    </div>
  );
}