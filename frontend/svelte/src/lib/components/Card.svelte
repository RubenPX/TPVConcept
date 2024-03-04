<script lang="ts">
	export let title = 'Wow! No hay titulo';
</script>

<div class="card bg-base-100 mt-2 w-full p-6 shadow-xl">
	<div class="inline-block text-xl font-semibold">
		<slot name="leftHeader">{title}</slot>
		<div class="float-right inline-block">
			<div class="float-right inline-block">
				<slot name="rightHeader"><!-- optional fallback --></slot>
			</div>
		</div>
	</div>
	<div class="divider mt-2"></div>
	<div class="bg-base-100 h-full w-full">
		<div class="w-full overflow-x-auto">
			<slot>Vaya... Esto esta un poco vacio</slot>
		</div>
	</div>
</div>
