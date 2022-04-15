export function numberEnumToEntries<V extends {}>(obj: V) {
  return Object.entries(obj).filter(
    ([key, value]) => typeof value === "number"
  ) as [keyof V, V[keyof V]][];
}
