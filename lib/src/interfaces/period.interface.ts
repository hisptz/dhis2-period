export interface PeriodInterface {
  id: string;
  iso?: PeriodInterface[] | PeriodInterface | string;
  name: string;
  type?: string;
  lastPeriod?: PeriodInterface;
  daily?: any[];
  weekly?: any[];
  monthly?: any[];
  quarterly?: any[];
}
