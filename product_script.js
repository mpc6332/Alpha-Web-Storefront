$(document).ready(function() {
    // Function to check if all required fields are filled out
    function areRequiredFieldsFilled() {
        var productId = $('#productId').val();
        var productDesc = $('#productDesc').val();
        var productCategory = $('#productCategory').val();
        var productUOM = $('#productUOM').val();
        var productPrice = $('#productPrice').val();

        return productId && productDesc && productCategory && productUOM && productPrice;
    }

    // When the "Add Item" button is pressed
    $('#additem-button').click(function(event) {
        // Check if all required fields are filled
        if (areRequiredFieldsFilled()) {
            // Hide the entire form and product management header
            $('form, .panel-title').hide();
            // Show the lookup section
            $('.search-section').show();
            // Prevent the default form submission
            event.preventDefault();
        } else {
            alert('Please fill out all required fields before activating the lookup section.');
            event.preventDefault(); // Prevent form submission if fields are not filled
        }
    });
});