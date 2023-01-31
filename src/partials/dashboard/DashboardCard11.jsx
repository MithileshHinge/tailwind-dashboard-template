import React from 'react';
import BarChart from '../../charts/BarChart03';
import chartData11 from '../../data/ChartData11';
import BadgePill from '../../partials/BadgePill';
import DashboardCardGeneric from './DashboardCardGeneric';

function DashboardCard11() {
  return (
    <DashboardCardGeneric cardClassName="col-span-6" title="Reason for Refunds">
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">449</div>
          <BadgePill badgeClass="bg-yellow-500">-22%</BadgePill>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData11} width={595} height={48} />
      </div>
    </DashboardCardGeneric>
  );
}

export default DashboardCard11;
