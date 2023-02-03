import React from 'react';
import chart from '../../images/charts/chart08.svg';

function DashboardCard08() {
  return (
    <div className="flex flex-col col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Sales Over Time (all stores)</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex flex-wrap justify-between items-end">
          <div className="flex items-start">
            <div className="text-3xl font-bold text-slate-800 mr-2">$1,482</div>
            <div className="text-sm font-semibold text-white px-1.5 rounded-full bg-yellow-500">-22%</div>
          </div>
          <div className="grow ml-2 mb-1">
            <ul className="flex flex-wrap justify-end">
              <li className="ml-3">
                <div className="inline-flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2 border-3 border-indigo-500" />
                  <span className="text-slate-500 text-sm">Current</span>
                </div>
              </li>
              <li className="ml-3">
                <div className="inline-flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2 border-3 border-sky-400" />
                  <span className="text-slate-500 text-sm">Previous</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img src={chart} className="px-5 pb-4"/>
    </div>
  );
}

export default DashboardCard08;
