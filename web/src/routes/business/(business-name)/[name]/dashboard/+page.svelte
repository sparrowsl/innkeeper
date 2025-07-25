<script>
	import { charts } from './chart-data.js';

	const { data } = $props();
</script>

<h1 class="text-xl font-semibold text-gray-700">Dashboard</h1>

<!-- Pie Charts -->
<section class="my-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
	{#each charts as { title, value, data }}
		<!-- <PieChartCard {title} {value} {data} /> -->
	{/each}
</section>

<!-- Total Revenue and referrals graph -->
<div class="mb-7 flex flex-col gap-2 lg:flex-row">
	<!-- <TotalRevenue /> -->
	<!-- Referrals or Top agents / Performing agents -->
	<!-- <PropertyReferrals /> -->
</div>
