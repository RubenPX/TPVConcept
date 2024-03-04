<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Table from '$lib/components/Table.svelte';
	import { FacturasDB } from '$lib/db/Facturas';
	import type { ProductoType } from '$lib/db/Producto';
	import { trabajadoresDB } from '$lib/db/Trabajadores';

	function calcVentas(trabajadorID: number) {
		let sumProductosVendidos = (data: ProductoType[]) => data.reduce((acc, curr) => (acc += curr.precio), 0);

		let productosVendidosPorVendedor = FacturasDB.filter((itm) => trabajadorID == itm.vendedor.id);
		let sumaProductosVendidos = productosVendidosPorVendedor.map((v) => sumProductosVendidos(v.productosVendidos));
		let totalIngresosGenerados = sumaProductosVendidos.reduce((acc, curr) => (acc += curr), 0);

		return `${totalIngresosGenerados} €`;
	}
</script>

<main class="m-auto my-5 max-w-2xl">
	<Card title="Trabajadores">
		<span slot="rightHeader">
			<button class="btn btn-sm btn-primary px-6 normal-case">Add New</button>
		</span>
		<Table
			data={trabajadoresDB}
			fields={{
				ID: (trabajador) => trabajador.id,
				Nombre: (trabajador) => trabajador.nombre,
				Apellido: (trabajador) => trabajador.apellido,
				'Ingresos generados': (trabajador) => calcVentas(trabajador.id)
			}}
		/>
	</Card>
</main>
