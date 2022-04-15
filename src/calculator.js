const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((key) => {
    key.onclick = () => {
        if (key.id == 'clear'){
            display.innerText = '';
        } else if (key.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && key.id == 'equal') {
            display.innerText = eval(display.innerText); 
        }else if (display.innerText == '' && key.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 3000);
        } else {
            display.innerText += key.id;
        }

    }
})

//setTimeout if you press the = button with nothing inside it displays empty for 3secs/3000ms
//eval sees all the numbers and operands in a string and does the math for you


