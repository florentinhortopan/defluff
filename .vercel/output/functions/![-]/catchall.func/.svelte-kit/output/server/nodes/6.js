

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/privacy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.CUq7qAcD.js","_app/immutable/chunks/LWrm9RuP.js","_app/immutable/chunks/C2vO6cI4.js"];
export const stylesheets = [];
export const fonts = [];
