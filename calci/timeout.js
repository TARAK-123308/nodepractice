function taskover(task = "something") {
    console.log(`my ${task} is completed`);
}

function wakeup(callback) {
    console.log("Alarm snoozing...");
    setTimeout(() => {
        console.log("Just woke up");
        if (callback) callback();
    }, 2000);
}

function brush(callback) {
    console.log("doing brush");
    setTimeout(() => {
        console.log("done brushing");
        if (callback) callback();
    }, 2000);
}

function breakfast(callback) {
    console.log("Eating breakfast...");
    setTimeout(() => {
        console.log("done Breakfast");
        if (callback) callback();
    }, 2000);
}

function Travelling(place, callback) {
    console.log(`Travelling to ${place}`);
    setTimeout(() => {
        console.log(`Reached ${place}`);
        if (callback) callback(`travel to ${place}`);
    }, 2000);
}

wakeup(() => {
    brush(() => {
        breakfast(() => {
            Travelling("goa", taskover);
        });
    });
});
