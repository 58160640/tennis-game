function TennisGame(){
  this.reset = ()=>{

  }
  this.echo = ()=>{
    return "Love-Love"

  }
}
test('echo"Love-Love" when press reset button',()=>{
  // AArrange
  let app = new TennisGame()

  // act
  app.reset()
  let result = app.echo()

  // assert
  expect(result).toBe('Love-Love')
})
