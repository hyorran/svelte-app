export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["data.json","favicon.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.f786defd.js","imports":["_app/immutable/entry/start.f786defd.js","_app/immutable/chunks/index.ad984dec.js","_app/immutable/chunks/singletons.9289b777.js","_app/immutable/chunks/index.784312b6.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.18ff70b9.js","imports":["_app/immutable/entry/app.18ff70b9.js","_app/immutable/chunks/index.ad984dec.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
