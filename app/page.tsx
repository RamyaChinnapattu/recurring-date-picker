'use client';

import { useState } from 'react';
import { RecurrenceForm } from './components/RecurrenceForm';
import { CalendarPreview } from './components/CalendarPreview';

export default function Home() {
  const [recurringDates, setRecurringDates] = useState<Date[]>([]);

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecurrenceForm onUpdateDates={setRecurringDates} />
        <CalendarPreview dates={recurringDates} />
      </div>
    </main>
  );
}