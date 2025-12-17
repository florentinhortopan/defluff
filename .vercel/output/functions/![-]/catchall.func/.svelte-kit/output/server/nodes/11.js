

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/terms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.BS22qlwP.js","_app/immutable/chunks/LWrm9RuP.js","_app/immutable/chunks/C2vO6cI4.js"];
export const stylesheets = [];
export const fonts = [];
