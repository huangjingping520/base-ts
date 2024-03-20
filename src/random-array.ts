export function randomSortArray(arr: any[]) {
  return arr.sort(() => 0.5 - Math.random())
}

export function randomSelectFromArray(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}
