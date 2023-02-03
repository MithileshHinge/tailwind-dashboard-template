import React from 'react';
import chart from '../../images/charts/chart05.svg';

function DashboardCard05() {
  return (
    <div className="w-6/12 flex flex-col bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">AVG Order Value</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2 tabular-nums">$72</div>
          <div className="text-sm font-semibold text-white px-1.5 rounded-full bg-green-500">+34%</div>
        </div>
      </div>
      <img src={chart} className="px-5 pb-4"/>
    </div>
  );
}

export default DashboardCard05;
