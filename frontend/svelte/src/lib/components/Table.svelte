<script lang="ts" generics="T">
	import { createEventDispatcher } from 'svelte';

	type fieldAction<Ty> = { [key: string]: (item: Ty) => string | number };

	export let data: T[] = [];
	export let fields: fieldAction<T>;

	const dispatch = createEventDispatcher();
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
			<tr class="hover cursor-pointer" on:click={() => dispatch('click', item)}>
				{#each Object.values(fields) as field}
					<td>{field(item)}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
