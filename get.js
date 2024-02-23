const urlParams = new URLSearchParams(window.location.search);
const tv = urlParams.has('tv') ? urlParams.get('tv') : null;

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://159.100.29.114/data/ServerOne.txt', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        // get the text from response.
        const textContent = xhr.responseText;
        console.log(textContent);

        setTimeout(function() {
            changeVideoSource(player, `https://play${textContent}.korashot.com/hls/${tv}/index.m3u8`);
        }, 10000);
    }
};

xhr.send();

function changeVideoSource(player, newSource) {
    player.load(newSource);
}
