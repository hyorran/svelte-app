export async function load({ fetch, params }) {
	const response = await fetch(`../data.json`); // stored in static folder
	const posts = await response.json();

	return {
		props: {
			posts: posts.toplists['575'].find((item) => item.brand_id === params.slug)
		}
	};
}
