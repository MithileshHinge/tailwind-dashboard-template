import React from 'react';
import BarChart from '../../charts/BarChart01';
import chartData04 from '../../data/ChartData04';
import DashboardCardGeneric from './DashboardCardGeneric';

function DashboardCard04() {
  return (
    <DashboardCardGeneric cardClassName="flex flex-col col-span-6" title="Direct VS Indirect">
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData04} width={595} height={248} />
    </DashboardCardGeneric>
  );
}

export default DashboardCard04;
