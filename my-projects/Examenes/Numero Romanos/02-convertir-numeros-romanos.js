const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const outPut = document.getElementById('output');

const validador = (numInput) => {
    if (numInput === "") {
        outPut.innerText = "Please enter a valid number";
        return;
    } else if (parseInt(numInput) <= -1) {
        outPut.innerText = "Please enter a number greater than or equal to 1";
        return;
    } else if (parseInt(numInput) >= 4000) {
        outPut.innerText = "Please enter a number less than or equal to 3999";
        return;
    } else {
        convertirAromanos(numInput);
    }
}

convertBtn.addEventListener('click', () => {
    validador(number.value)
});

number.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        validador(number.value);
        return
    }
})

const convertirAromanos = (numInput) => {
    
        const numeros = [
            { valorDecimal: 1000, symbol: "M" },
            { valorDecimal: 900, symbol: "CM" },
            { valorDecimal: 500, symbol: "D" },
            { valorDecimal: 400, symbol: "CD" },
            { valorDecimal: 100, symbol: "C" },
            { valorDecimal: 90, symbol: "XC" },
            { valorDecimal: 50, symbol: "L" },
            { valorDecimal: 40, symbol: "XL" },
            { valorDecimal: 10, symbol: "X" },
            { valorDecimal: 9, symbol: "IX" },
            { valorDecimal: 5, symbol: "V" },
            { valorDecimal: 4, symbol: "IV" },
            { valorDecimal: 1, symbol: "I" },
        ];

        let numeroRomano = "";

        for (const iterador of numeros) {
            while (numInput >= iterador.valorDecimal) {
                numeroRomano += iterador.symbol;
                numInput -= iterador.valorDecimal

                if (numInput === 0) {
                    break;
                };
            };
        }
    

    outPut.innerText = numeroRomano;
};

/*
for(let i = 0; i < numeros.length; i++){
    while(numInput >= numeros[i].valorDecimal){

        /*si el numero e mayor a uno de la tabla entonces se resta
        se guarda el resultado y ese resultado se resta con el 
        siguiente numero que sea mayor y se van guardando las letras
        de donde se hiso la operacion
        
            }
}
 
 
}
*/




