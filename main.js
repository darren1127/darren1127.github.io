const x = document.getElementById("myText");
const y = document.getElementById("myText2");

setInterval(function() {
    if (x.style.display === "none" && y.style.display === "none") {
        x.style.display = "block";
        setTimeout(function() {
            y.style.display = "block";
        }, 500);
    } else {
        x.style.display = "none";
        y.style.display = "none";
    }
}, 1000);