

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e8798201.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.06801730.js"];
export const stylesheets = ["_app/immutable/assets/2.74177b75.css"];
export const fonts = [];
