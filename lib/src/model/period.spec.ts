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
      allowFuturePeriods: true,
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

describe('Given I set relative six month period type for gregorian calendar', () => {
  let period = new Period();
  period
    .setCalendar('gregorian')
    .setType(PeriodTypeEnum.RELATIVE_SIX_MONTH)
    .get();

  const periodResult = period.list();

  it('should return relative six month period list for the current year', () => {
    expect(periodResult.length > 0).toEqual(true);
  });
});

describe('Given I set relative bi month period type for gregorian calendar', () => {
  let period = new Period();
  period
    .setCalendar('gregorian')
    .setType(PeriodTypeEnum.RELATIVE_BI_MONTH)
    .get();

  const periodResult = period.list();

  it('should return relative bi month period list for the current year', () => {
    expect(periodResult.length > 0).toEqual(true);
  });
});

describe('Given I set relative month period type for gregorian calendar', () => {
  let period = new Period();
  period.setCalendar('gregorian').setType(PeriodTypeEnum.RELATIVE_MONTH).get();

  const periodResult = period.list();

  it('should return relative month period list for the current year', () => {
    expect(periodResult.length > 0).toEqual(true);
  });
});

describe('Given I set relative year period type for gregorian calendar', () => {
  let period = new Period();
  period.setCalendar('gregorian').setType(PeriodTypeEnum.RELATIVE_YEAR).get();

  const periodResult = period.list();

  it('should return relative year period list', () => {
    expect(periodResult.length > 0).toEqual(true);
  });
});

describe('Given I set a monthly valid period id', () => {
  let period = new Period();
  const periodObject: PeriodInterface = period.getById('201001');

  it('should return month period details for the supplied id', () => {
    expect(periodObject.id).toEqual('201001');
  });
});

describe('Given I set a relative monthly valid period id', () => {
  let period = new Period();
  const periodObject: PeriodInterface = period.getById('LAST_MONTH');

  it('should return relative month period details for the supplied id', () => {
    expect(periodObject.id).toEqual('LAST_MONTH');
  });

  it('should return iso formatted for supplied relative monthly id', () => {
    expect(periodObject.iso).toBeDefined();
  });
});

describe('Given I set a relative ten years period', () => {
  let period = new Period();
  const periodObject: PeriodInterface = period.getById('LAST_10_YEARS');

  it('should return ten iso formated periods', () => {
    expect(periodObject.iso.length).toEqual(10);
  });
});
