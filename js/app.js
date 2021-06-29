/*-------------------------------- Constants --------------------------------*/





/*-------------------------------- Variables --------------------------------*/
let secretNum, guessList, isWinner 




/*------------------------ Cached Element References ------------------------*/

//  referenceing things on the page so we can reference them in JS 
const form = document.querySelector("form")
const guessInput = document.querySelector("#guess-input")
const guessesEl = document.querySelector("#prev-guesses")
const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#reset-button")
const prevGuessMsg = document.querySelector("#prev-guesses-msg")



/*----------------------------- Event Listeners -----------------------------*/
//  resets button 
form.addEventListener('reset', init)

form.addEventListener('submit', function(evt) {
//  check the number to tell if there is a winner or not 
        evt.preventDefault()
        if (!isWinner) { 

                checkGuess(parseInt(guessInput.value))
        }
})

//  ParseInt must remember for assessment ******


/*-------------------------------- Functions --------------------------------*/

//  created a function to hold to reset information 
init()


function init() { 

    guessesEl.innerText = ""
	messageEl.innerText = "Please enter a number from 1 to 100"
	resetBtn.setAttribute("hidden", true)
	prevGuessMsg.innerText = ""
	guessList = []
	isWinner = false
	secretNum = Math.floor(Math.random() * 100 + 1)

    render()
}
//  sole purpose is to check the guess - resetting the field / checking if the number is too low or too high 
function checkGuess(guess) { 
    guessInput.value = ''
    //
    if (isNaN(guess) || guess < 1 || guess > 100) { 
        
}else if (guess === secretNum) {
renderError("Whoops! Please enter a number from 1 to 100!")
        return 
    } else if (guess === secretNum) { 
            isWinner = true 
    }
    guessList.push(guess)
    render()
} 


function render() {
    const lastGuess = guessList[guessList.length - 1]
    const div = document.createElement("div")
    div.innerText = lastGuess
  
    if (guessList.length === 1) {
      prevGuessMsg.innerText = "Previous Guesses:"
      resetBtn.removeAttribute("hidden")
    }
  
    if (isWinner) {
      renderWin(div)
    } else if (lastGuess > secretNum || lastGuess < secretNum) {
      renderGuess(div, lastGuess)
    }
  }


  function render() {
    const lastGuess = guessList[guessList.length - 1]
    const div = document.createElement("div")
    div.innerText = lastGuess
  
    if (guessList.length === 1) {
      prevGuessMsg.innerText = "Previous Guesses:"
      resetBtn.removeAttribute("hidden")
    }
  
    if (isWinner) {
      renderWin(div)
    } else if (lastGuess > secretNum || lastGuess < secretNum) {
      renderGuess(div, lastGuess)
    }
  }

  function renderError(error) {
        messageEl.className = "error"
        messageEl.innerText = error
  }

  function renderWin(div) { 
        messageEl.className = 'winner' 
        div.className = "winner"
        guessesEl.appendChild(div)
        if (guessList.length === 1) {
                messageEl.innerText = 'You found the number one guess!'
        } else { 
            messageEl.innerText = `Congratualations! You found the secret number ${secretNum} in ${guessList.length} guesses!`
        }


        }

        function renderGuess(div, lastGuess) {
            if (lastGuess < secretNum) {
              messageEl.className = "low"
              div.className = "low"
              messageEl.innerText = `${lastGuess} is too low, please try again!`
            } else if (lastGuess > secretNum) {
                // style it style it and push text to the screen 
              messageEl.className = "high"
              div.className = "high"
              messageEl.innerText = `${lastGuess} is too high, please try again!`
            }
            guessesEl.appendChild(div)
          }
  












// Version-1 

// const game = {
//     title: 'Guess the Number!',
//     biggestNum: 100,
//     smallestNum: 0,
//     secretNum: 0,
//     playersGuess: 0,
//     prevGuesses: [],


//     play: function () {
// //  letting user create the parameter of the lowest number and biggest number 
//       this.smallestNum = Number(prompt(`Please enter the smallest number for your range`))
//       this.biggestNum = Number(prompt(`Please enter the biggest number for your range`))
//       this.getRandomNum()

// //  
//       while (this.secretNum !== this.playersGuess){
//         this.playersGuess = Number(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
//         if (this.playersGuess > this.biggestNum) {
//           alert(`Please stay within the given range! The number you input is too big!`)
//         } 
//         else if (this.playersGuess < this.smallestNum) {
//           alert(`Please stay within the given range! The number you input is too small!`)
//         } 
//         else {
//         if (this.playersGuess > this.secretNum) {
//           alert(`Your guess is too high! Your previous guesses are ${this.prevGuesses}. Keep on trying!`)
//           this.prevGuesses.push(this.playersGuess)
//         } 
//         //  pushing into an array 
//         else if (this.playersGuess < this.secretNum) {
//           alert(`Your guess is too low! Your previous guesses are ${this.prevGuesses}. Keep on trying!`)
//           this.prevGuesses.push(this.playersGuess)
//         }
//       }}
//       return alert(`Congrats you win! You completed it in ${this.prevGuesses.length} guesses!`)
//     },

//     getRandomNum: function () {
//       this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
//       return this.secretNum
//     },
//   }
//   game.play()

//    