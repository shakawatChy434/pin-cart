/* 
function getPin() {
    // document.getElementById('generate-pin-no').addEventListener('click', function () {
    // const generateInput = document.getElementById('generate-input');
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        console.log('get 3 digit pin & calling again the function', pin);
        return getPin();
    }
    // });

};
function generatePin() {
    console.log(pin);
}; */
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log('got this pin')
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    const displayPin = document.getElementById('display-pin').value = pin;
    // console.log(pin);
}