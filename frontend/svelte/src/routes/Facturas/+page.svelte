<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Table from '$lib/components/Table.svelte';
	import { FacturasDB, type FacturaType } from '$lib/db/Facturas';

	let facturaSeleccionada: FacturaType | undefined = undefined;
</script>

<main class="m-auto my-5 max-w-2xl">
	<Card title="Facturas">
		<span slot="rightHeader">
			<button class="btn btn-sm btn-primary px-6 normal-case">Add New</button>
		</span>
		<Table
			data={FacturasDB}
			fields={{
				id: (factura) => factura.id,
				fecha: (factura) => Intl.DateTimeFormat('es', { dateStyle: 'full', timeStyle: 'short' }).format(factura.fecha),
				vendedor: (factura) => factura.vendedor.nombre,
				total: (factura) => `${factura.productosVendidos.reduce((acc, curr) => (acc += curr.precio), 0)} €`
			}}
			on:click={({ detail }) => (facturaSeleccionada = detail)}
		/>
	</Card>

	{#if facturaSeleccionada}
		<Card title="Productos vendidos de la factura seleccionada">
			<span slot="rightHeader">
				<button class="btn btn-sm btn-circle btn-primary normal-case" on:click={() => (facturaSeleccionada = undefined)}>X</button>
			</span>
			<Table
				data={facturaSeleccionada.productosVendidos}
				fields={{
					ID: (producto) => producto.id,
					Nombre: (producto) => producto.nombre,
					Categoria: (producto) => producto.categoria,
					Precio: (producto) => producto.precio
				}}
			/>
		</Card>
	{/if}
</main>
