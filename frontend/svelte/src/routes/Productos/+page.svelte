<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Table from '$lib/components/Table.svelte';
	import { ProductoDB } from '$lib/db/Producto';

	let selectedCategory = '';
	let data = ProductoDB;

	function setSelectedCategory(name: string) {
		selectedCategory = selectedCategory != name ? name : '';
		data = selectedCategory != '' ? ProductoDB.filter((itm) => itm.categoria == selectedCategory) : ProductoDB;
	}
</script>

<main class="m-auto my-5 flex max-w-5xl gap-2">
	<div class="flex-1">
		<Card title="Categorias">
			<ul class="menu rounded-box m-0 w-56 p-0">
				{#each new Set([...ProductoDB.map((x) => x.categoria)]) as item}
					<li><a href="#{item}" class={selectedCategory == item ? '!bg-green-500/20' : ''} on:click={() => setSelectedCategory(item)}>{item}</a></li>
				{/each}
			</ul>
		</Card>
	</div>

	<Card title="Facturas">
		<span slot="rightHeader">
			<button class="btn btn-sm btn-primary px-6 normal-case">Add New</button>
		</span>
		<Table
			{data}
			fields={{
				ID: (producto) => producto.id,
				Nombre: (producto) => producto.nombre,
				Categoria: (producto) => producto.categoria,
				Precio: (producto) => producto.precio
			}}
		/>
	</Card>
</main>
