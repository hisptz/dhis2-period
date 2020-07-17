import { PeriodInterface } from '../interfaces/period.interface';
import { getLastSixBiMonthlyPeriods } from './get-last-six-bi-months.helper';
describe('Given I supply current bi month and two years bi month periods including current', () => {
  const biMonthPeriods: PeriodInterface[] = [
    {
      id: '201901B',
      type: 'BiMonthly',
      name: 'January - February 2019',
      daily: [],
      weekly: [],
      monthly: [[Object], [Object]],
      lastPeriod: { id: '201806B', name: 'November - December 2018' },
    },
    {
      id: '201902B',
      type: 'BiMonthly',
      name: 'March - April 2019',
      daily: [],
      weekly: [],
      monthly: [[Object], [Object]],
      lastPeriod: { id: '201901B', name: 'January - February 2019' },
    },
    {
      id: '201903B',
      type: 'BiMonthly',
      name: 'May - June 2019',
      daily: [],
      weekly: [],
      monthly: [[Object], [Object]],
      lastPeriod: { id: '201902B', name: 'March - April 2019' },
    },
    {
      id: '201904B',
      type: 'BiMonthly',
      name: 'July - August 2019',
      daily: [],
      weekly: [],
      monthly: [[Object], [Object]],
      lastPeriod: { id: '201903B', name: 'May - June 2019' },
    },
    {
      id: '201905B',
      type: 'BiMonthly',
      name: 'September - October 2019',
      daily: [],
      weekly: [],
      monthly: [[Object], [Object]],
      lastPeriod: { id: '201904B', name: 'July - August 2019' },
    },
    {
      id: '201906B',
      type: 'BiMonthly',
      name: 'November - December 2019',
      daily: [],
      weekly: [],
      monthly: [[Object], [Object]],
      lastPeriod: { id: '201905B', name: 'September - October 2019' },
    },
    {
      id: '202001B',
      type: 'BiMonthly',
      name: 'January - February 2020',
      daily: [],
      weekly: [],
      monthly: [[Object], [Object]],
      lastPeriod: { id: '201906B', name: 'November - December 2019' },
    },
    {
      id: '202002B',
      type: 'BiMonthly',
      name: 'March - April 2020',
      daily: [],
      weekly: [],
      monthly: [[Object], [Object]],
      lastPeriod: { id: '202001B', name: 'January - February 2020' },
    },
    {
      id: '202003B',
      type: 'BiMonthly',
      name: 'May - June 2020',
      daily: [],
      weekly: [],
      monthly: [[Object], [Object]],
      lastPeriod: { id: '202002B', name: 'March - April 2020' },
    },
    {
      id: '202004B',
      type: 'BiMonthly',
      name: 'July - August 2020',
      daily: [],
      weekly: [],
      monthly: [[Object], [Object]],
      lastPeriod: { id: '202003B', name: 'May - June 2020' },
    },
    {
      id: '202005B',
      type: 'BiMonthly',
      name: 'September - October 2020',
      daily: [],
      weekly: [],
      monthly: [[Object], [Object]],
      lastPeriod: { id: '202004B', name: 'July - August 2020' },
    },
    {
      id: '202006B',
      type: 'BiMonthly',
      name: 'November - December 2020',
      daily: [],
      weekly: [],
      monthly: [[Object], [Object]],
      lastPeriod: { id: '202005B', name: 'September - October 2020' },
    },
  ];
  const currentBiMonthPeriod: PeriodInterface = {
    id: '202004B',
    type: 'BiMonthly',
    name: 'July - August 2020',
    daily: [],
    weekly: [],
    monthly: [[Object], [Object]],
    lastPeriod: { id: '202003B', name: 'May - June 2020' },
  };

  const lastSixBiMonths = getLastSixBiMonthlyPeriods(
    biMonthPeriods,
    currentBiMonthPeriod
  );
  it('should return six last bi month periods previous to the current selected bi month', () => {
    expect(lastSixBiMonths.length).toEqual(6);
    expect(lastSixBiMonths.indexOf(currentBiMonthPeriod)).toEqual(-1);
  });
});
