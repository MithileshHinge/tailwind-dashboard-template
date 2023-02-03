import React from 'react';
import chart from '../../images/charts/chart04.svg';

function DashboardCard04() {
  return (
    <div className="flex flex-col col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Direct VS Indirect</h2>
      </header>
      <div className="px-5 py-3">
        <ul className="flex flex-wrap">
          <li className="mr-4">
            <div className="inline-flex items-center">
              <div className="w-3 h-3 rounded-full mr-2 border-3 border-sky-400"></div>
              <span className="flex items-center">
                <span className="text-slate-800 text-3xl font-bold mr-2">$1.7K</span>
                <span className="text-slate-500 text-sm">Direct</span>
              </span>
            </div>
          </li>
          <li className="mr-4">
            <div className="inline-flex items-center">
              <div className="w-3 h-3 rounded-full mr-2 border-3 border-indigo-500"></div>
              <span className="flex items-center">
                <span className="text-slate-800 text-3xl font-bold mr-2">$2.4K</span>
                <span className="text-slate-500 text-sm">Indirect</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <img src={chart} className="px-5 pb-4"/>
    </div>
  );
}

export default DashboardCard04;
