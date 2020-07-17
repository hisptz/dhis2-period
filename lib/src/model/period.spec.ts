import { Period } from './period';
import { PeriodSortOrderEnum } from '../constants/period.constant';
import { PeriodInterface } from '../interfaces/period.interface';
import { PeriodTypeEnum } from '../constants/period-types.constant';

describe('Given and instance of period class', () => {
  let period = new Period();
  it('should be instantiated', () => {
    expect(period).toBeInstanceOf(Period);
  });
});

describe('Given I set period type', () => {
  let period = new Period();
  period.setType('Monthly');

  it('should return set period type', () => {
    expect(period.type()).toEqual('Monthly');
  });
});

describe('Given I set monthly period type for ethiopian calendar', () => {
  let period = new Period();
  period.setCalendar('ethiopian').setType('Monthly').get();

  const periodResult = period.list();

  it('should return monthly period list for the current year', () => {
    expect(periodResult.length <= 12).toEqual(true);
  });
});

describe('Given I set monthly period type for gregorian calendar', () => {
  let period = new Period();
  period.setCalendar('gregorian').setType('Monthly').get();

  const periodResult = period.list();

  it('should return monthly period list for the current year', () => {
    expect(periodResult.length <= 12).toEqual(true);
  });
});

describe('Given I set monthly period type for gregorian calendar and previous year', () => {
  let period = new Period();
  period.setCalendar('gregorian').setType('Monthly').get();
  const previousYear = period.currentYear() - 1;

  period.setYear(previousYear).get();

  const periodResult = period.list();

  it('should return monthly period list for 12 months', () => {
    expect(periodResult.length === 12).toEqual(true);
  });
});

describe('Given I set monthly period type for ethiopian calendar and previous year', () => {
  const ethiopianPeriod = new Period();
  ethiopianPeriod.setCalendar('ethiopian').setType('Monthly').get();

  const previousYear = ethiopianPeriod.currentYear() - 1;

  ethiopianPeriod.setYear(previousYear).get();

  const periodResult = ethiopianPeriod.list();

  it('should return monthly period list for 12 months', () => {
    expect(periodResult.length === 12).toEqual(true);
  });
});

describe('Given I set quarterly period type for gregorian calendar', () => {
  let period = new Period();
  period
    .setType('Quarterly')
    .setCalendar('gregorian')
    .setPreferences({
      allowFuturePeriods: false,
      childrenPeriodSortOrder: PeriodSortOrderEnum.ASCENDING,
    })
    .get();
  const periodResult = period.list();

  it('should return quarterly period list for the current year', () => {
    expect(periodResult.length > 0).toEqual(true);
  });
});

describe('Given I set relative quarter period type for gregorian calendar', () => {
  let period = new Period();
  period
    .setCalendar('gregorian')
    .setType(PeriodTypeEnum.RELATIVE_QUARTER)
    .get();

  const periodResult = period.list();

  it('should return relative quarter period list for the current year', () => {
    expect(periodResult.length > 0).toEqual(true);
  });
});

describe('Given I set certain valid period id', () => {
  let period = new Period();
  const periodObject: PeriodInterface = period.getById('201001');
  it('should return period details for the supplied id', () => {
    // expect(periodObject).not.toBeNull();
  });
});
