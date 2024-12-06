/* eslint-disable @typescript-eslint/no-unused-expressions */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function processQuery(obj: any): string {
  let str = "";
  if (obj === null || obj === undefined) {
    return str;
  }
  str = "?";
  const l = Object.keys(obj).length - 1;
  Object.keys(obj).forEach((key, i) => {
    str += `${key}=${
      obj[key] === undefined || obj[key] === null ? "" : obj[key]
    }`;
    l !== i && (str += "&");
  });
  return str;
}
