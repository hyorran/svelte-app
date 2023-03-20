<script>
  import ReviewsList from "../../components/ReviewsList/ReviewsList.svelte";

  export let data;
  let reviews;

  function handleSubmit(newReviews) {
    if (newReviews) {
      reviews = newReviews.map((review, index) => {
        return {
          ...review,
          position: index
        };
      });
    }
  }
</script>


<main class="md:container md:mx-auto">
  <ReviewsList
    draggable
    onDrop={handleSubmit}
    reviews={data.props.posts.toplists['575'].sort((a, b) => a.position - b.position)}
  />
  <button
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    on:click|preventDefault={handleSubmit}
    type="button"
  >
    Save
  </button>
</main>

<style lang="postcss">
</style>
