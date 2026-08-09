/*
music app
1.playMusic()-hof
2 callbacks- playPop()
playRock()
playJazz()
3. because it takes in funtion as arguments,
4 recive callback
*/
function playPop() {
  console.log(`playing pop`);
}
function playRock() {
  console.log(`playing rock`);
}
function playJazz() {
  console.log(`playing jazz`);
}

function playMusic(callback) {
  return callback();
}
playMusic(playJazz);
playMusic(playRock);
playMusic(playPop);
