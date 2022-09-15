let userScore = 0;
let computerScore = 0;
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const buttons =
[
    {'name': 'Rock', 'icon': '✊🏻', 'beats': {'Scissors': 'crushes', 'Lizard': 'crushes'}},
    {'name': 'Paper', 'icon': '✋🏻', 'beats': {'Rock': 'covers', 'Spock': 'disproves'}},
    {'name': 'Scissors', 'icon': '✌🏻', 'beats': {'Paper': 'cuts', 'Lizard': 'decapitates'}},
    {'name': 'Lizard', 'icon': '🤏🏻', 'beats': {'Spock': 'poisons', 'Paper': 'eats'}},
    {'name': 'Spock', 'icon': '🖖🏻', 'beats': {'Scissors': 'smashes', 'Rock': 'vaporizes'}}
];

for(let i = 0; i < buttons.length; i++)
{
    let button = document.createElement('button');
    button.appendChild(document.createTextNode(buttons[i].icon));
    document.getElementById('game').appendChild(button);
    button.addEventListener('click', function() { choice(i); });
}

function choice(index)
{
    let you = buttons[index];
    let computer = buttons[Math.floor(Math.random() * buttons.length)];
    let result = document.getElementById('result');
    
    if(you.beats.hasOwnProperty(computer.name))
    {
        // increase('user-score');
        userScore++;
        userScoreDisplay.innerHTML = userScore;
        computerScoreDisplay.innerHTML = computerScore;
        document.getElementsByClassName('badge')
    
        if (you.name === 'Rock' && computer.name === 'Scissors') {
            result.innerHTML = 'And as it always has<br>';
            result.innerHTML += [you.icon, you.name, you.beats[computer.name], computer.name, computer.icon].join(' ');
        } else {
                result.innerHTML = [you.icon, you.name, you.beats[computer.name], computer.name, computer.icon].join(' ');
        }
        result.innerHTML += '<br>You Won!';
    }

    else if(computer.beats.hasOwnProperty(you.name))
    {
        // increase('computer-score');
        computerScore++;
        userScoreDisplay.innerHTML = userScore;
        computerScoreDisplay.innerHTML = computerScore;
    
        result.innerHTML = [computer.icon, computer.name, computer.beats[you.name], you.name, you.icon].join(' ');
        result.innerHTML += '<br>You Lose!';
    }
    else
    {
        result.innerHTML = [computer.icon, 'Nobody Wins', you.icon].join(' ');
        result.innerHTML += '<br>Draw!';
    }
}

function endGame() {
    if (userScore === 15 && userScore > computerScore) {
        result.innerHTML = 'you won the fight';
    } else if (computerScore === 15 && userScore < computerScore) {
        result.innerHTML = 'game over';
    }
}

// function increase(id)
// {
//     let score = document.getElementById(id);
//     score.innerHTML = Number(score.innerHTML) + 1;
// }

