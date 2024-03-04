<script lang="ts" generics="T">
	type fieldAction<Ty> = { [key: string]: (item: Ty) => string | number };

	export let data: T[] = [];
	export let fields: fieldAction<T>;
</script>

<table class="table w-full">
	<thead>
		<tr>
			{#each Object.keys(fields) as key}
				<th>{key}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as item}
			<tr>
				{#each Object.values(fields) as field}
					<td>{field(item)}</td>
				{/each}
				<!-- 
          <td>{Intl.DateTimeFormat('es', { dateStyle: 'full', timeStyle: 'short' }).format(factura.fecha)}</td>
          <td>{factura.vendedor.nombre}</td>
          <td>{factura.productosVendidos.reduce((acc, curr) => (acc += curr.precio), 0)} €</td> 
        -->
			</tr>
		{/each}
	</tbody>
</table>
