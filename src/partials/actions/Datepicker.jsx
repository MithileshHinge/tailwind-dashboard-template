import React from 'react';
import Flatpickr from 'react-flatpickr';

function Datepicker() {

  const options = {
    mode: 'range',
    static: true,
    monthSelectorType: 'static',
    dateFormat: 'M j, Y',
    defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
    onReady: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace('to', '-');
    },
    onChange: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace('to', '-');
    },
  }

  return (
    <div className="relative">
      <Flatpickr className="form-input pl-9 text-slate-500 font-medium w-60" options={options} />
      <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
        <svg className="w-4 h-4 fill-current text-slate-500 ml-3" viewBox="0 0 16 16">
          <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
        </svg>
      </div>
    </div>
  );
}

export default Datepicker;
