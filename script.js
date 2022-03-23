let output = document.getElementById('output');
buttons = document.querySelectorAll('button');
let outputValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log( "button: ",buttonText);
        if (buttonText == 'AC') {
            outputValue = "";
            output.value = outputValue;
        }
        else if (buttonText == 'DEL') {
            // console.log(output.value);
            var clear = output.value.slice(0,-1);
            output.value = clear;
            // console.log(clear);
        }
        else if (buttonText == '=') {
            output.value = eval(outputValue);
        }
        else {
            outputValue += buttonText;
            output.value = outputValue;
        }
    })

}