

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/privacy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.D8XBfTTr.js","_app/immutable/chunks/CYEMZujY.js","_app/immutable/chunks/47U8PecE.js"];
export const stylesheets = [];
export const fonts = [];
