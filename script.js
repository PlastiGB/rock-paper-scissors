let _cpuRPS;
let _playerRPS;

let _point;
let _playerScore = 0;
let _cpuScore = 0;
let _result = 0;

let _roundCounter = 0;
let _score;

window.onload = function(){
    _score = document.getElementById("score");
}


let RPS = {
    "Rock": 1,
    "Paper": 2,
    "Scissors": 3 
};

let WLT = {
    1: "Win",
    2: "Lose",
    3: "Tie"
}

function Game(player)
{
    _roundCounter += parseInt(1);

    if(_roundCounter <= 5)
    {
        _playerRPS = player;
        cpuPlay();

        _playerRPS = _playerRPS[0].toUpperCase() + _playerRPS.slice(1).toLowerCase();
        _cpuRPS = _cpuRPS[0].toUpperCase() + _cpuRPS.slice(1).toLowerCase();

        Round(_playerRPS, _cpuRPS)

        switch(_point)
        {
            case 1:
                _playerScore += 1;

                _score.innerHTML = `${_cpuScore} - ${_playerScore}`;
                console.log(`You Win! ${_playerRPS} beats ${_cpuRPS}`);
                break;
        case 2:
                _cpuScore += 1;

                _score.innerHTML = `${_cpuScore} - ${_playerScore}`;
                console.log(`You Lose! ${_cpuRPS} beats ${_playerRPS}`);
                break;
        }

        if(_roundCounter == 5)
        {
            _score.classList.add("fadein");
        
            _result = _playerScore > _cpuScore ? "You Win!" : _playerScore == _cpuScore ? "Tie!" : "You Lose!";
    
            _score.addEventListener("animationend", () => {
                _score.innerHTML = _result;
                _score.classList.add("fadeout");
            });
            
            console.log(_result);
        }
    }
}

function Round(playerRPS, cpuRPS)
{
    switch(RPS[playerRPS])
    {
        case 1:
            _point = RPS[cpuRPS] == 1 ? 3 :
                    RPS[cpuRPS] == 2 ? 2 : 1;

            console.log(WLT[_point]);
            break;
        case 2:
            _point = RPS[cpuRPS] == 1 ? 1 :
                    RPS[cpuRPS] == 2 ? 3 : 2;

            console.log(WLT[_point]);
            break;
        case 3:
            _point = RPS[cpuRPS] == 1 ? 2 :
                    RPS[cpuRPS] == 2 ? 1 : 3;

            console.log(WLT[_point]);
            break;
    }
}

function cpuPlay()
{
    _cpuRPS = cpuRandomGen(_cpuRPS);
}

function cpuRandomGen(cpuRPS)
{
    cpuRPS = Math.floor((Math.random() * 3) + 1);

    switch(cpuRPS)
    {
        case 1:
            document.getElementById("cpu").src = "images/Rock.png";
            break;
        case 2:
            document.getElementById("cpu").src = "images/Paper.png";
            break;
        case 3:
            document.getElementById("cpu").src = "images/Scissors.png";
            break;
    }

    cpuRPS = cpuRPS == 1 ? "Rock" : 
            cpuRPS == 2 ? "Paper" : "Scissors";

    return cpuRPS;
}

function Restart()
{
    window.location.reload();
}