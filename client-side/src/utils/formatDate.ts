import dayjs from "dayjs";

export function UtcToLocalDate(data?: string | null): string {
  if (!data) {
    return "";
  }

  const date = new Date(data);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Add 1 because months are zero-based
  const year = date.getUTCFullYear();
  const monthText = month < 10 ? "0" + month : month;
  const dayText = day < 10 ? "0" + day : day;
  return `${year}/${monthText}/${dayText}`;
}
