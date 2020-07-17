import { PeriodInterface } from '../interfaces/period.interface';
import { sortBy } from 'lodash';

export function getLastTwoSixMonths(
  sixMonthPeriods: PeriodInterface[],
  currentSixMonth: PeriodInterface
): PeriodInterface[] {
  if (!currentSixMonth) {
    return [];
  }

  return sortBy(sixMonthPeriods, 'id')
    .filter(
      (sixMonthPeriod: PeriodInterface) =>
        sixMonthPeriod.id < currentSixMonth.id
    )
    .slice(-2);
}
