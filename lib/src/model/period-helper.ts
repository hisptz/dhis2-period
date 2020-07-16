import { PeriodTypeEnum } from '../constants/period-types.constant';

export class PeriodHelper {
  static deduceTypeFromISO(iso: string): string {
    let periodType;

    const numberLikePeriod = parseInt(iso, 10);
    if (!isNaN(numberLikePeriod)) {
      if (iso.length === 4) {
        periodType = PeriodTypeEnum.YEARLY;
      } else if (iso.indexOf('B') !== -1) {
        periodType = PeriodTypeEnum.BI_MONTHLY;
      } else if (iso.indexOf('Q') !== -1) {
        periodType = PeriodTypeEnum.QUARTERLY;
      } else if (iso.indexOf('AprilS') !== -1) {
        periodType = PeriodTypeEnum.SIX_MONTHLY_APRIL;
      } else if (iso.indexOf('April') !== -1) {
        periodType = PeriodTypeEnum.FINANCIAL_APRIL;
      } else if (iso.indexOf('S') !== -1) {
        periodType = PeriodTypeEnum.SIX_MONTHLY;
      } else if (iso.indexOf('July') !== -1) {
        periodType = PeriodTypeEnum.FINANCIAL_JULY;
      } else if (iso.indexOf('Oct') !== -1) {
        periodType = PeriodTypeEnum.FINANCIAL_OCTOBER;
      } else if (iso.indexOf('Nov') !== -1) {
        periodType = PeriodTypeEnum.FINANCIAL_NOVEMBER;
      } else if (!isNaN(parseInt(iso.slice(5), 10))) {
        periodType = PeriodTypeEnum.MONTHLY;
      }
    } else {
      if (iso.indexOf('QUARTER') !== -1) {
        periodType = PeriodTypeEnum.RELATIVE_QUARTER;
      } else if (iso.indexOf('WEEK') !== -1) {
        periodType = PeriodTypeEnum.RELATIVE_WEEK;
      } else if (iso.indexOf('MONTH') !== -1) {
        if (iso.indexOf('BIMONTH') !== -1) {
          periodType = PeriodTypeEnum.RELATIVE_BI_MONTH;
        } else if (iso.indexOf('SIX_MONTH') !== -1) {
          periodType = PeriodTypeEnum.RELATIVE_SIX_MONTH;
        } else {
          periodType = PeriodTypeEnum.RELATIVE_MONTH;
        }
      } else if (iso.indexOf('YEAR') !== -1) {
        if (iso.indexOf('FINANCIAL_YEAR') !== -1) {
          periodType = PeriodTypeEnum.RELATIVE_FINANCIAL_YEAR;
        } else {
          periodType = PeriodTypeEnum.RELATIVE_YEAR;
        }
      }
    }

    return periodType;
  }
}
