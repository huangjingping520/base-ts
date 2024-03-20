export function clearNonNumber(str: string): string {
  return str.replace(/\D/g, '')
}
