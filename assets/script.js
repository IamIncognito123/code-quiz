var timeCounter = document.querySelector('.time');

var startGame = document.getElementById('startgame');

// questions

var question1 = document.getElementById('question1')
var question2 = document.getElementById('question2')
var question3 = document.getElementById('question3')

var choice1 = document.getElementById('1')
var choice2 = document.getElementById('2')
var choice3 = document.getElementById('3')

var wrongChoice1 = document.querySelectorAll('.wrong1')
var wrongChoice2 = document.querySelectorAll('.wrong2')
var wrongChoice3 = document.querySelectorAll('.wrong3')

var rightAnswer = document.createElement('h2')
var wrongAnswer = document.createElement('h2')
var answer = document.querySelector('.answer')
rightAnswer.textContent = 'Correct!'
wrongAnswer.textContent = 'Wrong!'

// score and initials
var scoreBoard = document.querySelector('.scoreBoard')
var playerScore = document.createElement('h3')
var playerInitial = document.createElement('h3')
var showScore = document.querySelector('#score')


startGame.addEventListener('click', question)


function question(){
    function gameTimer(){
    question1.setAttribute('id', 'question1show')

    var elementClicked = false
    var finishQuiz = false
// question1
    choice1.onclick = function (){
        question1.setAttribute('id', 'question1')
        question2.setAttribute('id', 'question2show')
        answer.appendChild(rightAnswer)
        wrongAnswer.setAttribute('style', 'display: none')
        }
    wrongChoice1[0].onclick = function(){
        question1.setAttribute('id', 'question1')
        question2.setAttribute('id', 'question2show')
        answer.appendChild(wrongAnswer)
        rightAnswer.setAttribute('style', 'display: none')
        wrongAnswer.setAttribute('style', 'display: show')
        elementClicked = true
        if(elementClicked === true){
            timeLeft = timeLeft - 5;    
        }
        }
    wrongChoice1[1].onclick = function(){
        question1.setAttribute('id', 'question1')
        question2.setAttribute('id', 'question2show')
        answer.appendChild(wrongAnswer)
        rightAnswer.setAttribute('style', 'display: none')
        wrongAnswer.setAttribute('style', 'display: show')
        elementClicked = true
        if(elementClicked === true){
            timeLeft = timeLeft - 5;    
        }
        }
    wrongChoice1[2].onclick = function(){
        question1.setAttribute('id', 'question1')
        question2.setAttribute('id', 'question2show')
        answer.appendChild(wrongAnswer)
        rightAnswer.setAttribute('style', 'display: none')
        wrongAnswer.setAttribute('style', 'display: show')
        elementClicked = true
        if(elementClicked === true){
            timeLeft = timeLeft - 5;    
        }
        }


// question 2
    choice2.onclick = function(){
        question2.setAttribute('id', 'question2')
        question3.setAttribute('id', 'question3show')
        answer.appendChild(rightAnswer)
        rightAnswer.setAttribute('style', 'display: show')
        wrongAnswer.setAttribute('style', 'display: none') 
    }
    wrongChoice2[0].onclick = function(){
        question2.setAttribute('id', 'question2')
        question3.setAttribute('id', 'question3show')
        answer.appendChild(wrongAnswer)
        rightAnswer.setAttribute('style', 'display: none')
        wrongAnswer.setAttribute('style', 'display: show')
        elementClicked = true
        if(elementClicked === true){
            timeLeft = timeLeft - 5;    
        }
        }
    wrongChoice2[1].onclick = function(){
        question2.setAttribute('id', 'question2')
        question3.setAttribute('id', 'question3show')
        answer.appendChild(wrongAnswer)
        rightAnswer.setAttribute('style', 'display: none')
        wrongAnswer.setAttribute('style', 'display: show')
        elementClicked = true
        if(elementClicked === true){
            timeLeft = timeLeft - 5;    
        }
        }
    wrongChoice2[2].onclick = function(){
        question2.setAttribute('id', 'question2')
        question3.setAttribute('id', 'question3show')
        answer.appendChild(wrongAnswer)
        rightAnswer.setAttribute('style', 'display: none')
        wrongAnswer.setAttribute('style', 'display: show')
        elementClicked = true
        if(elementClicked === true){
            timeLeft = timeLeft - 5;    
        }
        }

// question 3
    choice3.onclick = function(){
        question3.setAttribute('id', 'question3')
        answer.appendChild(rightAnswer)
        rightAnswer.setAttribute('style', 'display: show')
        wrongAnswer.setAttribute('style', 'display: none')
        finishQuiz = true
    }

    wrongChoice3[0].onclick = function(){
        question3.setAttribute('id', 'question3')
        answer.appendChild(wrongAnswer)
        rightAnswer.setAttribute('style', 'display: none')
        wrongAnswer.setAttribute('style', 'display: show')
        finishQuiz = true
        elementClicked = true
        if(elementClicked === true){
            timeLeft = timeLeft - 5;    
        }
        }
    wrongChoice3[1].onclick = function(){
        question3.setAttribute('id', 'question3')
        answer.appendChild(wrongAnswer)
        rightAnswer.setAttribute('style', 'display: none')
        wrongAnswer.setAttribute('style', 'display: show')
        finishQuiz = true
        elementClicked = true
        if(elementClicked === true){
            timeLeft = timeLeft - 5;    
        }
        }
    wrongChoice3[2].onclick = function(){
        question3.setAttribute('id', 'question3')
        answer.appendChild(wrongAnswer)
        rightAnswer.setAttribute('style', 'display: none')
        wrongAnswer.setAttribute('style', 'display: show')
        finishQuiz = true
        elementClicked = true
        if(elementClicked === true){
            timeLeft = timeLeft - 5;    
        }
        }

        var timeLeft = 30;

            var timeInterval = setInterval(function(){
                timeLeft--;
                timeCounter.textContent = timeLeft + ' seconds remaining';
                if (timeLeft < 0 || finishQuiz === true)
                    {clearInterval(timeInterval);
                    timeCounter.textContent = '';
                    rightAnswer.setAttribute('style', 'display: none');
                    wrongAnswer.setAttribute('style', 'display: none');
                    localStorage.setItem('timeLeft', timeLeft) 
                    score();
                }
                
                
            }, 1000)


    }
        gameTimer();

}


function score (){

    // var initials = prompt ('Please enter your initials', '');
    // playerInitial.textContent = initials;
    // scoreBoard.appendChild(playerInitial)

    var score = localStorage.getItem('timeLeft')
    playerScore.textContent = score;
    scoreBoard.appendChild(playerScore);

    showScore.setAttribute('id', 'scoreShow')
}
