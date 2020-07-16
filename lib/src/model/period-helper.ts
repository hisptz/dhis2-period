import { parse } from 'yargs';

export class PeriodHelper {
  static deduceTypeFromISO(iso: string): string {
    let periodType;

    const numberLikePeriod = parseInt(iso, 10);
    if (!isNaN(numberLikePeriod)) {
      if (iso.length === 4) {
        periodType = 'Yearly';
      } else if (iso.indexOf('B') !== -1) {
        periodType = 'BiMonthly';
      } else if (iso.indexOf('Q') !== -1) {
        periodType = 'Quarterly';
      } else if (iso.indexOf('AprilS') !== -1) {
        periodType = 'SixMonthlyApril';
      } else if (iso.indexOf('April') !== -1) {
        periodType = 'FinancialApril';
      } else if (iso.indexOf('S') !== -1) {
        periodType = 'SixMonthly';
      } else if (iso.indexOf('July') !== -1) {
        periodType = 'FinancialJuly';
      } else if (iso.indexOf('Oct') !== -1) {
        periodType = 'FinancialOctober';
      } else if (!isNaN(parseInt(iso.slice(5), 10))) {
        periodType = 'Monthly';
      }
    } else {
      if (iso.indexOf('QUARTER') !== -1) {
        periodType = 'RelativeQuarter';
      } else if (iso.indexOf('WEEK') !== -1) {
        periodType = 'RelativeWeek';
      } else if (iso.indexOf('MONTH') !== -1) {
        if (iso.indexOf('BIMONTH') !== -1) {
          periodType = 'RelativeBiMonth';
        } else if (iso.indexOf('SIX_MONTH') !== -1) {
          periodType = 'RelativeSixMonth';
        } else {
          periodType = 'RelativeMonth';
        }
      } else if (iso.indexOf('YEAR') !== -1) {
        if (iso.indexOf('FINANCIAL_YEAR') !== -1) {
          periodType = 'RelativeFinancialYear';
        } else {
          periodType = 'RelativeYear';
        }
      }
    }

    return periodType;
  }
}
