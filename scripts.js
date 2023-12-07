const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');
  if (!hasFlippedCard) {
    // premier clique
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // deuxième clique
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  nombreEssai();
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
//
const time = document.querySelector(".time");
const trigger = document.querySelector(".trigger");

let timerInterval;
let timeElapsed = 0;

/**
 * Cette fonction permet de faire le chronomètre. C'est grâce à cela qu'on peut voir les secondes changer.
 * 
 * @param {integer} seconds C'est cette variable qui fait monter les secondes
 * @returns Ça retourne les minutes et les secondes du chronomètre
 */
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedMinutes}:${formattedSeconds}`;
};

/**
 * Cette variable permet que quand on pèse sur le bouton commencer le chronomètre commence et quand on pèse sur le bouton stop ça arrête
 */
const toggleTimer = () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        timeElapsed = 0;
        trigger.innerText = "Start";
    } 
    else {
        timerInterval = setInterval(() => {
            timeElapsed += 1;
            time.innerText = formatTime(timeElapsed);
        }, 1000);
        trigger.innerText = "Stop";
    }
};
//
trigger.addEventListener("click", toggleTimer);


//Cette fonction sert à calculer et à indiquer le nombre d'essaie
function nombreEssai(){
  console.log("test")

  let nombreEssai = document.getElementById("resultat");
  
}