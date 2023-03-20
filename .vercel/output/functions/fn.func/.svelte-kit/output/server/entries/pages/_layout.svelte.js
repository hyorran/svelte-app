import { c as create_ssr_component, a as subscribe, b as set_store_value, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { R as ReviewsStore } from "../../chunks/Store.js";
const app = "";
const NavigationBar_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.active.svelte-nfpej7{color:#1d4ed8}",
  map: null
};
const NavigationBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<nav class="p-3 border-gray-200 rounded bg-gray-50"><div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5"><div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"><ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"><li><a class="${[
    "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 svelte-nfpej7",
    $page.url.pathname === "/" ? "active" : ""
  ].join(" ").trim()}" href="/">Home</a></li>
        <li><a class="${[
    "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 svelte-nfpej7",
    $page.url.pathname === "/settings" ? "active" : ""
  ].join(" ").trim()}" href="/settings">Settings</a></li>
        <li><a class="${[
    "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 svelte-nfpej7",
    $page.url.pathname === "/about" ? "active" : ""
  ].join(" ").trim()}" href="/about">About</a></li></ul></div></div>
</nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ReviewsStore, $$unsubscribe_ReviewsStore;
  $$unsubscribe_ReviewsStore = subscribe(ReviewsStore, (value) => $ReviewsStore = value);
  let { data } = $$props;
  set_store_value(ReviewsStore, $ReviewsStore = data?.props.posts, $ReviewsStore);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_ReviewsStore();
  return `${validate_component(NavigationBar, "NavigationBar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
