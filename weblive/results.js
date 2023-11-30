document.addEventListener('DOMContentLoaded', function () {
    // Get the results section
    var resultsSection = document.getElementById('resultsSection');

    // Retrieve form data from localStorage
    var formDataJson = localStorage.getItem('formData');
    console.log(formDataJson)
    //Retrieve model results with API
    const url = 'http://127.0.0.1:5000/predict';
    
    //Provide user with their model prediction output
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataJson),
      })
        .then(response => response.json())
        .then(result => {
            if (result.result == 0){
                var p = document.createElement('p');
                p.textContent = "You are LOW risk for heart disease.";
                p.style.color = 'green';
                p.style.fontWeight = 'bold'
                modelPrediction.appendChild(p);
                console.log('low')
            } else {
                var p = document.createElement('p');
                p.textContent = "You are HIGH risk for heart disease.";
                p.style.color = 'red';
                p.style.fontWeight = 'bold'
                modelPrediction.appendChild(p);
                console.log('high');
            }
        });
    
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
