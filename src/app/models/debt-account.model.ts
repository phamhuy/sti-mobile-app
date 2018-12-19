export class DebtAccountSummary {
  debtAccountPk: number;
  creditorName: string;
  currentBalance: number;
}

export class DebtAccountDetails {
  debtAccountPk: number;
  creditorName: string;
  accountNumber: string;
  stipulation: DebtAccountStipulationStatus;
  servicer: any; // Creditor
  originalDebtAmount: number;
  currentBalance: number;
  numberOfPaymentString;
  scheduledCompletionDate: number;
  daysDelinquent: number;
  settlementDate: number;
  percentSettled: number;
  delinquencyStatus: DelinquencyStatus;
  debtAccountStatus: DebtAccountStatus;
  private static debtAccountPkCount = 0;

  constructor(creditorName, originalDebtAmount, daysDelinquent, debtAccountStatus, currentBalance, settlementDate, percentSettled) {
    this.creditorName = creditorName;
    this.originalDebtAmount = originalDebtAmount;
    this.daysDelinquent = daysDelinquent;
    this.debtAccountStatus = debtAccountStatus;
    this.currentBalance = currentBalance;
    this.settlementDate = settlementDate;
    this.percentSettled = percentSettled;
    this.debtAccountPk = ++DebtAccountDetails.debtAccountPkCount;
  }
}

export enum DebtAccountStipulationStatus {
  NONE = 'None',
  PENDING = 'Pending',
  CLEARED = 'Cleared'
}

export enum DelinquencyStatus {
  CHARGED_OFF = 'Charged Off',
  COLLECTIONS = 'Collections'
}

export enum DebtAccountStatus {
  ENROLLED = 'Enrolled',
  OFFER_REJECTED_BY_CLIENT = 'Offer Rejected By Client',
  SETTLEMENT_AUTHORIZATION_NEEDED = 'Settlement Authorization Needed',
  OFFER_PENDING = 'Offer Pending',
  SUBMITTED = 'Submitted',
  OFFER_REJECTED_BY_QC = 'Offer Rejected By QC',
  ACTIVE = 'Active',
  VOIDED = 'Voided',
  COMPLETED = 'Completed',
  UNENROLLED = 'Unenrolled'
}