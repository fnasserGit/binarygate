/**
 * Alternative: draw SVG to canvas and return the canvas.
 * Useful when you need pixel manipulation or a specific size.
 */
export function svgToCanvas(
  svgString: string,
  width: number,
  height: number
): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not get canvas 2d context"));
        return;
      }
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load SVG"));
    };
    img.src = url;
  });
}

type SvgTextureResult = {
  canvas: HTMLCanvasElement;
  texture?: {
    needsUpdate: boolean;
    encoding?: unknown;
    colorSpace?: unknown;
  };
};

/**
 * Converts SVG markup into a canvas (and optional Three.js CanvasTexture if available on window.THREE).
 */
export async function svgToTexture(
  svgString: string,
  width: number,
  height: number
): Promise<SvgTextureResult> {
  const canvas = await svgToCanvas(svgString, width, height);
  const three = (globalThis as { THREE?: any }).THREE;
  if (three?.CanvasTexture) {
    const texture = new three.CanvasTexture(canvas);
    if ("colorSpace" in texture && three.SRGBColorSpace) {
      texture.colorSpace = three.SRGBColorSpace;
    } else if ("encoding" in texture && three.sRGBEncoding) {
      texture.encoding = three.sRGBEncoding;
    }
    if (three.LinearFilter) {
      texture.minFilter = three.LinearFilter;
      texture.magFilter = three.LinearFilter;
    }
    texture.needsUpdate = true;
    return { canvas, texture };
  }
  return { canvas };
}
