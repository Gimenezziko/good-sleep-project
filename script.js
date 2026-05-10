console.log("JavaScript is connected.");

let entries = [];
let selectedMood = null;

function calcHours(sleep, wake) {
    const [sh, sm] = sleep.split(":").map(Number);
    const [wh, wm] = wake.split(":").map(Number);
    let mins = (wh * 60 + wm) - (sh * 60 + sm);
    if (mins < 0) mins += 1440;
    return Math.round(mins / 60 * 10) / 10;
}

console.log(calcHours("23:00", "7:00"));

