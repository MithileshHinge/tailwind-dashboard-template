import React from 'react';
import LineChart from '../../charts/LineChart02';
import chartData08 from '../../data/ChartData08';
import DashboardCardGeneric from './DashboardCardGeneric';

function DashboardCard08() {
  return (
    <DashboardCardGeneric cardClassName="flex flex-col col-span-6" title="Sales Over Time (all stores)">
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart data={chartData08} width={595} height={248} />
    </DashboardCardGeneric>
  );
}

export default DashboardCard08;
