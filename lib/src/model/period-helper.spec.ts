import { PeriodHelper } from './period-helper';
import { PeriodTypeEnum } from '../constants/period-types.constant';
describe('Given I set period iso id of monthly period type', () => {
  it('should return monthly period type', () => {
    expect(PeriodHelper.deduceTypeFromISO('201002')).toEqual(
      PeriodTypeEnum.MONTHLY
    );
  });
});

describe('Given I set period iso id of quarterly period type', () => {
  it('should return quarterly period type', () => {
    expect(PeriodHelper.deduceTypeFromISO('2010Q2')).toEqual(
      PeriodTypeEnum.QUARTERLY
    );
  });
});

describe('Given I set period iso id of relative year period type', () => {
  it('should return quarterly period type', () => {
    expect(PeriodHelper.deduceTypeFromISO('LAST_YEAR')).toEqual(
      PeriodTypeEnum.RELATIVE_YEAR
    );
  });
});
