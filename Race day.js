

let raceNumber = Math.floor(Math.random() * 1000);
const registerEarly = true
const runnerAge = 55
//prouduce a race number.
if (registerEarly === true && runnerAge > 18){
    console.log (raceNumber + 1000);
} 
//if the runners are early and over 18.
if (registerEarly === true && runnerAge > 18){
    console.log ('Early adults will race at 9:30am and your race number will be.' + raceNumber + 1000);
} 
//if the runners are late and over 18.
else if (registerEarly === false && runnerAge > 18){
  console.log('Late Adults will run at 11:00am and your race number will be.' + raceNumber + 1000);
} 
//if the runners are exactly 18 years old.
else if (runerAge = 18 ){
      console.log( 'Runner needs to fo to registration desk.'); 
  }
// if runners are early and under 18..
if (registerEarly === true && runnerAge < 18){
    console.log ('Youth registrants will run at 12:30 pm and your race number will be.' + raceNumber);
} 
