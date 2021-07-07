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
      renderError("Whoops! Please enter a number from 1 to 100!")
      return 
        }  else if (guess === secretNum) { 
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


  // function render() {
  //   const lastGuess = guessList[guessList.length - 1]
  //   const div = document.createElement("div")
  //   div.innerText = lastGuess
  
  //   if (guessList.length === 1) {
  //     prevGuessMsg.innerText = "Previous Guesses:"
  //     resetBtn.removeAttribute("hidden")
  //   }
  
  //   if (isWinner) {
  //     renderWin(div)
  //   } else if (lastGuess > secretNum || lastGuess < secretNum) {
  //     renderGuess(div, lastGuess)
  //   }
  // }

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
  



function renderError(error) { 
  messageEl.className = "error"
  messageEl.innerText = error 
}







