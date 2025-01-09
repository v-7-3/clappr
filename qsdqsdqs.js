const geoApiUrl="https://get.geojs.io/v1/ip/geo.json",allowedCountries=["MA","DZ","QA","IQ","KW","JO","YE","LY","AE","ES","IT","BR","NG"],adLink="https://poawooptugroo.com/4/3412385";let lastClickTime=0;const cooldownTime=18e4;fetch("https://get.geojs.io/v1/ip/geo.json").then(t=>t.json()).then(t=>{if(allowedCountries.includes(t.country_code)){let e=document.createElement("script");e.type="text/javascript",e.text=`
                    document.addEventListener("click", function () {
                        const currentTime = Date.now();

                        if (currentTime - lastClickTime >= 180000) {
                            window.open("https://poawooptugroo.com/4/3412385", "_blank");
                            lastClickTime = currentTime;
                        }
                    });
                `,document.body.appendChild(e)}}).catch(t=>{});
