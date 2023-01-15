import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "Enter your guess b/w 1 to 10"
    }]);
const { userGuess } = answer;
console.log(userGuess, "userGuess", systemGeneratedNo, "SysNo");
if (userGuess === systemGeneratedNo) {
    console.log("yaaaa your answer is correct \n you win");
}
else {
    console.log("Try Better Luck Next Time");
}
