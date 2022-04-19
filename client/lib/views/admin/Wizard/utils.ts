export function numberEnumToEntries<V extends Record<string, unknown>>(obj: V) {
  return Object.entries(obj).filter(
    ([key, value]) => typeof value === "number"
  ) as [keyof V, V[keyof V]][];
}
