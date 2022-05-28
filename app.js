const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  prevGuesses: [3, 5, 6, 9],
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      this.prevGuesses.reverse()
      while (this.prevGuesses[0] !== this.secretNum) {
        this.prevGuesses.unshift(this.getGuess())
      }
  },
  getGuess: function() {
    let guess
    while (guess > this.biggestNum || guess < this.smallestNum || isNaN(guess)) {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}!`))
    }
  },
}
game.play()
// game.getGuess()
