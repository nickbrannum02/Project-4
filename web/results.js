document.addEventListener('DOMContentLoaded', function () {
    // Get the results section
    var resultsSection = document.getElementById('resultsSection');

    // Retrieve form data from localStorage
    var formDataJson = localStorage.getItem('formData');

    if (formDataJson) {
        // Parse JSON and display results
        var formData = JSON.parse(formDataJson);

        // Iterate through form data and display
        for (var key in formData) {
            if (formData.hasOwnProperty(key)) {
                var p = document.createElement('p');
                p.textContent = key + ': ' + formData[key];
                resultsSection.appendChild(p);
            }
        }
    } else {
        // Display a message if no form data is found
        var p = document.createElement('p');
        p.textContent = 'No form data found.';
        resultsSection.appendChild(p);
    }
});
