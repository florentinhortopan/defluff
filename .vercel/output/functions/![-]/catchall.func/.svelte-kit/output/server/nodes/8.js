import * as universal from '../entries/pages/products/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/products/+page.ts";
export const imports = ["_app/immutable/nodes/8.ClAM7kYr.js","_app/immutable/chunks/CYEMZujY.js","_app/immutable/chunks/DuXMvn0P.js","_app/immutable/chunks/D6YF6ztN.js","_app/immutable/chunks/Bb-JxKAM.js","_app/immutable/chunks/BFBzIcp5.js"];
export const stylesheets = ["_app/immutable/assets/8.K1-7SQRM.css"];
export const fonts = [];
