let userName = prompt("Welcome to GC mini golf! What is your name?");
console.log("The users name is " + userName + ".")

let holeChoice = Number (prompt ("Hi, " + userName + "! Would you like to play 3 or 6 holes?") );
console.log("The user chose " + holeChoice + " holes.");

let score = 0

if (holeChoice === 3) {
    for (let i = 0; i < holeChoice; i++) {
        let putts = Number( prompt(`How many putts for hole ${i + 1}? (par: 3)`) ); 
        score += putts;
        par = holeChoice * 3
    }
} else if (holeChoice === 6) {
    for (let i = 0; i < holeChoice; i++) {
        let putts = Number( prompt(`How many putts for hole ${i + 1}? (par: 3)`) ); 
        score += putts;
        par = holeChoice * 3
    }
} else if (holeChoice !== 3 && holeChoice !== 6) {
    let holeChoice = Number (prompt ("Invalid choice. Please choose either 3 or 6 holes.") );
}

let scoreDifference = score - par

console.log(`The user's total par is ${scoreDifference}`)

if (scoreDifference > 0) {
    console.log(`Nice try, ${userName}... Your total par was: + ${scoreDifference}.`);
  } else if (scoreDifference < 0) {
    console.log(`Great job, ${userName}! Your total par was: ${scoreDifference}.`);
  } else {
    console.log(`Good game, ${userName}. Your total par was: 0.`);
  }