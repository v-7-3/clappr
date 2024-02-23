<script>
const xhr = new XMLHttpRequest();
xhr.open('GET', 'your-url-here.txt', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        // get the text from response.
        const textContent = xhr.responseText;
        console.log(textContent);
    }
};

xhr.send();
</script>
