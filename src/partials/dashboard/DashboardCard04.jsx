import React from 'react';
import BarChart from '../../charts/BarChart01';
import chartData04 from '../../data/ChartData04';

function DashboardCard04() {
  return (
    <div className="flex flex-col col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Direct VS Indirect</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData04} width={595} height={248} />
    </div>
  );
}

export default DashboardCard04;
