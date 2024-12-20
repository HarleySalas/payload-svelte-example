<script lang="ts">
	import { MyCounterButton } from '@repo/ui';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Web</h1>
<MyCounterButton />
{#each data.users as user}
	<div>
		{user.email}
	</div>
{/each}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
