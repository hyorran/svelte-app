import { c as create_ssr_component, d as each, e as escape, f as add_attribute, v as validate_component } from "./index2.js";
const FeaturesList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { features = [] } = $$props;
  if ($$props.features === void 0 && $$bindings.features && features !== void 0)
    $$bindings.features(features);
  return `<ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">${each(features, (feature) => {
    return `<li class="flex items-center space-x-3"><svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      <span>${escape(feature)}</span>
    </li>`;
  })}
</ul>`;
});
const Rating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { subtitle } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `<div class="flex items-center justify-center w-full flex-wrap">${each(Array(value), (_, index) => {
    return `<svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;
  })}
  ${5 - value > 0 ? `${each(Array(5 - value), (_, index) => {
    return `<svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;
  })}` : ``}</div>
<footer class="mb-5 text-sm text-gray-500"><p class="text-xs text-gray-900">${escape(subtitle)}</p>
</footer>`;
});
const ReviewsList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".text-with-link.svelte-ikhx76>a{color:blue;text-decoration:underline}tr.is-active.svelte-ikhx76{background-color:#3273dc;color:#fff}",
  map: null
};
const ReviewsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { reviews = [] } = $$props;
  let { draggable = false } = $$props;
  let { onDrop } = $$props;
  let hovering = false;
  if ($$props.reviews === void 0 && $$bindings.reviews && reviews !== void 0)
    $$bindings.reviews(reviews);
  if ($$props.draggable === void 0 && $$bindings.draggable && draggable !== void 0)
    $$bindings.draggable(draggable);
  if ($$props.onDrop === void 0 && $$bindings.onDrop && onDrop !== void 0)
    $$bindings.onDrop(onDrop);
  $$result.css.add(css);
  {
    onDrop(reviews);
  }
  return `<div class="relative overflow-x-auto"><table class="w-full text-sm text-left text-gray-500"><thead class="text-xs text-gray-700 uppercase bg-yellow-600"><tr class="w-full border-b"><th class="px-6 py-3 text-center" scope="col">Casino</th>
      <th class="px-6 py-3 text-center" scope="col">Bonus</th>
      <th class="px-6 py-3 text-center" scope="col">Features</th>
      <th class="px-6 py-3 text-center" scope="col">Play</th></tr></thead>
    <tbody>${each(reviews, (review, index) => {
    return `<tr${add_attribute("draggable", draggable, 0)} ondragover="return false" class="${["bg-white border-b svelte-ikhx76", hovering === index ? "is-active" : ""].join(" ").trim()}"><th class="content-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><div class="flex flex-wrap justify-center h-full flex-wrap"><img class="h-auto w-full max-w-lg mx-auto" alt="company-logo"${add_attribute("src", review.logo, 0)}>
            <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline"${add_attribute("href", `/${review.brand_id}`, 0)}>Review</a>
          </div></th>
        <td class="px-6 py-4 content-center"><div class="flex flex-wrap justify-center">${validate_component(Rating, "Rating").$$render(
      $$result,
      {
        value: review.info.rating,
        subtitle: review.info.bonus
      },
      {},
      {}
    )}
          </div></td>
        <td class="px-6 py-4 content-center"><div class="flex flex-wrap justify-center">${validate_component(FeaturesList, "FeaturesList").$$render($$result, { features: review.info.features }, {}, {})}
          </div></td>
        <td class="px-6 py-4 content-center"><div class="flex flex-wrap justify-center"><button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Play now
            </button></div>
          <span class="text-with-link svelte-ikhx76"><!-- HTML_TAG_START -->${review.terms_and_conditions}<!-- HTML_TAG_END --></span></td>
      </tr>`;
  })}</tbody></table>
</div>`;
});
export {
  ReviewsList as R
};
