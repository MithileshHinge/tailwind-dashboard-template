import { tailwindConfig, hexToRGB } from '../../utils/Utils';

const chartData03 = {
  labels: [
    '12-01-2020', '01-01-2021', '02-01-2021',
    '03-01-2021', '04-01-2021', '05-01-2021',
    '06-01-2021', '07-01-2021', '08-01-2021',
    '09-01-2021', '10-01-2021', '11-01-2021',
    '12-01-2021', '01-01-2022', '02-01-2022',
    '03-01-2022', '04-01-2022', '05-01-2022',
    '06-01-2022', '07-01-2022', '08-01-2022',
    '09-01-2022', '10-01-2022', '11-01-2022',
    '12-01-2022', '01-01-2023',
  ],
  datasets: [
    // Indigo line
    {
      data: [
        540, 466, 540, 466, 385, 432, 334,
        334, 289, 289, 200, 289, 222, 289,
        289, 403, 554, 304, 289, 270, 134,
        270, 829, 344, 388, 364,
      ],
      fill: true,
      backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
      borderColor: tailwindConfig().theme.colors.indigo[500],
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
      clip: 20,
    },
    // Gray line
    {
      data: [
        689, 562, 477, 477, 477, 477, 458,
        314, 430, 378, 430, 498, 642, 350,
        145, 145, 354, 260, 188, 188, 300,
        300, 282, 364, 660, 554,
      ],
      borderColor: tailwindConfig().theme.colors.slate[300],
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
      clip: 20,
    },
  ],
};

export default chartData03;
