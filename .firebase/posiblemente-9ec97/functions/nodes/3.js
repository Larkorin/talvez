

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.5d30d87d.js","_app/immutable/chunks/scheduler.6b255819.js","_app/immutable/chunks/index.22b4eb1a.js","_app/immutable/chunks/store.74fd46fe.js","_app/immutable/chunks/index.92808898.js"];
export const stylesheets = ["_app/immutable/assets/3.16d7782b.css"];
export const fonts = [];
