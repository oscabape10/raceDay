
//Produce race number up to 1000.
let raceNumber = Math.floor(Math.random() * 1000);
//Variables.
const registerEarly = true
const runnerAge = 22
//control flow statement that checks whether the runner is an adult AND registered early, Add 1000 to their raceNumber if this is true.
if (registerEarly === true && runnerAge > 18){console.log (raceNumber + 1000);
} 
//control flow statement, will check age and registration time to determine race time.
if (registerEarly === true && runnerAge > 18){console.log ('Early adults will race at 9:30am and your race number will be.' + raceNumber + 1000);
} else if (registerEarly === false && runnerAge > 18){
  console.log('Late Adults will run at 11:00am and your race number will be.' + raceNumber + 1000);
} else if (runerAge = 18 )
  {console.log( 'Runner needs to fo to registration desk.'); 
  }

if (registerEarly === true && runnerAge < 18){console.log ('Youth registrants will run at 12:30 pm and your race number will be.' + raceNumber);
} 
