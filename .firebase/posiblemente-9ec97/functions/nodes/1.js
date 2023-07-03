

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f4ad9b65.js","_app/immutable/chunks/scheduler.4b94184d.js","_app/immutable/chunks/index.53cef206.js","_app/immutable/chunks/stores.b9cfb9c5.js","_app/immutable/chunks/singletons.5754b764.js","_app/immutable/chunks/index.5ebb6b47.js"];
export const stylesheets = [];
export const fonts = [];
