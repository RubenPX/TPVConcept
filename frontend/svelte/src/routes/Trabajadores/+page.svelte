<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import { FacturasDB } from '$lib/db/Facturas';
	import type { ProductoType } from '$lib/db/Producto';
	import { trabajadoresDB } from '$lib/db/Trabajadores';

	let dbData = [];

	function calcVentas(trabajadorID: number) {
		let sumProductosVendidos = (data: ProductoType[]) => data.reduce((acc, curr) => (acc += curr.precio), 0);

		let productosVendidosPorVendedor = FacturasDB.filter((itm) => trabajadorID == itm.vendedor.id);
		let sumaProductosVendidos = productosVendidosPorVendedor.map((v) => sumProductosVendidos(v.productosVendidos));
		let totalIngresosGenerados = sumaProductosVendidos.reduce((acc, curr) => (acc += curr), 0);

		return `${totalIngresosGenerados} €`;
	}
</script>

<main class="m-auto my-5 max-w-2xl">
	<div class="card bg-base-100 mt-2 w-full p-6 shadow-xl">
		<div class="inline-block text-xl font-semibold">
			Trabajadores
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
					data={trabajadoresDB}
					fields={{
						ID: (trabajador) => trabajador.id,
						Nombre: (trabajador) => trabajador.nombre,
						Apellido: (trabajador) => trabajador.apellido,
						'Ingresos generados': (trabajador) => calcVentas(trabajador.id)
					}}
				/>
			</div>
		</div>
	</div>
</main>
