<script>
  import ReviewsList from "../../components/ReviewsList/ReviewsList.svelte";
  import { ReviewsStore } from "../../Store.js";

  let reviews;

  function onDrop(newReviews) {
    if (newReviews) {
      reviews = newReviews.map((review, index) => {
        return {
          ...review,
          position: index
        };
      });
    }
  }

  function handleSubmit(newData) {
    $ReviewsStore.toplists["575"] = newData;
  }
</script>


<main class="md:container md:mx-auto">
  <ReviewsList
    draggable
    onDrop={onDrop}
    reviews={$ReviewsStore.toplists['575'].sort((a, b) => a?.position - b?.position)}
  />
  <button
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    on:click|preventDefault={handleSubmit(reviews)}
    type="button"
  >
    Save
  </button>
</main>

<style lang="postcss">
</style>
