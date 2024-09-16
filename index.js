function data() {
    var selectElement = document.getElementById('cardNumber');
    var selectedPage = selectElement.value;
    document.getElementById("display").textContent = selectedPage;
    const button = document.getElementById('submit-btn');
        
    button.addEventListener('click', function(event) {
        // Perform button-like behavior before form submission
        alert('Button clicked! Form will now submit.');
            
        // Form will still submit because the input type is "submit"
    });
}
