// Tiny dark SVG used as the blur placeholder for all artwork images while they load.
// btoa is available in Node.js 18+ (required by Next.js 16) and all modern browsers.
const _svg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8">' +
  '<rect fill="#0a0a0a" width="10" height="8"/>' +
  '</svg>'

export const BLUR_DATA_URL = `data:image/svg+xml;base64,${btoa(_svg)}`
