

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/terms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.B45OzBVT.js","_app/immutable/chunks/CYEMZujY.js","_app/immutable/chunks/47U8PecE.js"];
export const stylesheets = [];
export const fonts = [];
