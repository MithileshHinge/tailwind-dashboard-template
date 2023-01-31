import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';
import chartData06 from '../../data/ChartData06';
import DashboardCardGeneric from './DashboardCardGeneric';

function DashboardCard06() {
  return (
    <DashboardCardGeneric cardClassName="flex flex-col col-span-4" title="Top Countries">
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData06} width={389} height={260} />
    </DashboardCardGeneric>
  );
}

export default DashboardCard06;
