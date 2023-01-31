import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';
import chartData06 from '../../charts/data/ChartData06';

function DashboardCard06() {
  return (
    <div className="flex flex-col col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Countries</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData06} width={389} height={260} />
    </div>
  );
}

export default DashboardCard06;
