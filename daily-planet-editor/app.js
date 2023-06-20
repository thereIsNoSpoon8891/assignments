/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

let enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

function whoWins (isThereKryptonite, enemyName){
    if (!isThereKryptonite) {
    return "Superman beats " + enemyName + ", of course";
        } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}

for (let i = 0; i < enemies.length; i++) {
    
let isThereKryptonite = true
    
if (i % 2 === 0) {
    isThereKkryptonite = true;
} else {
    isThereKryptonite = false;
}
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

// 1 is not at all attracted, 10 is "super" attracted...

function howAttractedIsLoisLaneToMe() {
   return math.floor((math.random() * 10) +1);
}

consol.log(howAttractedIsLoisLaneToMe ()) ;

let clarkKent = true;

let superman = false;

while (clarkKent){
    
    console.log("I'm just a nerdy columnist");
}
        let phoneBoothQuickChange = math.random();
            
if (phoneBoothQuickChange >= 0.5) {
    clarkKent = false;
    } else {          
    superman = true;
    console.log("Now I'm Superman!");
}
