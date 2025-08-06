// const mypromise = new Promise((resolve, reject) => {
//     let num = Math.random();
//     if(num > 0.5){
//         resolve("Success");
//     }else{
//         reject("Failure");
//     }
// })
// mypromise.then((msg)=>{
// console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// }).finally(setTimeout(()=>{
//     console.log("Done");
// },2000));

function wakeup() {
  return new Promise((resolve, reject) => {
    console.log("ALarm snoozing");
    setTimeout(() => {
      console.log("Just wakeup");
      resolve();
    }, 2000);
  });
}

function breakfast() {
  return new Promise((resolve, reject) => {
    console.log("Eating Breakfast");
    setTimeout(() => {
      console.log("completed Breakfast");
      resolve();
    }, 2000);
  });
}

function brush() {
  return new Promise((resolve, reject) => {
    console.log("started brushing");
    setTimeout(() => {
      console.log("done brushing");
      resolve();
    }, 2000);
  });
}

// wakeup()
//   .then(() => brush())
//   .then(() => breakfast())
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Done");
//   });

async function dailyactivity() {
    await wakeup();
    await brush();
    await breakfast();
}
dailyactivity();