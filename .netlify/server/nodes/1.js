

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c68587d5.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.06801730.js","_app/immutable/chunks/singletons.6132b416.js"];
export const stylesheets = [];
export const fonts = [];
