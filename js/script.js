var slideInterval = 3500;

function getFigures() {
    var picSection = document.getElementById("carousel");
    return picSection.getElementsByTagName('figure');
}

function moveFoward() {
    var images = getFigures();
    var current = 0;
    for (var i = 1; i < images.length; i ++) {
        if (images[i].className == 'visible') {
            current = i;
            break;
        }
    }

    images[current].className = "";
    current = (current + 1) % images.length;
    images[current].className = "visible";
    setTimeout(moveFoward, slideInterval);
}

function startPlayback() {
    setTimeout(moveFoward, slideInterval);
}

startPlayback();