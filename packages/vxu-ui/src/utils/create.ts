
export function createNamespace (name: string) {
  const prefixedName = `vxu-${name}`
  return [
    prefixedName
  ] as const
}
