import { getLastFourQuarters } from './get-last-four-quarters.helper';
import { PeriodInterface } from '../interfaces/period.interface';
describe('Given I supply current quarter and two years quarter periods including current', () => {
  const quarterPeriods: PeriodInterface[] = [
    {
      id: '2019Q1',
      type: 'Quarterly',
      name: 'January 2019 - March 2019',
      lastPeriod: { id: '2018Q4', name: 'October 2018 - December 2018' },
    },
    {
      id: '2019Q2',
      type: 'Quarterly',
      name: 'April 2019 - June 2019',
      lastPeriod: { id: '2019Q1', name: 'January 2019 - March 2019' },
    },
    {
      id: '2019Q3',
      type: 'Quarterly',
      name: 'July 2019 - September 2019',
      lastPeriod: { id: '2019Q2', name: 'April 2019 - June 2019' },
    },
    {
      id: '2019Q4',
      type: 'Quarterly',
      name: 'October 2019 - December 2019',
      lastPeriod: { id: '2019Q3', name: 'July 2019 - September 2019' },
    },
    {
      id: '2020Q1',
      type: 'Quarterly',
      name: 'January 2020 - March 2020',
      lastPeriod: { id: '2019Q4', name: 'October 2019 - December 2019' },
    },
    {
      id: '2020Q2',
      type: 'Quarterly',
      name: 'April 2020 - June 2020',
      lastPeriod: { id: '2020Q1', name: 'January 2020 - March 2020' },
    },
    {
      id: '2020Q3',
      type: 'Quarterly',
      name: 'July 2020 - September 2020',
      lastPeriod: { id: '2020Q2', name: 'April 2020 - June 2020' },
    },
    {
      id: '2020Q4',
      type: 'Quarterly',
      name: 'October 2020 - December 2020',
      lastPeriod: { id: '2020Q3', name: 'July 2020 - September 2020' },
    },
  ];

  const currentQuarter = {
    id: '2020Q3',
    type: 'Quarterly',
    name: 'July 2020 - September 2020',
    lastPeriod: { id: '2020Q2', name: 'April 2020 - June 2020' },
  };
  const lastFourQuarters = getLastFourQuarters(quarterPeriods, currentQuarter);

  it('should return four last quarter periods previous to the current selected quarter', () => {
    expect(lastFourQuarters.length).toEqual(4);
    expect(lastFourQuarters.indexOf(currentQuarter)).toEqual(-1);
  });
});
