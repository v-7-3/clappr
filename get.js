            const urlParams = new URLSearchParams(window.location.search);
const tv = urlParams.has('tv') ? urlParams.get('tv') : null;

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.fedfa.org/data/ServerOne.txt', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        // get the text from response.
        const textContent = xhr.responseText;
        console.log(textContent);
    }
};

xhr.send();

            function changeVideoSource(player, newSource) {
                player.load(newSource);
            }

            // After 10 seconds, call the function to change the video source to $name2
            setTimeout(function() {
                changeVideoSource(player, "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8");
            }, 10000);
