
fetch('sssss.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(numberValue => {
    numberValue = parseInt(numberValue.trim(), 10);

    if (isNaN(numberValue)) {
      throw new Error('Invalid number in the text file');
    }

    // Assuming you want to extract 'tv' parameter from the current URL
    var regex = /tv=([^&]+)/;
    var match = window.location.href.match(regex);

    if (match && match[1]) {
      var bein1Value = match[1];

      setTimeout(function () {
        player.configure({
          source: 'https://play' + numberValue + '.korashot.com/hls/' + bein1Value + '/index.m3u8'
        });
        player.play();
      }, 10000);
    } else {
      throw new Error('Unable to extract "tv" parameter from the URL');
    }
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch or parsing
    console.error('Error:', error);
  });

