export function merge(...objects: object[]): object {
  const validObjects = objects.filter((obj) => obj != null && typeof obj === "object");
  if (validObjects.length === 0) return {};
  if (validObjects.length === 1) return validObjects[0];

  const result: Record<string, any> = {};

  for (const obj of validObjects) {
    const keys = Object.keys(obj);
    for (const key of keys) {
      const currentValue = result[key];
      const newValue = (obj as Record<string, any>)[key];

      if (
        currentValue &&
        newValue &&
        typeof currentValue === "object" &&
        typeof newValue === "object" &&
        !Array.isArray(currentValue) &&
        !Array.isArray(newValue)
      ) {
        result[key] = merge(currentValue, newValue);
      } else {
        result[key] = Array.isArray(newValue)
          ? [...newValue] // Create a new array to avoid mutating the source
          : newValue;
      }
    }
  }

  return result;
}
