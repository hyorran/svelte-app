import { c as create_ssr_component, e as escape } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Position: ${escape(data.props.posts.position)}</h1>
<div>Brand id: ${escape(data.props.posts.brand_id)}</div>`;
});
export {
  Page as default
};
