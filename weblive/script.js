document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var form = document.getElementById('surveyForm');

    // Add submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Collect form data
        var formData = new FormData(form);
        var formDataObject = {};
        formData.forEach(function (value, key) {
            formDataObject[key] = value;
        });

        // Convert the form data to JSON for easier handling
        var jsonData = JSON.stringify(formDataObject);

        // Save data to localStorage
        localStorage.setItem('formData', jsonData);

        // Redirect to results.html
        window.location.href = 'results.html';
    });
});
