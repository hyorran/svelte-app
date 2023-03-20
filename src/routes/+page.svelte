<script>
  import ReviewsList from "../components/ReviewsList/ReviewsList.svelte";

  export let data;

</script>


<main class="md:container md:mx-auto">
  <ReviewsList draggable={false} reviews={data.props.posts.toplists['575'].sort((a, b) => a.position - b.position)} />
</main>

<style lang="postcss">
</style>
