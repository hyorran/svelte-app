import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/index2.js";
import { R as ReviewsList } from "../../../chunks/ReviewsList.js";
import { R as ReviewsStore } from "../../../chunks/Store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ReviewsStore, $$unsubscribe_ReviewsStore;
  $$unsubscribe_ReviewsStore = subscribe(ReviewsStore, (value) => $ReviewsStore = value);
  function onDrop(newReviews) {
    if (newReviews) {
      newReviews.map((review, index) => {
        return { ...review, position: index };
      });
    }
  }
  $$unsubscribe_ReviewsStore();
  return `<main class="md:container md:mx-auto">${validate_component(ReviewsList, "ReviewsList").$$render(
    $$result,
    {
      draggable: true,
      onDrop,
      reviews: $ReviewsStore.toplists["575"].sort((a, b) => a?.position - b?.position)
    },
    {},
    {}
  )}
  <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Save
  </button>
</main>`;
});
export {
  Page as default
};
