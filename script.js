let CustomerName = prompt("Welcome to GC minigolf! What is your name?");

let NumberofHoles = prompt("Hi, " + CustomerName + "! Would you like to play 3 or 6 holes today?");

let total = 0;
let hole = 0;
let par = hole + 3;
let TotalCoursePar = 0;
for (let i = 0; i < NumberofHoles; i++) {
    hole += 1;
    let  PuttingScore = Number(prompt("How many putts for hole " + hole + "? (par is 3)"));
    total += PuttingScore;
    TotalCoursePar += par;
}

if (total < TotalCoursePar) {
console.log ( "Great job, " + CustomerName + "! Your total par was: " + (total -  TotalCoursePar) + "." );
} else if (total > TotalCoursePar)  {
    console.log ( "Nice try, " + CustomerName + "... Your total par was: + " + (total -  TotalCoursePar) + "." );
} else { 
console.log ("Good game, " + CustomerName + ". Your total par was: 0."); 
}