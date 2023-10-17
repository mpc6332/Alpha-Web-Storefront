$(document).ready(function() {
    // Initialize an object to store the form data as a JSON object
    var formData = {};

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

            // Store the form data in the formData object as a JSON object
            formData = {
                productId: $('#productId').val(),
                productDesc: $('#productDesc').val(),
                productCategory: $('#productCategory').val(),
                productUOM: $('#productUOM').val(),
                productPrice: $('#productPrice').val(),
                productWeight:$('#productWeight').val()
            };

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

    // Function to handle the lookup search1
    $('#searchButton').click(function() {
        var searchTerm = $('#searchProductId').val();

        // Check if the search term matches the productId
        if (formData.productId && formData.productId === searchTerm) {
            var jsonData = JSON.stringify(formData, null, 2);
            // Display the "JSON" header and the JSON data
            $('#searchResult').html('<h3>JSON</h3><pre>' + jsonData + '</pre>');
        } else {
            // Display a message indicating no match
            $('#searchResult').text('No match found.');
        }
    });
});