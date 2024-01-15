<script>
  import { Scatter } from 'svelte-chartjs';
  import { data } from '../data-chart2.ts';

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
  );
</script>

<Scatter { data } options={{ responsive: true }} />
