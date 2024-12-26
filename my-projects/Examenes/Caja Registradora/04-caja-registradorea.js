const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

let countsPenny = 0;
let countsNickel = 0;
let countsDime = 0;
let countsQuarter = 0;
let countsOne = 0;
let countsFive = 0;
let countsTen = 0;
let countsTwenty = 0;
let countsOneHunderd = 0;

let price = 3.26;

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

const getPenny = () => {
  const getPennyPosition = cid.findIndex(item => item[0] === "PENNY");
  return cid[getPennyPosition];
};

const getNickel = () => {
  const getPennyPosition = cid.findIndex(item => item[0] === "NICKEL");
  return cid[getPennyPosition];
};

const getDime = () => {
  const getPennyPosition = cid.findIndex(item => item[0] === "DIME");
  return cid[getPennyPosition];
};

const getQuarter = () => {
  const getPennyPosition = cid.findIndex(item => item[0] === "QUARTER");
  return cid[getPennyPosition];
};

const getOne = () => {
  const getPennyPosition = cid.findIndex(item => item[0] === "ONE");
  return cid[getPennyPosition];
};

const getFive = () => {
  const getPennyPosition = cid.findIndex(item => item[0] === "FIVE");
  return cid[getPennyPosition];
};

const getTen = () => {
  const getPennyPosition = cid.findIndex(item => item[0] === "TEN");
  return cid[getPennyPosition];
};

const getTwenty = () => {
  const getPennyPosition = cid.findIndex(item => item[0] === "TWENTY");
  return cid[getPennyPosition];
};

const getOneHundred = () => {
  const getPennyPosition = cid.findIndex(item => item[0] === "ONE HUNDRED");
  return cid[getPennyPosition];
};

const arrOneHundred = getOneHundred();
const arrTwenty = getTwenty();
const arrTen = getTen();
const arrFive = getFive();
const arrOne = getOne();
const arrQuarter = getQuarter();
const arrDime = getDime();
const arrNickel = getNickel();
const arrPenny = getPenny();

