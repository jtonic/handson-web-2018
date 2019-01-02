"use strict";

export default function () {
    const showDateBtn = document.getElementById('show-date');
    showDateBtn.addEventListener('click', function () {
        document.getElementById('demo').innerText = Date();
    });
};
