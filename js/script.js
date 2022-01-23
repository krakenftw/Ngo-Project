//Lower heading Change
var motivesArr = ["Our Begining", "Our Plans", "Our Mission", "Our Vision"];
var numMotive = 0;
setInterval(() => {
    $(".lowerheading").fadeOut(function () {
        $(".lowerheading").text(motivesArr[numMotive]).fadeIn();
        numMotive++
    })
    if (numMotive == 4) {
        numMotive = 0;
    }
}, 2000);
//onclick LowerHeading
document.querySelector(".lowerheading").addEventListener("click", function onClick() {
    if (numMotive == 1) {
        window.scroll(0, 900);
    }
    else if (numMotive == 2) {
        window.scroll(0, 1150);
    }
    else if (numMotive == 3) {
        window.scroll(0, 1420);
    }
    else if (numMotive == 4) {
        window.scroll(0, 1600);
    }

})


