import { PeriodInterface } from '../interfaces/period.interface';
import { sortBy } from 'lodash';
export function getLastFourQuarters(
  quarterPeriods: PeriodInterface[],
  currentQuarter: PeriodInterface
): PeriodInterface[] {
  return sortBy(quarterPeriods, 'id')
    .filter(
      (quarterPeriod: PeriodInterface) => quarterPeriod.id < currentQuarter.id
    )
    .slice(-4);
}
