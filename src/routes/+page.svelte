<script>
  import ReviewsList from "../components/ReviewsList/ReviewsList.svelte";

  export let data;

</script>


<main class="md:container md:mx-auto">
  <ReviewsList reviews={data.props.posts.toplists['575']} />
</main>

<style lang="postcss">
</style>
