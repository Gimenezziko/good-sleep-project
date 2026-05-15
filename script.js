console.log("JavaScript is connected.");

let entries = [];
let selectedMood = null;

//This function calculates the hours of sleep based on the sleep time and wake time.
function calcHours(sleep, wake) {
    const [sh, sm] = sleep.split(":").map(Number);
    const [wh, wm] = wake.split(":").map(Number);
    let mins = (wh * 60 + wm) - (sh * 60 + sm);
    if (mins < 0) mins += 1440;
    return Math.round(mins / 60 * 10) / 10;
}

//This function lets the user select a mood, and it makes the button active.
function selectMood(mood) {
    selectedMood = mood; // This function sets the selected mood
    document.querySelectorAll('#mood-selector button').forEach(btn => {
        btn.classList.remove('active');
    });//Query Selector I think allows you to select mood buttons, and forEach makes each button active when when clicked with document.querySelector and it's button onclickslectmood thing.
document.querySelector(`#mood-selector button[onclick="selectMood(${mood})"]`).classList.add('active');
}


//This function logs my entries, basically it gets the values the user inputs with the buttons.
function logEntry() {
    const sleep = document.getElementById("sleep-time").value;//I assume logs the value for the sleep time
    const wake = document.getElementById("wake-time").value;//I assume logs the value for the wake time
    const nap = document.getElementById("nap-toggle").checked;//I assume logs the value for the nap toggle

    if(!selectedMood) {
        alert('Select a mood before logging.'); //This makes sure that the user selects a mood before he logs.
        return;
    }

    const hours = calcHours(sleep, wake); // This takes the calculated hours of sleep based on the log from the syntax above.
    const now = new Date(); //This incorporates a date, I don't exactly know how
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // This incorporates days of the week

    entries.unshift({ //I have no idea what unshift does, nor what an array is after searching it up, are these basicaly what the entries will look like?
        sleep, wake, hours,
        mood: selectedMood,
        nap: nap,
        day: days[now.getDay()]
    });

    console.log(entries); //This probably logs the entries and returns the output of entries,unshift in the console.
}

console.log(calcHours("23:00", "7:00"));