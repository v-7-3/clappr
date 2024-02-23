<script>
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
</script>
