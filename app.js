const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  prevGuesses: [],
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum) {
      this.prevGuesses.push(this.getGuess())
      this.render()
      }
  },
  getGuess: function() {
    let guess
    while (guess > this.biggestNum || guess < this.smallestNum || isNaN(guess)) {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}!`))
    return guess
    }
  },
  render: function() {
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
      alert(`Congratulations! You guessed the number in ${this.prevGuesses.length} guesses!`)
    } else if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
      alert(`Your guess is too high! Previous guesses: ${this.prevGuesses}`)
    } else if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
      alert(`Your guess is too low! Previous guesses: ${this.prevGuesses}`)
    }
  }
}

game.play()