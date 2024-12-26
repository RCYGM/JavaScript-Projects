
let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

const formatResults = (status, change) => {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  change.forEach(
    money => (displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`)
  );
  return;
};

const checkCashRegister = () => {
  if (Number(cash.value) < price) {
    alert('Customer does not have enough money to purchase the item');
    cash.value = '';
    return;
  }

  if (Number(cash.value) === price) {
    displayChangeDue.innerHTML =
      '<p>No change due - customer paid with exact cash</p>';
    cash.value = '';
    return;
  }

  let changeDue = Number(cash.value) - price;
  let reversedCid = [...cid].reverse();
  let denominations = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.1],
    ['NICKEL', 0.05],
    ['PENNY', 0.01]
  ];
  let result = { status: 'OPEN', change: [] };
  let totalCID = parseFloat(
    cid
      .reduce((sum, curr) => sum + curr[1], 0)
      .toFixed(2)
  );

  if (totalCID < changeDue) {
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    cash.value = '';
    return;
  }

  if (totalCID === changeDue) {
    result.status = 'CLOSED';
  }

  denominations.forEach((denomination, index) => {
    let coinName = denomination[0];
    let coinValue = denomination[1];
    let amountInDrawer = reversedCid.find(item => item[0] === coinName)[1];
    let amountToReturn = 0;

    while (changeDue >= coinValue && amountInDrawer > 0) {
      changeDue = parseFloat((changeDue - coinValue).toFixed(2));
      amountInDrawer = parseFloat((amountInDrawer - coinValue).toFixed(2));
      amountToReturn = parseFloat((amountToReturn + coinValue).toFixed(2));
    }

    if (amountToReturn > 0) {
      result.change.push([coinName, amountToReturn]);
    }
  });

  if (changeDue > 0) {
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    cash.value = '';
    return;
  }

  formatResults(result.status, result.change);
  updateUI(result);

  cash.value = '';
};

const updateUI = result => {
  const currencyNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };

  // Actualizar cid si se da cambio y el estado es 'OPEN'
  if (result.status === 'OPEN') {
    result.change.forEach(changeArr => {
      const targetArr = cid.find(cidArr => cidArr[0] === changeArr[0]);
      targetArr[1] = parseFloat((targetArr[1] - changeArr[1]).toFixed(2));
    });
  }

  // Si el estado es 'CLOSED', vaciar la caja
  if (result.status === 'CLOSED') {
    cid = cid.map(item => [item[0], 0]);
  }

  priceScreen.textContent = `Total: $${price}`;
  cashDrawerDisplay.innerHTML = `<p><strong>Cash in drawer:</strong></p>
    ${cid
      .map(money => `<p>${currencyNameMap[money[0]]}: $${money[1]}</p>`)
      .join('')}  
  `;
};

purchaseBtn.addEventListener('click', checkCashRegister);

cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkCashRegister();
  }
});

// Inicializar la interfaz de usuario
updateUI({ status: 'OPEN', change: [] });
