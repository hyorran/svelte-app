<script>
  import FeaturesList from "../FeaturesList/FeaturesList.svelte";
  import Rating from "../Rating.svelte";

  export let reviews = [];

</script>

<div class="relative overflow-x-auto">
  <table class="w-full text-sm text-left text-gray-500">
    <thead class="text-xs text-gray-700 uppercase bg-yellow-600">
    <tr class="w-full border-b">
      <th class="px-6 py-3 text-center" scope="col">Casino</th>
      <th class="px-6 py-3 text-center" scope="col">Bonus</th>
      <th class="px-6 py-3 text-center" scope="col">Features</th>
      <th class="px-6 py-3 text-center" scope="col">Play</th>
    </tr>
    </thead>
    <tbody>
    {#each reviews.sort((a, b) => a.position - b.position) as review}
      <tr class="bg-white border-b">
        <th class="content-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <div class="flex flex-wrap justify-center h-full flex-wrap">
            <img class="h-auto w-full max-w-lg mx-auto" alt="company-logo" src={review.logo} />
            <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
               href={`/${review.brand_id}`}>Review</a>
          </div>
        </th>
        <td class="px-6 py-4 content-center">
          <div class="flex flex-wrap justify-center">
            <Rating value={review.info.rating} subtitle={review.info.bonus} />
          </div>
        </td>
        <td class="px-6 py-4 content-center">
          <div class="flex flex-wrap justify-center">
            <FeaturesList features={review.info.features} />
          </div>
        </td>
        <td class="px-6 py-4 content-center">
          <div class="flex flex-wrap justify-center">
            <button
              type="button"
              class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              href={review.play_url}
            >
              Play now
            </button>
          </div>
          <span class="text-with-link">{@html review.terms_and_conditions}</span>
        </td>
      </tr>
    {/each}
    </tbody>
  </table>
</div>

<style lang="postcss">
    .text-with-link > :global(a) {
        color: blue;
        text-decoration: underline;
    }
</style>