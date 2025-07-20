'use client';

import { format } from 'date-fns';

export function CalendarPreview({ dates }: { dates: Date[] }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-full">
      <h2 className="text-lg font-semibold mb-2">Preview</h2>
      <ul className="list-disc pl-5 max-h-96 overflow-y-auto">
        {dates.map((date, index) => (
          <li key={index}>{format(date, 'yyyy-MM-dd')}</li>
        ))}
      </ul>
    </div>
  );
}