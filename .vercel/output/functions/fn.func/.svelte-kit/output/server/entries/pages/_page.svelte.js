import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index2.js";
import { R as ReviewsList } from "../../chunks/ReviewsList.js";
import { R as ReviewsStore } from "../../chunks/Store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ReviewsStore, $$unsubscribe_ReviewsStore;
  $$unsubscribe_ReviewsStore = subscribe(ReviewsStore, (value) => $ReviewsStore = value);
  $$unsubscribe_ReviewsStore();
  return `<main class="md:container md:mx-auto">${validate_component(ReviewsList, "ReviewsList").$$render(
    $$result,
    {
      draggable: false,
      onDrop: () => null,
      reviews: $ReviewsStore.toplists["575"].sort((a, b) => a.position - b.position)
    },
    {},
    {}
  )}
</main>`;
});
export {
  Page as default
};
