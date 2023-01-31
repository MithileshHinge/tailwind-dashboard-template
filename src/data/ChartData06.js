// Import utilities
import { tailwindConfig } from '../utils/Utils';

const chartData06 = {
  labels: ['United States', 'Italy', 'Other'],
  datasets: [
    {
      label: 'Top Countries',
      data: [
        35, 30, 35,
      ],
      backgroundColor: [
        tailwindConfig().theme.colors.indigo[500],
        tailwindConfig().theme.colors.blue[400],
        tailwindConfig().theme.colors.indigo[800],
      ],
      hoverBackgroundColor: [
        tailwindConfig().theme.colors.indigo[600],
        tailwindConfig().theme.colors.blue[500],
        tailwindConfig().theme.colors.indigo[900],
      ],
      hoverBorderColor: tailwindConfig().theme.colors.white,
    },
  ],
};

export default chartData06;