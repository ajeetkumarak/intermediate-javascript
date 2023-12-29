'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number😎'
console.log(document.querySelector('.message').textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 0;

*/
let score = 20;
let highscore = 1;
// console.log(score , typeof score)

let randomNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(randomNumber)
// document.querySelector('.number').textContent = randomNumber;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener('click', function(){
    
    const guessNumber = Number(document.querySelector('.guess').value);
 
    // console.log(guessNumber , typeof guessNumber);

    if(!guessNumber){
        // document.querySelector(".message").textContent = "🤔 No Number!"
        displayMessage('🤔 No Number!')
    }else if (guessNumber === randomNumber){
        // document.querySelector(".message").textContent = '🎉 Correct Number!';
        displayMessage("🎉 Correct Number!")
        score++;
        document.querySelector(".score").textContent = score;
        console.log(score);
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector(".number").style.width = "30rem"
        document.querySelector("body").style.backgroundColor = "purple"
        // highscore:
        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        // console.log(typeof highscore , typeof score)
    }
    else if(guessNumber !== randomNumber){
        if(score > 1){
            // document.querySelector(".message").textContent = guessNumber > randomNumber ? '📈Too high !' : '📉Too low !' ;
            displayMessage(guessNumber > randomNumber ? '📈Too high !' : '📉Too low !' );
            score--;
            document.querySelector(".score").textContent = score;
            // console.log(score)
        }
        else{
            // document.querySelector(".message").textContent = '😥 You lost the game !';
            displayMessage("😥 You lost the game !");
            document.querySelector(".score").textContent = 0;
        }
    }
    // else if(guessNumber > randomNumber){
        // if(score > 1){
        //     document.querySelector(".message").textContent = '📈Too high !'
        //     score--;
        //     document.querySelector(".score").textContent = score;
        //     // console.log(score)
        // }
        // else{
        //     document.querySelector(".message").textContent = '😥 You lost the game !'
        //     document.querySelector(".score").textContent = 0;
        // }
    // }   
    // else if(guessNumber < randomNumber){
    //     if(score > 1){
    //         document.querySelector(".message").textContent = '📉Too low !'
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //         // console.log(score)
    //     }else{
    //         document.querySelector(".message").textContent = '😥 You lost the game !'
    //         document.querySelector(".score").textContent = 0;

    //     }
         
    // }
})

// implementing game reset functionality so that player can make a new guess :

document.querySelector(".again").addEventListener('click', function(){
    // document.location.reload();
    document.querySelector(".number").textContent = "?";
    score = 20;
    document.querySelector(".score").textContent = score;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector(".message").textContent = `Start guessing...`
    displayMessage("Start guessing...")
    document.querySelector(".guess").value = ''
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").width = "15rem"

})
