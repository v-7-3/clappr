const geoApiUrl = "https://get.geojs.io/v1/ip/geo.json";
const allowedCountries = ["MA", "DZ", "QA", "IQ", "KW", "JO", "YE", "LY", "AE", "ES", "IT", "BR", "NG"];
const adLink = "https://poawooptugroo.com/4/3412385";
let lastClickTime = 0;
const cooldownTime = 180000; // 180,000 مللي ثانية = 3 دقائق

fetch(geoApiUrl)
    .then(response => response.json())
    .then(data => {
        if (allowedCountries.includes(data.country_code)) {
            document.addEventListener("click", function () {
                const currentTime = Date.now();

                if (currentTime - lastClickTime >= cooldownTime) {
                    // فتح النافذة المنبثقة بحجم 100% من الشاشة
                    const popupWidth = screen.width;
                    const popupHeight = screen.height;
                    window.open(
                        adLink,
                        "FullscreenPopup",
                        `width=${popupWidth},height=${popupHeight},scrollbars=yes,resizable=yes,fullscreen=yes`
                    );
                    lastClickTime = currentTime;
                }
            });
        }
    })
    .catch(error => {
        console.error("Error fetching geo data:", error);
    });
