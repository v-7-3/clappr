               const urlParams = new URLSearchParams(window.location.search);
        const tv = urlParams.has('tv') ? urlParams.get('tv') : null;

// Function to change video source
        function changeVideoSource(source) {
            player.load(source);
        }

        // Reload video source after 30 seconds
        setTimeout(function() {
            var newSource = "https://play1.fedfa.org/hls/" + tv + "/index.m3u8";
            changeVideoSource(newSource);
        }, 30000);
