async function load({ fetch }) {
  const response = await fetch(`../data.json`);
  const posts = await response.json();
  return {
    props: {
      posts
    }
  };
}
export {
  load
};
