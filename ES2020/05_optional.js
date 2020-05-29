const bill1 = {
  bank: {
    name: 'My Bank',
    amount: {
      value : 1000,
      currency: 'RUB'
    }
  }
}

const bill2 = {
  bank: {}
}

// OLD
// function getBillValueFrom(bill) {
//   return (bill && bill.bank && bill.bank.amount && bill.bank.amount.value)
//     ? bill.bank.amount.value
//     : undefined;
// }
// NEW
function getBillValueFrom(bill) {
  return bill?.bank?.amount?.value
}

console.log(getBillValueFrom(bill1));
console.log(getBillValueFrom(bill2));