<script>
	import { ProductoDB } from '$lib/db/Producto';
</script>

<main class="m-auto my-5 max-w-2xl">
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
				<table class="table w-full">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Categoria</th>
							<th>Precio</th>
						</tr>
					</thead>
					<tbody>
						{#each ProductoDB as producto}
							<tr>
								<td>{producto.id}</td>
								<td>{producto.nombre}</td>
								<td>{producto.categoria}</td>
								<td>{producto.precio}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</main>
