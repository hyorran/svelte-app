<script>
  import { ReviewsStore } from "../../Store.js";
  import { page } from "$app/stores";

  const data = $ReviewsStore.toplists["575"].find((item) => item.brand_id === $page.params.slug);

</script>

<h1>Position: {data?.position}</h1>
<div>Brand id: {data?.brand_id}</div>