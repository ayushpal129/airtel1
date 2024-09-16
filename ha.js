function submitName() {
    const nameInput = document.getElementById('nameInput').value;
    const result = document.getElementById('result');
    
    if (nameInput) {
        result.textContent = ``;
    } else {
        result.textContent = 'Please enter your Account No.!';
    }
}


function selectPayment() {
    const paymentModes = document.getElementsByName('payment');
    let selectedPayment = null;

    for (let i = 0; i < paymentModes.length; i++) {
        if (paymentModes[i].checked) {
            selectedPayment = paymentModes[i].value;
            break;
        }
    }

    const message = document.getElementById('message');

    if (selectedPayment) {
        message.textContent = `You have selected: ${selectedPayment}`;
    } else {
        message.textContent = 'Please select a payment mode!';
    }
}


function linkpages() {
    const selectElement = document.getElementById('paymentMethod');
    const selectedPage = selectElement.value;
    window.location.href = selectedPage;

}