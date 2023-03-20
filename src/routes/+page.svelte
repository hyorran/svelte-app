<script>
  import ReviewsList from "../components/ReviewsList/ReviewsList.svelte";
  import { ReviewsStore } from "../Store.js";
</script>


<main class="md:container md:mx-auto">
  <ReviewsList
    draggable={false}
    onDrop={() => null}
    reviews={$ReviewsStore.toplists['575'].sort((a, b) => a?.position - b?.position)}
  />
</main>

<style lang="postcss">
</style>
