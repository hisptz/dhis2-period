export function getPeriodYearFromId(id: string): number {
  const numberLikePeriod = parseInt(id, 10);
  return !isNaN(numberLikePeriod) ? parseInt(id.slice(0, 4), 10) : undefined;
}
