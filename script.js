document.getElementById('rechargeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Getting input values
    const mobileNumber = document.getElementById('mobileNumber').value;
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Simple validation and message display
    if (mobileNumber && amount && paymentMethod) {
        document.getElementById('result').innerHTML = `Recharge of ₹${amount} for ${mobileNumber} using ${paymentMethod} is successful!`;
    } else {
        document.getElementById('result').innerHTML = 'Please fill all the fields correctly.';
    }
});
