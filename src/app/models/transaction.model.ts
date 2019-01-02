export class Transaction {
  active: boolean;
  completed: boolean;
  discrepancy: boolean;
  createDate: number; // In milliseconds
  processDate: number; // In milliseconds
  clearedDate: number; // In milliseconds
  returnDate: number; // In milliseconds
  payeePk: number;
  creditorPk: number;
  amount: number;
  transactionType: TransactionType | string;
  discrepancyMessage: string;
  transactionId: number;
  transactionPk: number;
  runningBalance: number;
  memo: string;
  status: TransactionStatus;
  processed: boolean;
  isACHClientDebit: boolean;
  editable: boolean;
  createdFromDpg: boolean;
  payee: string;
  cancelable: boolean;
  creditorReference: string;

  constructor(transactionType, amount, processDate) {
    this.transactionType = transactionType;
    this.amount = amount;
    this.processDate = processDate;
  }
}

export enum TransactionType {
  ALL,
  DRAFT,
  SETTLEMENT,
  PERFORMANCE_FEE,
  DISBURSEMENT_FEE,
  SETTLEMENT_ADVANCE,
  ACH_CREDIT_FEE,
  REFUND,
  DPG_FEE,
  TRANSFER,
  UNREGISTERED
}

export enum TransactionStatus {

}

export class TransactionList {
  hasMoreResults: boolean;
  totalResults: number;
  transactionList: Transaction[];
}