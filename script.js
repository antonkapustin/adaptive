"use strict"

const link = document.querySelectorAll(".dropdown__link");
const checkbox = document.getElementById("menu");

link.forEach(
    onclick = function() {
        if (checkbox.checked !== true) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    }
);
