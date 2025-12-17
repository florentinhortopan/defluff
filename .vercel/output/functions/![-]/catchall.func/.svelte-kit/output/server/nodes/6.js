

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/privacy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DbvH1bwr.js","_app/immutable/chunks/CYEMZujY.js","_app/immutable/chunks/DuXMvn0P.js"];
export const stylesheets = [];
export const fonts = [];
