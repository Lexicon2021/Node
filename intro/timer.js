// *** Countdown timer

let seconds = 10;

const timer = () => {
    seconds--;
    console.log(seconds);
    if(seconds === 0) {
        clearInterval(countdown);
        console.log('end of the time');
    }
};

const countdown = setInterval(timer, 1000);