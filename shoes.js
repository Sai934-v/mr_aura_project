const colorRadios = document.querySelectorAll('input[name="clothingColor"]');
const displayArea = document.getElementById('selectedColorDisplay'); // Assuming you have an element to show selection

colorRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.checked) {
            console.log("Selected color:", this.value);
            // Example: Update text to show selected color
            if (displayArea) {
                displayArea.textContent = "You selected: " + this.value;
            }
            // Here you could change an image source, etc.
            // For example, if you want to change the border color of a div:
            // document.getElementById('productImageContainer').style.borderColor = this.value;
        }
    });