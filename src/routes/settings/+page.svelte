<script>
  import ReviewsList from "../../components/ReviewsList/ReviewsList.svelte";
  import { ReviewsStore } from "../../Store.js";

  $: reviews = $ReviewsStore.toplists["575"].sort((a, b) => a?.position - b?.position);
  let touchedForm = false;

  function onDrop(newReviews) {
    if (newReviews.length > 0) {
      reviews = newReviews.map((review, index) => {
        return {
          ...review,
          position: index
        };
      });
      touchedForm = true;
    }
  }

  function handleSubmit(newData) {
    $ReviewsStore.toplists["575"] = newData;
    touchedForm = false;

    alert("Changes successfully SAVED");
  }

  function handleCancel() {
    if (touchedForm) {
      reviews = $ReviewsStore.toplists["575"];
      reviews = reviews;
      touchedForm = false;
    }
  }
</script>


<main class="md:container md:mx-auto">
  <div class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50"
       role="alert">
    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
         xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            fill-rule="evenodd"></path>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Info!</span> Drag and drop items from the list to reorder how they show in the home
      page.
    </div>
  </div>
  <ReviewsList
    draggable
    onDrop={onDrop}
    reviews={reviews}
  />
  <footer class="flex justify-end w-full py-5">
    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none disabled:opacity-50"
      disabled={!touchedForm}
      on:click|preventDefault={handleSubmit(reviews)}
      type="button"
    >
      Save
    </button>
    <button
      class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      disabled={!touchedForm}
      on:click|preventDefault={handleCancel}
      type="button"
    >
      Cancel
    </button>
  </footer>
</main>

<style lang="postcss">
</style>
