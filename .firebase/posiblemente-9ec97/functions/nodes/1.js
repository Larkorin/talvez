

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7ca9093d.js","_app/immutable/chunks/scheduler.6b255819.js","_app/immutable/chunks/index.22b4eb1a.js","_app/immutable/chunks/singletons.1550d660.js","_app/immutable/chunks/index.92808898.js"];
export const stylesheets = [];
export const fonts = [];
