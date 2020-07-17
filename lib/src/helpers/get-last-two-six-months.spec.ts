import { getLastTwoSixMonths } from './get-last-two-six-months.helper';
import { PeriodInterface } from '../interfaces/period.interface';
describe('Given I supply current six month and two years six month periods including current', () => {
  const sixMonthPeriods: PeriodInterface[] = [
    {
      id: '2019S1',
      type: 'SixMonthly',
      name: 'January - June 2019',

      lastPeriod: { id: '2018S2', name: 'July - December 2018' },
    },
    {
      id: '2019S2',
      type: 'SixMonthly',
      name: 'July - December 2019',
      lastPeriod: { id: '2019S1', name: 'January - June 2019' },
    },
    {
      id: '2020S1',
      type: 'SixMonthly',
      name: 'January - June 2020',
      lastPeriod: { id: '2019S2', name: 'July - December 2019' },
    },
    {
      id: '2020S2',
      type: 'SixMonthly',
      name: 'July - December 2020',
      lastPeriod: { id: '2020S1', name: 'January - June 2020' },
    },
  ];
  const currentSixMonthPeriod: PeriodInterface = {
    id: '2020S2',
    type: 'SixMonthly',
    name: 'July - December 2020',
    lastPeriod: { id: '2020S1', name: 'January - June 2020' },
  };
  const lastTwoSixMonths = getLastTwoSixMonths(
    sixMonthPeriods,
    currentSixMonthPeriod
  );
  it('should return two last six month periods previous to the current selected six month', () => {
    expect(lastTwoSixMonths.length).toEqual(2);
    expect(lastTwoSixMonths.indexOf(currentSixMonthPeriod)).toEqual(-1);
  });
});
