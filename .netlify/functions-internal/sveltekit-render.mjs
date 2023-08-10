import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/github.png","img/svelte.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ed0b5e3b.js","app":"_app/immutable/entry/app.a92c6c63.js","imports":["_app/immutable/entry/start.ed0b5e3b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.66b151bc.js","_app/immutable/entry/app.a92c6c63.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.06801730.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
