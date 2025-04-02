function getComputerChoice()
{
    return Math.floor(Math.random()*3);
    
}

let kulsofos = 69;
let humanScore = 0;
let computerScore = 0;

function getHumanChoice()
{
    let Choice = (prompt("Rock , Paper , Scissors. \n What do you choose?"))

    if(Choice == "Rock")
    {
        kulsofos = 0;
        return "You have chosen Rock";
        
    }
    else if(Choice == "Paper")
    {
        kulsofos = 1;
        return "You have chosen Paper ";
        
    }
    
    else if(Choice == "Scissors")
    {
        kulsofos = 2;
        return "You have chosen Scissors";
        
    }
}

console.log(getHumanChoice(kulsofos));
console.log(Logic());
//#region logika
function Logic()
{
   let machine = getComputerChoice();
   
   if(machine == 0) //ROCK
   {
    console.log("The Machine Chose Rock!");
        if(kulsofos == 0)
        {
            return "Draw!";
        }
        else if(kulsofos == 1)
        {
            humanScore++;
            return "The Player Won!";
            
        }
        else if(kulsofos == 2)
        {
            computerScore++;
            return "The Machine Won!";
        }
   }

   if(machine == 1) //PAPER
   {
    console.log("The Machine Chose Paper!");
        if(kulsofos == 1)
        {
            return "Draw!";
        }
        else if(kulsofos == 2)
        {
            humanScore++;
            return "The Player Won!";
        }
        else if(kulsofos == 0)
        {
            computerScore++;
            return "The Machine Won!";
        }
   }

   if(machine == 2) //SCISSORS
   {
    console.log("The Machine Chose Scissors!");
        if(kulsofos == 2)
        {
            return "Draw!";
        }
        else if(kulsofos == 0)
        {
            humanScore++;
            return "The Player Won!";
        }
        else if(kulsofos == 1)
        {
            computerScore++;
            return "The Machine Won!";
        }
   }

   
}
//#endregion



function PlayGame()
{
    for(let i = 0; i<=4; i++)
    {
        console.log(getHumanChoice(kulsofos))
        console.log(Logic());
    }

    if(humanScore > computerScore)
    {
        let winner = "Human"
    }
    //{console.log("\nYou won the whole game!!! GG")}
    else if(humanScore> computerScore)
    {
        let winner = "Machine"
    }

    return "The winner is " + winner + "!"
    //{console.log("\nThe Machine Won the whole game, You Suck!")}
}

console.log(PlayGame());

