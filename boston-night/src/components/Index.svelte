<script>
	import { getContext } from "svelte";
	import Demo from "$components/demo/Demo.svelte";
	import WIP from "$components/helpers/WIP.svelte";
	// import { onMount } from 'svelte';

	import LeafletMap from '$components/map/LeafletMap.svelte';
	import BarChart from "$components/BarChart.svelte";
	// import Footer from "$components/Footer.svelte";

	// const copy = getContext("copy");
	// const data = getContext("data");
</script>


<!-- <WIP /> -->
<!-- <Demo /> -->
<!-- <Footer /> -->

<div class="demo">
	<h1>Where to find night life in Boston?</h1>
	<h5>Manyun Zou</h5>

	<BarChart />

	<p>If you are a newcomer in the city, you might be wondering, "Why is everything close so early?" Well, you might not be wrong, especially if you are living the neighborhoods that are far away from Downtown or Back Bay.</p>

	<p>In the map below</p>


</div>

<LeafletMap />

<div class="demo">
	<p>For more details about Boston's night life, please refer to <a href="https://www.bostonplans.org/getattachment/5d81142a-606a-4741-8ad4-1af9381d81bd">the report</a> by Boston Planning & Development Agency Research Divison.</p> 
</div>


<!-- <div class="map" style="height:100%;width:100%" use:mapAction /> -->


<style>
	.demo {
		max-width: 50rem;
		padding: 16px;
		margin: 0 auto;
	}

	:global(.demo section) {
		margin: 32px auto;
		padding-top: 32px;
	}

	:global(.demo h2 span) {
		background: var(--color-mark);
		padding: 0 8px;
	}

	:global(.demo h5) {
		/* background: var(--color-mark); */
		max-width: 10rem;
		/* padding: 0 8px; */
		margin: 0 auto;
	}

	:global(p) {
		font-size: 20px;
	}


</style>
