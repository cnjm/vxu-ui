
export function createNamespace (name: string) {
  const prefixedName = `x-${name}`
  return [
    prefixedName
  ] as const
}
