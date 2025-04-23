const ETG = document.querySelector('.etg');
const ETA = document.querySelector('.eta');
let countdown;
function Timer(sec) {
    if (countdown) clearInterval(countdown);
    const now = Date.now();
    const secs = sec * 1000;
    const then = now + secs;
    DisplayTimeLeft(sec);
    DisplayEndTime(then);

    countdown = setInterval(() => {
        const leftSec = Math.round((then - Date.now()) / 1000);
        if (leftSec < 0) {
            clearInterval(countdown);
            return;
        }
        DisplayTimeLeft(leftSec);
    }, 1000);

}

function DisplayTimeLeft(seconds) {
    const min = Math.floor(seconds / 60);
    const secRem = seconds % 60;

    const display = `${min}:${secRem < 10 ? '0' : ''}${secRem}`;
    //// ↑String↑////↑ 2min ↑ :↑        0sec     ↑__↑  5sec  ↑  --->  2:05 sec
    ETG.innerHTML = display;
}

function DisplayEndTime(timeStamp) {
    const end = new Date(timeStamp);
    const hrs = end.getHours();
    const min = end.getMinutes();
    ETA.innerHTML = `Be back @ ${hrs < 10 ? '0' : 0}:${min < 10 ? '0' : ''}${min}`;
    // ETA.innerHTML = `Be back @ ${hrs < 10 ? '0' : ''}${hrs}:${min < 10 ? '0' : ''}${min}`;
}

Timer(10);