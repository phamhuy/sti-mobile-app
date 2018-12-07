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
  transactionType: TransactionType;
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
  DRAFT = 'Draft',
  SETTLEMENT = 'Settlement',
  PERFORMANCE_FEE = 'Performance Fee',
  DISBURSEMENT_FEE = 'Disbursement Fee',
  SETTLEMENT_ADVANCE = 'Settlement Advance',
  ACH_CREDIT_FEE = 'ACH Credit Fee',
  REFUND = 'Refund',
  DPG_FEE = 'DPG Fee',
  TRANSFER = 'Transfer',
  UNREGISTERED = 'Unregistered'
}

export enum TransactionStatus {

}

export class TransactionList {
  hasMoreResults: boolean;
  totalResults: number;
  transactionList: Transaction[];
}