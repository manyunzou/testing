<script>
	import { range } from "d3";
	import { LayerCake, Svg } from "layercake";
	import { onMount, onDestroy, getContext } from 'svelte';
	import Bar from "$components/layercake/Bar.svelte";
	import Scatter from "$components/layercake/Scatter.svg.svelte";
	import AxisX from "$components/layercake/AxisX.svg.svelte";
	import AxisY from "$components/layercake/AxisY.svg.svelte";
	import demoData from "$components/demo/demo-layercake.csv";

	const data = getContext("data");
	const groupBy = (x,f)=>x.reduce((a,b,i)=>((a[f(b,i,x)]||=[]).push(b),a),{});
	const grouped = groupBy(data, v => v.closingHourCompare); 
	// console.log(grouped['equal'])

	const x = "x";
	const y = "y";
	const p = 20;
	const padding = {
		top: p,
		left: p,
		bottom: p,
		right: p
	};
</script>

<!-- <section>
	<h2>LayerCake scatterplot</h2>
	<figure>
		<LayerCake {data} {x} {y} {padding}>
			<Svg>
				<AxisY />
				<Scatter strokeWidth="1" />
			</Svg>
		</LayerCake>
	</figure>
</section> -->

<style>
	figure {
		margin: 1rem auto;
		width: 100%;
		height: 50vh;
	}
</style>
