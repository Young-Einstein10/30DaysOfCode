// Cards
const cardsArray = [
  {
    name: '3ofDiamonds',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Playing_card_diamond_3.svg/800px-Playing_card_diamond_3.svg.png',
  },
  {
    name: '2ofDiamonds',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Playing_card_diamond_2.svg/800px-Playing_card_diamond_2.svg.png',
  },
  {
    name: 'AceOfDiamonds',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/800px-Playing_card_diamond_A.svg.png',
  },
  {
    name: '4ofDiamonds',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Playing_card_diamond_4.svg/800px-Playing_card_diamond_4.svg.png',
  },
  {
    name: '5ofDiamonds',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Playing_card_diamond_5.svg/800px-Playing_card_diamond_5.svg.png',
  },
  {
    name: '6ofDiamonds',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/800px-Playing_card_diamond_6.svg.png',
  },
  {
    name: '7ofDiamonds',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Playing_card_diamond_7.svg/800px-Playing_card_diamond_7.svg.png',
  },
  {
    name: '3ofSpades',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/800px-Playing_card_spade_3.svg.png',
  },
  {
    name: '4ofSpades',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/800px-Playing_card_spade_4.svg.png',
  },
  {
    name: '5ofSpades',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/800px-Playing_card_spade_5.svg.png',
  },
  {
    name: '6ofSpades',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/800px-Playing_card_spade_6.svg.png',
  },
  {
    name: '7ofSpades',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/800px-Playing_card_spade_7.svg.png',
  },
]

// Grab the div with an id of root
const game = document.getElementById('game')

// Grab Timer Elemrnt
const moveElem = document.querySelector('.moves');

// Create a section with a class of grid
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

// Append the grid section to the game div
game.appendChild(grid);

// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray)


// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random())

// For each item in the cardsArray array...
gameGrid.forEach(item => {
  // Create card element with the name dataset
  const card = document.createElement('div')
  card.classList.add('card')
  card.dataset.name = item.name

  // Create front of card
  const front = document.createElement('div')
  front.classList.add('front')

  // Create back of card, which contains
  const back = document.createElement('div')
  back.classList.add('back')
  back.style.backgroundImage = `url(${item.img})`

  // Append card to grid, and front and back to each card
  grid.appendChild(card)
  card.appendChild(front)
  card.appendChild(back)
})


let firstGuess = ''
let secondGuess = ''
let count = 0;
let previousTarget = null;
let delay = 1200;
let moves = gameGrid.length;

// Add event listener to grid
grid.addEventListener('click', function(event) {
  // Start Timer
  startCountDown();

  // The event target is our clicked item
  let clicked = event.target

  // Do not allow the grid section itself to be selected; only select divs inside the grid
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
    return
  }

  if (count < 2) {
    count++
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name
      console.log(firstGuess)
      clicked.parentNode.classList.add('selected')
    } else {
      secondGuess = clicked.parentNode.dataset.name
      console.log(secondGuess)
      clicked.parentNode.classList.add('selected')
    }
    // If both guesses are not empty...
    if (firstGuess !== '' && secondGuess !== '') {
      // and the first guess matches the second match...
      if (firstGuess === secondGuess) {
        setTimeout(() => {
          match()
          moves = moves - 2;
          moveElem.innerHTML = moves;
          console.log(moves);
          if(moves.length == 0) {
            alert('You Win')
            resetGame()
          }
        }, delay)
        setTimeout(resetGuesses, delay)
      } else {
        setTimeout(resetGuesses, delay)
      }
    }
    // Set previous target to clicked
    previousTarget = clicked;
  }
});


// Add match CSS
const match = () => {
  var selected = document.querySelectorAll('.selected')
  selected.forEach(card => {
    card.classList.add('match')
  })
}

// Reset Guess
const resetGuesses = () => {
  firstGuess = ''
  secondGuess = ''
  count = 0

  var selected = document.querySelectorAll('.selected')
  selected.forEach(card => {
    card.classList.remove('selected')
  })
}

const stopCountDown = () => {
  clearInterval(startCountDown)
}

const startCountDown = () => {
  const span1 = document.querySelector('.timer span:nth-child(1)')
  const span2 = document.querySelector('.timer span:nth-child(2)')

  let sec;
  let min;

  sec = Number(span2.textContent);
  min = Number(span1.textContent);

  setInterval(() => {
    sec++;
    if(sec == 60){
      min++
      sec = 00
    }
    span1.innerHTML = min < 10 ? `0${min}` : min;
    span2.innerHTML = sec < 10 ? `0${sec}`: sec;
  }, 1000)
}

const resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click', resetGame)

function resetGame() {
  window.location.href = "/"
}