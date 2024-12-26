const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const phoneValidators = {
    US: {
        example: "+1 555-555-5555",
        regex: /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/,
        validator: userNumber => {
            if (phoneValidators.US.regex.test(userNumber)) {
                resultsDiv.textContent = `Valid US number: ${userNumber}`;
            } else {
                resultsDiv.textContent = `Invalid US number: ${userNumber}`;
            }
        }
    },
    DR: {
        example: "+1 809-123-4567",
        regex: /^(\+1)?\s?(809|829|849)[-\s]?\d{3}[-\s]?\d{4}$/,
        validator: userNumber => {
            if (phoneValidators.DR.regex.test(userNumber)) {
                resultsDiv.textContent = `Valid DR number: ${userNumber}`;
            } else {
                resultsDiv.textContent = `Invalid DR number: ${userNumber}`;
            }
        }
    },
    DE: {
        example: "+49 160 1234567",
        regex: /^(\+49)?\s?(1\d{2})\s?\d{7,8}$/,
        validator: userNumber => {
            if (phoneValidators.DE.regex.test(userNumber)) {
                resultsDiv.textContent = `Valid DE number: ${userNumber}`;
            } else {
                resultsDiv.textContent = `Invalid DE number: ${userNumber}`;
            }
        }
    }
};

checkBtn.addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value.trim();  
    const country = document.getElementById('country-select').value;       
    
    if (userInput === "") {
        alert("Please provide a phone number");
    } else {
        if (phoneValidators[country]) {
            phoneValidators[country].validator(userInput); 
        } else {
            alert("Country not supported");
        }
    }
});

clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = "";
});
