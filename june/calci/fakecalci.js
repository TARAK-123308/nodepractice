const inputTxt = document.getElementById('inputTxt');
const btns = document.querySelectorAll('.btn');
const operators = ['+', '-', '*', '%', '/'];

Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let input = e.target.innerHTML;

        if (input === "=") {
            inputTxt.value = eval(inputTxt.value);
        } else if (input === "AC") {
            inputTxt.value = "";
            enableOperators();
        } else if (input === "Del") {
            inputTxt.value = inputTxt.value.slice(0, -1);
            let lastChar = inputTxt.value.slice(-1);
            if (!operators.includes(lastChar)) {
                enableOperators();
            }
        } else {
            inputTxt.value += input;

            if (operators.includes(input)) {
                disableOperators();
            } else {
                enableOperators();
            }
        }
    });
});

function disableOperators() {
    Array.from(btns).forEach(btn => {
        if (operators.includes(btn.innerHTML)) {
            btn.disabled = true;
        }
    });
}

function enableOperators() {
    Array.from(btns).forEach(btn => {
        if (operators.includes(btn.innerHTML)) {
            btn.disabled = false;
        }
    });
}
