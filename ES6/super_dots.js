function deposit(...money) {
  console.log(money);
  let balance = 0;
  for (let i = 0; i < money.length; i++) {
    balance += money[i];
  }

  return balance;
}

console.log(deposit(100, 400, 1000));

//finding max in a list

let deposit_money = [100,200,500,1000];

console.log(Math.max(...deposit_money));