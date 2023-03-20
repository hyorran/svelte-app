<script>
  import "../app.css";
  import NavigationBar from "../components/NavigationBar.svelte";
  import { ReviewsStore } from "../Store.js";

  export let data;

  $ReviewsStore = data?.props.posts;
</script>

<NavigationBar />
<slot />

<style lang="postcss"></style>

