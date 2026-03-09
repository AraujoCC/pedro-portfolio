const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatDate(date: Date): string {
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatDateRange(start: Date, end?: Date): string {
  const s = formatDate(start);
  const e = end ? formatDate(end) : "Present";
  return `${s} — ${e}`;
}
