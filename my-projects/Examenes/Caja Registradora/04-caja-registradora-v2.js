const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');
const statusText = document.getElementById('status-text');


let cid = [
  ['PENNY', 1.01], // 0.01
  ['NICKEL', 2.05], // 0.05
  ['DIME', 3.1], // 0.10
  ['QUARTER', 4.25], // 0.25
  ['ONE', 90], // 1
  ['FIVE', 55], // 5
  ['TEN', 20], // 10
  ['TWENTY', 60], // 20
  ['ONE HUNDRED', 100] // 100
];

let price = 3.26;
let pay = 100;
let back = pay - price;

const hasInBoxChange = (customerPay, changeDue, arrCid) => {

  const denominationValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  };

  let change = changeDue;
  let isChangePossible = true;
  let denominationsToReturn = []; 

  for (let i = arrCid.length - 1; i >= 0; i--) {
    let moneyName = arrCid[i][0];
    let totalMoney = arrCid[i][1];

    let moneyValue = denominationValues[moneyName];
    let howMuchNeed = Math.floor(change / moneyValue);
    let moneyAvailable = Math.floor(totalMoney / moneyValue);

    let unitsToUse = Math.min(howMuchNeed, moneyAvailable);


    denominationsToReturn.push([moneyName, unitsToUse, moneyValue]);
    change -= unitsToUse * moneyValue;
    change = Math.round(change * 100) / 100; 
    console.log(denominationsToReturn)
  }

  
  if (change > 0) {
    isChangePossible = false;
  }

  
  return isChangePossible ? isPossible(isChangePossible, denominationsToReturn, customerPay) : isPossible(isChangePossible, [], customerPay);
};

const cashBackComing = (arrCasBack) => {
  
  arrCasBack.forEach((element) => {
    const itemCashBack = element[1] * element[2];
    const getPosition = cid.findIndex(item => item[0] === element[0])
    cid[getPosition][1] -= itemCashBack;


    if (itemCashBack >= 0.01) {
      const p = document.createElement('p');
      p.textContent = `${element[0]}: $${itemCashBack}`
      changeDue.appendChild(p);
    };
  });
  return;
};

const isPossible = (isChangePossible, arrCashBack, customerPay) => {

  let status = "";

  if (customerPay < price) {
    return alert("Customer does not have enough money to purchase the item");

  } else if (customerPay === price) {
    status = "Status: CLOSED"
    return changeDue.textContent = "No change due - customer paid with exact cash";

  } else if (isChangePossible) {
    status = "Status: OPEN"
    cashBackComing(arrCashBack);
    statusText.textContent = status;
    return;
  } else {
    return changeDue.textContent = "Status: INSUFFICIENT_FUNDS"
  }
};

console.log(back);

purchaseBtn.addEventListener('click', () => {
  let cash = Number(document.getElementById('cash').value);
  pay = cash;

  Array.from(changeDue.children).forEach(child => {
    if (child.tagName !== 'H2') {
      container.removeChild(child); 
    }
  });

  hasInBoxChange(pay, back, cid)
});