import React from 'react';
import chart from '../../images/charts/chart11.svg';

function DashboardCard11() {
  return (
    <div className="col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Reason for Refunds</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">449</div>
          <div className="text-sm font-semibold text-white px-1.5 rounded-full bg-yellow-500">-22%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <div className="grow flex flex-col justify-center">
          <img src={chart} className="px-5"/>
          <div className="px-5 py-2.5">
            <ul className="text-sm divide-y divide-slate-100">
              <li className="flex justify-between items-center pt-2.5 pb-2.5">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-sm mr-3 bg-indigo-500" />
                  <div>Having difficulties using the product</div>
                </div>
                <div className="font-medium ml-3 text-indigo-500">48.7%</div>
              </li>
              <li className="flex justify-between items-center pt-2.5 pb-2.5">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-sm mr-3 bg-indigo-800" />
                  <div>Missing features I need</div>
                </div>
                <div className="font-medium ml-3 text-indigo-800">24.9%</div>
              </li>
              <li className="flex justify-between items-center pt-2.5 pb-2.5">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-sm mr-3 bg-sky-400" />
                  <div>Not satisfied about the quality of the product</div>
                </div>
                <div className="font-medium ml-3 text-sky-400">19.3%</div>
              </li>
              <li className="flex justify-between items-center pt-2.5 pb-2.5">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-sm mr-3 bg-emerald-400" />
                  <div>The product doesn’t look as advertised</div>
                </div>
                <div className="font-medium ml-3 text-emerald-400">9.6%</div>
              </li>
              <li className="flex justify-between items-center pt-2.5 pb-2.5">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-sm mr-3 bg-slate-400" />
                  <div>Other</div>
                </div>
                <div className="font-medium ml-3 text-slate-400">9.3%</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard11;
