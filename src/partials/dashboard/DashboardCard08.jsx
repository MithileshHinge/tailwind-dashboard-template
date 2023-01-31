import React from 'react';
import LineChart from '../../charts/LineChart02';
import chartData08 from '../../data/ChartData08';

function DashboardCard08() {
  return (
    <div className="flex flex-col col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Sales Over Time (all stores)</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart data={chartData08} width={595} height={248} />
    </div>
  );
}

export default DashboardCard08;
