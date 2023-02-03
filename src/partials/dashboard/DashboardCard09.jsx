import React from 'react';
import chart from '../../images/charts/chart09.svg';

function DashboardCard09() {
  return (
    <div className="flex flex-col col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Sales VS Refunds</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">+$6,796</div>
          <div className="text-sm font-semibold text-white px-1.5 rounded-full bg-yellow-500">-34%</div>
        </div>
      </div>
      <img src={chart} className="px-5 pb-4"/>
    </div>
  );
}

export default DashboardCard09;
