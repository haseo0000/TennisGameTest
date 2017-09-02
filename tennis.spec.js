function TennisGame(){
  this.reset = () => {

  }
  this.echo = () =>{
    return 'Love - Love'
  }

  this.playerAGetScore = () => {
    this.playerAScore++
  }
}



test('Echo "Love - Love" when game start', () => {
  //Arrange
  let app = new TennisGame()

  //Act
  app.reset()
  let result = app.echo()

  //Assest
  expect(result).toBe('Love - Love')
})



test('Echo "Fifteen - Love" when playerA gets first score', () => {
  //Arrange
  let app = new TennisGame()
  app.reset()
  app.playerAGetScore()

  //Act
  let result = app.echo()

  //Assest
  expect(result).toBe('Fifteen - Love')
})
