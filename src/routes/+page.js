export async function load({ fetch }) {
  const response = await fetch(`../data.json`); // stored in static folder
  const posts = await response.json();
  return {
    props: {
      posts
    }
  }
}