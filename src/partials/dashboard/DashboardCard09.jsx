import React from 'react';
import Info from '../../utils/Info';
import BarChart from '../../charts/BarChart02';
import chartData09 from '../../data/ChartData09';
import BadgePill from '../BadgePill';
import DashboardCardGeneric from './DashboardCardGeneric';

function DashboardCard09() {
  return (
    <DashboardCardGeneric cardClassName="flex flex-col col-span-6" title="Sales VS Refunds">
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">+$6,796</div>
          <BadgePill badgeClass="bg-yellow-500">-34%</BadgePill>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData09} width={595} height={248} />
      </div>
    </DashboardCardGeneric>
  );
}

export default DashboardCard09;
