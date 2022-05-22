//pin generate

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('pin-viewer').value = pin;

}
// pin typing
document.getElementById('key-pad').addEventListener('click', function (event) {
    //cal btn er innertext nilam
    const calButtonText = event.target.innerText;
    const typedNumbers = document.getElementById('typed-numbers')
    if (isNaN(calButtonText)) {
        if (calButtonText == 'C') {
            typedNumbers.value = '';
        }
    }
    else {
        const previousTypedNumbers = typedNumbers.value;
        const newTypedNumbers = previousTypedNumbers + calButtonText;
        typedNumbers.value = newTypedNumbers;

    }

})
// matching work
document.getElementById('submit-btn').addEventListener('click', function () {

    const generatePin = document.getElementById('pin-viewer').value
    const typedNumbers = document.getElementById('typed-numbers').value
   const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');

    if (generatePin == typedNumbers) {
        const notifySuccess = document.getElementById('notify-success');
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else {

        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
})