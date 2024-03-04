<script lang="ts">
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
	<div class="card bg-base-100 mt-2 w-full flex-1 p-2 shadow-xl">
		<div class="inline-block px-6 py-1 pb-0 pt-2 text-xl font-semibold">Categorias</div>
		<div class="divider mb-0 mt-2"></div>
		<div class="bg-base-100 h-full w-full">
			<ul class="menu rounded-box m-0 w-56 p-0">
				{#each new Set([...ProductoDB.map((x) => x.categoria)]) as item}
					<li><a href="#{item}" class={selectedCategory == item ? '!bg-green-500/20' : ''} on:click={() => setSelectedCategory(item)}>{item}</a></li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="card bg-base-100 mt-2 w-full p-6 shadow-xl">
		<div class="inline-block text-xl font-semibold">
			Productos
			<div class="float-right inline-block">
				<div class="float-right inline-block">
					<button class="btn btn-sm btn-primary px-6 normal-case">Add New</button>
				</div>
			</div>
		</div>
		<div class="divider mt-2"></div>
		<div class="bg-base-100 h-full w-full pb-6">
			<div class="w-full overflow-x-auto">
				<Table
					{data}
					fields={{
						ID: (producto) => producto.id,
						Nombre: (producto) => producto.nombre,
						Categoria: (producto) => producto.categoria,
						Precio: (producto) => producto.precio
					}}
				/>
			</div>
		</div>
	</div>
</main>
