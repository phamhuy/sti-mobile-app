export class Transaction {
  transactionType: TransactionType;
  amount: number;
  processDate: number; // In milliseconds

  constructor(transactionType, amount, processDate) {
    this.transactionType = transactionType;
    this.amount = amount;
    this.processDate = processDate;
  }
}

// export enum TransactionType {
//   DRAFT = "Draft",
//   SETTLEMENT = "Settlement",
//   PERFORMANCE_FEE = "Performance Fee",
//   DISBURSEMENT_FEE = "Disbursement Fee",
//   SETTLEMENT_ADVANCE = "Settlement Advance",
//   ACH_CREDIT_FEE = "ACH CreditFee",
//   REFUND = "Refund",
//   DPG_FEE = "DPG Fee",
//   TRANSFER = "Transfer",
//   UNREGISTERED = "Unregistered"
// }
export enum TransactionType {
Draft,
Settlement,
Performance_Fee,
Disbursement_Fee,
Settlement_Advance,
ACH_Credit_Fee,
Refund,
DPG_Fee,
Transfer,
Unregistered
}