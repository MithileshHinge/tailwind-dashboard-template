// Import utilities
import { tailwindConfig } from '../utils/Utils';

const chartData09 = {
  labels: [
    '12-01-2020', '01-01-2021', '02-01-2021',
    '03-01-2021', '04-01-2021', '05-01-2021',
  ],
  datasets: [
    // Light blue bars
    {
      label: 'Stack 1',
      data: [
        6200, 9200, 6600, 8800, 5200, 9200,
      ],
      backgroundColor: tailwindConfig().theme.colors.indigo[500],
      hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    // Blue bars
    {
      label: 'Stack 2',
      data: [
        -4000, -2600, -5350, -4000, -7500, -2000,
      ],
      backgroundColor: tailwindConfig().theme.colors.indigo[200],
      hoverBackgroundColor: tailwindConfig().theme.colors.indigo[300],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
};

export default chartData09;
