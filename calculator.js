let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(btn => {
    btn.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = '';
                break;
            case 'CLR':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    // display.innerText = alert("Invalid Input");
                    display.innerText = 'Invalid Input!';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
