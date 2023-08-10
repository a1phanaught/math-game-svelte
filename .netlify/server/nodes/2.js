

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8112cb50.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.06801730.js"];
export const stylesheets = ["_app/immutable/assets/2.1ce66eb8.css"];
export const fonts = [];
