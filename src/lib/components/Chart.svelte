<script>
  import { Bar, Scatter } from "svelte-chartjs";
  import { dataChart1, dataChart2 } from "../data.ts";

  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
  } from "chart.js";

  // Register the components needed for both chart types
  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
  );

  export let type = "Bar"; // default type
  let data;

  // Assign the appropriate data based on type
  $: if (type === "Bar") {
    data = dataChart1;
  } else if (type === "Scatter") {
    data = dataChart2;
  }
</script>

<!-- Dynamically determine which chart to render based on the type prop -->
{#if type === "Bar"}
  <Bar {data} options={{ responsive: true }} />
{:else if type === "Scatter"}
  <Scatter {data} options={{ responsive: true }} />
{/if}
