import { PeriodInterface } from '../interfaces/period.interface';
import { sortBy } from 'lodash';

export function getLastSixBiMonthlyPeriods(
  biMonthlyPeriods: PeriodInterface[],
  currentBiMonthPeriod: PeriodInterface
): PeriodInterface[] {
  return sortBy(biMonthlyPeriods, 'id')
    .filter(
      (biMonthPeriod: PeriodInterface) =>
        biMonthPeriod.id < currentBiMonthPeriod.id
    )
    .slice(-6);
}