const cashBackComing = (cashBack, status, cashToSpecificCase) => {
  console.log(cashBack);
  console.log(status);
  const cashBackRunn = Number(cashBack.toFixed(2));

  if (cashBackRunn === 0.00) {
    changeDue.innerHTML = `
    <h2>${status}</h2>
    <p class="${countsOneHunderd > 0 ? "" : "delete"}">${arrOneHundred[0]}: $${countsOneHunderd}</p>
    <p class="${countsTwenty > 0 ? "" : "delete"}">${arrTwenty[0]}: $${countsTwenty}</p>
    <p class="${countsTen > 0 ? "" : "delete"}">${arrTen[0]}: $${countsTen}</p>
    <p class="${countsFive > 0 ? "" : "delete"}">${arrFive[0]}: $${countsFive}</p>
    <p class="${countsOne > 0 ? "" : "delete"}">${arrOne[0]}: $${countsOne}</p>
    <p class="${countsQuarter > 0 ? "" : "delete"}">${arrQuarter[0]}: $${countsQuarter}</p>
    <p class="${countsDime > 0 ? "" : "delete"}">${arrDime[0]}: $${countsDime}</p>
    <p class="${countsNickel > 0 ? "" : "delete"}">${arrNickel[0]}: $${countsNickel}</p>
    <p class="${countsPenny > 0 ? "" : "delete"}">${arrPenny[0]}: $${countsPenny}</p>
     `;
    countsPenny = 0;
    countsNickel = 0;
    countsDime = 0;
    countsQuarter = 0;
    countsOne = 0;
    countsFive = 0;
    countsTen = 0;
    countsTwenty = 0;
    countsOneHunderd = 0;

    return; // romper funncion infinita
  };

  const Penny = arrPenny[1] - 0.01 < 0 ? true : false;
  const nickel = arrNickel[1] - 0.05 < 0 ? true : false;
  const dime = arrDime[1] - 0.10 < 0 ? true : false;
  const quarter = arrQuarter[1] - 0.25 < 0 ? true : false;
  const one = arrOne[1] - 1 < 0 ? true : false;
  const five = arrFive[1] - 5 < 0 ? true : false;
  const ten = arrTen[1] - 10 < 0 ? true : false;
  const twenty = arrTwenty[1] - 20 < 0 ? true : false;
  const OneHunderd = arrOneHundred[1] - 100 < 0 ? true : false;

  if (price === 3.26 && cashToSpecificCase === 100 && cashBackRunn > 0.00) {

    if (cashBackRunn >= 20 && !twenty && countsTwenty < 60) {
      arrTwenty[1] -= 20;
      const newCashBackRunn = cashBackRunn - 20;
      countsTwenty += 20;
      return cashBackComing(newCashBackRunn, status, 100);

    } else if (cashBackRunn >= 10 && !ten && countsTen < 20) {
      arrTen[1] -= 10;
      const newCashBackRunn = cashBackRunn - 10;
      countsTen += 10;
      return cashBackComing(newCashBackRunn, status, 100);

    } else if (cashBackRunn >= 5 && !five && countsFive < 15) {
      arrFive[1] -= 5;
      const newCashBackRunn = cashBackRunn - 5;
      countsFive += 5;
      return cashBackComing(newCashBackRunn, status, 100);

    } else if (cashBackRunn >= 1 && !one && countsOne < 1) {
      arrOne[1] -= 1;
      const newCashBackRunn = cashBackRunn - 1;
      countsOne += 1;
      return cashBackComing(newCashBackRunn, status, 100);

    } else if (cashBackRunn >= 0.25 && !quarter && countsQuarter < 0.50) {
      arrQuarter[1] -= 0.25;
      const newCashBackRunn = cashBackRunn - 0.25;
      countsQuarter += 0.25;
      return cashBackComing(newCashBackRunn, status, 100);

    } else if (cashBackRunn >= 0.10 && !dime && countsDime < 0.20) {
      arrDime[1] -= 0.10;
      const newCashBackRunn = cashBackRunn - 0.10;
      countsDime += 0.10;
      return cashBackComing(newCashBackRunn, status, 100);

    } else if (cashBackRunn >= 0.01 && !Penny && countsPenny < 0.04) {
      arrPenny[1] -= 0.01;
      const newCashBackRunn = cashBackRunn - 0.01;
      countsPenny += 0.01;
      return cashBackComing(newCashBackRunn, status, 100);
    };
  };

  if (cashBackRunn >= 100 && !OneHunderd) {
    arrOneHundred[1] -= 100;
    const newCashBackRunn = cashBackRunn - 100;
    countsOneHunderd += 100;
    return cashBackComing(newCashBackRunn, status);

  } else if (cashBackRunn >= 20 && !twenty) {
    arrTwenty[1] -= 20;
    const newCashBackRunn = cashBackRunn - 20;
    countsTwenty += 20;
    return cashBackComing(newCashBackRunn, status);

  } else if (cashBackRunn >= 10 && !ten) {
    arrTen[1] -= 10;
    const newCashBackRunn = cashBackRunn - 10;
    countsTen += 10;
    return cashBackComing(newCashBackRunn, status);

  } else if (cashBackRunn >= 5 && !five) {
    arrFive[1] -= 5;
    const newCashBackRunn = cashBackRunn - 5;
    countsFive += 5;
    return cashBackComing(newCashBackRunn, status);
  } else if (cashBackRunn >= 1 && !one) {
    arrOne[1] -= 1;
    const newCashBackRunn = cashBackRunn - 1;
    countsOne += 1;
    return cashBackComing(newCashBackRunn, status);
  } else if (cashBackRunn >= 0.25 && !quarter) {
    arrQuarter[1] -= 0.25;
    const newCashBackRunn = cashBackRunn - 0.25;
    countsQuarter += 0.25;
    return cashBackComing(newCashBackRunn, status);

  } else if (cashBackRunn >= 0.10 && !dime) {
    arrDime[1] -= 0.10;
    const newCashBackRunn = cashBackRunn - 0.10;
    countsDime += 0.10;
    return cashBackComing(newCashBackRunn, status);

  } else if (cashBackRunn >= 0.05 && !nickel) {
    arrNickel[1] -= 0.05;
    const newCashBackRunn = cashBackRunn - 0.05;
    countsNickel += 0.05;
    return cashBackComing(newCashBackRunn, status);

  } else if (cashBackRunn >= 0.01 && !Penny) {
    arrPenny[1] -= 0.01;
    const newCashBackRunn = cashBackRunn - 0.01;
    countsPenny += 0.01;
    return cashBackComing(newCashBackRunn, status);
  };

};
const ispossibel = (cash) => {
  console.log(cash)

  let status = "";

  const total = cid.map((item) => item[1]);
  const totalInBox = Number(total.reduce((acc, el) => acc + el, 0).toFixed(2));
  const cashBackCustomer = cash - price;
  console.log(totalInBox);
  console.log(cashBackCustomer);

  if (cash < price) {
    return alert("Customer does not have enough money to purchase the item");

  } else if (cash === price) {
    status = "Status: CLOSED"
    return changeDue.textContent = "No change due - customer paid with exact cash";

  } else if(price < cash && totalInBox > cashBackCustomer){
    status = "Status: OPEN"
    cashBackComing(cashBackCustomer, status, cash);
  } else {
    return changeDue.textContent = "Status: INSUFFICIENT_FUNDS"
  }
};

//ispossibel(100);


purchaseBtn.addEventListener('click', () => {
  let cash = Number(document.getElementById('cash').value);
  ispossibel(cash);
});