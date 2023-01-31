// Import utilities
import { tailwindConfig } from '../utils/Utils';

const chartData11 = {
  labels: ['Reasons'],
  datasets: [
    {
      label: 'Having difficulties using the product',
      data: [131],
      backgroundColor: tailwindConfig().theme.colors.indigo[500],
      hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
      barPercentage: 1,
      categoryPercentage: 1,
    },
    {
      label: 'Missing features I need',
      data: [100],
      backgroundColor: tailwindConfig().theme.colors.indigo[800],
      hoverBackgroundColor: tailwindConfig().theme.colors.indigo[900],
      barPercentage: 1,
      categoryPercentage: 1,
    },
    {
      label: 'Not satisfied about the quality of the product',
      data: [81],
      backgroundColor: tailwindConfig().theme.colors.sky[400],
      hoverBackgroundColor: tailwindConfig().theme.colors.sky[500],
      barPercentage: 1,
      categoryPercentage: 1,
    },
    {
      label: 'The product doesn’t look as advertised',
      data: [65],
      backgroundColor: tailwindConfig().theme.colors.green[400],
      hoverBackgroundColor: tailwindConfig().theme.colors.green[500],
      barPercentage: 1,
      categoryPercentage: 1,
    },
    {
      label: 'Other',
      data: [72],
      backgroundColor: tailwindConfig().theme.colors.slate[200],
      hoverBackgroundColor: tailwindConfig().theme.colors.slate[300],
      barPercentage: 1,
      categoryPercentage: 1,
    },
  ],
};

export default chartData11;
