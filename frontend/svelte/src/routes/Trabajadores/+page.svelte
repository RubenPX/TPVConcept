<script>
	import { trabajadoresDB } from '$lib/db/Trabajadores';

	let dbData = [];
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
				<table class="table w-full">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
						</tr>
					</thead>
					<tbody>
						{#each trabajadoresDB as trabajador}
							<tr>
								<td>{trabajador.id}</td>
								<td>
									<div class="flex items-center space-x-3">
										<div>
											<div class="font-bold">{trabajador.nombre}</div>
											<div class="text-sm opacity-50">{trabajador.apellido}</div>
										</div>
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</main>
