<script>
	import { FacturasDB } from '$lib/db/Facturas';
	import { ProductoDB } from '$lib/db/Producto';
</script>

<main class="m-auto my-5 max-w-2xl">
	<div class="card bg-base-100 mt-2 w-full p-6 shadow-xl">
		<div class="inline-block text-xl font-semibold">
			Facturas
			<div class="float-right inline-block">
				<div class="float-right inline-block">
					<button class="btn btn-sm btn-primary px-6 normal-case">Add New</button>
				</div>
			</div>
		</div>
		<div class="divider mt-2"></div>
		<div class="bg-base-100 h-full w-full pb-6">
			<div class="w-full overflow-x-auto">
				<table class="table w-full">
					<thead>
						<tr>
							<th>ID</th>
							<th>Fecha</th>
							<th>Vendedor</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{#each FacturasDB as factura}
							<tr>
								<td>{factura.id}</td>
								<td>{Intl.DateTimeFormat('es', { dateStyle: 'full', timeStyle: 'short' }).format(factura.fecha)}</td>
								<td>{factura.vendedor.nombre}</td>
								<td>{factura.productosVendidos.reduce((acc, curr) => (acc += curr.precio), 0)} €</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</main>
