<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>

<script>
	export let post;
</script>

<script context="module">
	export async function preload({ params, query }) {
			// the `slug` parameter is available because
			// this file is called [slug].html
			const res = await this.fetch(`about.json`);
			const data = await res.json();
			console.log(data)
			if (res.status === 200) {
				return { post: data };
			} else {
				this.error(res.status, data.message);
			}
		};

</script>

