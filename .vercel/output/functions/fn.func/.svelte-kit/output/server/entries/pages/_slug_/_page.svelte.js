import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/index2.js";
import { R as ReviewsStore } from "../../../chunks/Store.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $ReviewsStore, $$unsubscribe_ReviewsStore;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_ReviewsStore = subscribe(ReviewsStore, (value) => $ReviewsStore = value);
  const data = $ReviewsStore.toplists["575"].find((item) => item.brand_id === $page.params.slug);
  $$unsubscribe_page();
  $$unsubscribe_ReviewsStore();
  return `<h1>Position: ${escape(data?.position)}</h1>
<div>Brand id: ${escape(data?.brand_id)}</div>`;
});
export {
  Page as default
};
