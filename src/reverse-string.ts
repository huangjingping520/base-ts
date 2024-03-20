export function reverseString(str: string, separator: string): string {
  return str.split(separator).reverse().join(separator)
}

export function isReverse(str1: string, str2: string) {
  const normalize = (str: string) => str.toLowerCase().normalize('NFD').split('').reverse().join('')
  return normalize(str1) === str2
}
