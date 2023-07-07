

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3d91b136.js","_app/immutable/chunks/scheduler.6b255819.js","_app/immutable/chunks/index.22b4eb1a.js","_app/immutable/chunks/store.74fd46fe.js","_app/immutable/chunks/index.92808898.js"];
export const stylesheets = ["_app/immutable/assets/2.de74b647.css"];
export const fonts = [];
