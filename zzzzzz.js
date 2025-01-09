    const geoApiUrl = "https://get.geojs.io/v1/ip/geo.json";

    const allowedCountries = ["MA", "DZ", "QA", "IQ", "KW", "JO", "YE", "LY", "AE", "ES", "IT", "BR", "NG"];

    const adLink = "https://poawooptugroo.com/4/3412385";

    let lastClickTime = 0;
    const cooldownTime = 180000; 

    fetch(geoApiUrl)
        .then(response => response.json())
        .then(data => {

            if (allowedCountries.includes(data.country_code)) {

                const script = document.createElement("script");
                script.type = "text/javascript";

                script.text = `
                    document.addEventListener("click", function () {
                        const currentTime = Date.now();

                        if (currentTime - lastClickTime >= ${cooldownTime}) {
                            window.open("${adLink}", "_blank");
                            lastClickTime = currentTime;
                        }
                    });
                `;

                document.body.appendChild(script);
            }
        })
        .catch(error => {

        });
