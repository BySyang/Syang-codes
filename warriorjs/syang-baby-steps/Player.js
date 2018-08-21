class Player {
  playTurn(warrior) {
    warrior.think(warrior.health())
    if (warrior.health() < 20) {
      warrior.rest()
    } else if(warrior.health()===20){
      if (warrior.feel().isEmpty()) {
        warrior.walk();
      } else {
        warrior.attack()
      }
    }

  }
}
