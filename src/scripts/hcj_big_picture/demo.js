export default function () {
    const demoPar = document.getElementById('demo');
    const showDateBtn = document.getElementById('show-date');
    const dataFromServerBtn = document.getElementById('data-from-server');

    showDateBtn.addEventListener('click', function () {
        const name = window.prompt("Introduce your name");
        if (name !== null) {
            demoPar.innerText = `${name}: ${Date()}`;
        }
    });
    dataFromServerBtn.addEventListener('click', function () {
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById('demo-data-from-server').innerText = this.responseText;
            }
        };
        xhttp.open("GET", "/public/data_from_server.txt", true);
        xhttp.send();
    });
};
