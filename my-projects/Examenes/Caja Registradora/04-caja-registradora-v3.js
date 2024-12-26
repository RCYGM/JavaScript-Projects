const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');
//const cashValue = Number(document.getElementById('cash').value);
const updatePrice = document.getElementById('price');
const cashRegister = document.getElementById("cash-register");

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

const souwResult = (status, change) => {
    changeDue.innerHTML = `<p>Status: ${status}</p>`;
    change.map(
        changeArr => changeDue.innerHTML += `<P>${changeArr[0]}: ${changeArr[1]}</P>`
    );
    return;
};
const updateBox = (restToBoxArr) => {
    console.log(restToBoxArr)

    if (restToBoxArr) {
        restToBoxArr.forEach(element => {
            const findElement = cid.find(cidArr => cidArr[0] === element[0]);
            findElement[1] = parseFloat((findElement[1] - element[1]).toFixed(2));


        });
    };
    cashValue - "";
    updatePrice.textContent = `The total amount is: $${price}`
    cashRegister.innerHTML = `<p>Change Available:</p>${cid.map(change => `<p>${change[0]}: $${change[1]}</p>`).join("")
        }`;
}
const cashBack = (inputValue) => {
    console.log(inputValue);

    if (inputValue < price) {
        alert('Customer does not have enough money to purchase the item');
        cashValue = "";
        return;

    } else if (price === inputValue) {
        changeDue.innerHTML = `<h2>No change due - customer paid with exact cash</h2>`;
        cash.value = '';
        return;
    };

    let changeDue = inputValue - price;
    let monyValue = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
    let totalInBox = parseFloat(cid.map(total => total[1])
        .reduce((acc, el) => acc + el, 0)
        .toFixed(2));

    let reversedCid = cid.reverse();
    let changeDone = {status: 'OPEN', totalChange: [] };
    console.log(changeDue);
    console.log(monyValue);
    console.log(totalInBox);

    if (totalInBox < changeDue) {
        return changeDue.innerHTML = `<h2>Status: INSUFFICIENT_FUNDS</h2>`;

    } else if (totalInBox === changeDue) {
        return changeDue.innerHTML = `<h2>Status: CLOSED</h2>`;

    }

    for (let i = 0; i < reversedCid.length; i++) {
        if (changeDue >= monyValue[i] && changeDue > 0) {
            let cout = 0;
            let total = reversedCid[i][1];

            while (total > 0 && changeDue >= monyValue[i]) {
                total -= monyValue[i];
                changeDue = parseFloat(changeDue -= monyValue[i]).toFixed(2);
                cout++;
            };
            if (cout > 0) {
                changeDone.totalChange.push([reversedCid[i][0], cout * monyValue[i]]);
            }
        };
    };

    if (changeDue > 0) {
        return changeDue.innerHTML = `<h2>Status: INSUFFICIENT_FUNDS</h2>`;
    };

    souwResult(changeDone.status, changeDone.totalChange);
    updateBox(changeDone.totalChange);
};
/*
purchaseBtn.addEventListener('click', () => {
    const cashValue = Number(document.getElementById('cash').value);
    cashBack(cashValue);
});
*/
cashBack(100);
