import React from 'react';
import chart from '../../images/charts/chart06.svg';

function DashboardCard06() {
  return (
    <div className="flex flex-col col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Countries</h2>
      </header>
      <div className="grow flex flex-col justify-center items-center">
        <div className="p-6">
          <img src={chart} />
        </div>
        <div className="px-5 pt-2 pb-6">
          <ul className="flex flex-wrap justify-center -m-1">
            <li className="mr-1">
              <div className="btn-xs bg-white border-1 border-slate-200 text-slate-500 shadow-md">
                <div className="w-2 h-2 bg-indigo-500 rounded-sm mr-1" />
                <span className="flex items-center">United States</span>
              </div>
            </li>
            <li className="mr-1">
              <div className="btn-xs bg-white border-1 border-slate-200 text-slate-500 shadow-md">
                <div className="w-2 h-2 bg-sky-400 rounded-sm mr-1" />
                <span className="flex items-center">Italy</span>
              </div>
            </li>
            <li className="mr-1">
              <div className="btn-xs bg-white border-1 border-slate-200 text-slate-500 shadow-md">
                <div className="w-2 h-2 bg-indigo-800 rounded-sm mr-1" />
                <span className="flex items-center">Other</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard06;
