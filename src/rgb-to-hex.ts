export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (c: number) => c.toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}


