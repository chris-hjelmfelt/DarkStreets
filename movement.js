let esDefaultX = 185, esDefaultY = 100;
let eSpearPlaceX = esDefaultX, eSpearPlaceY = esDefaultY;
let eThrustDefault = -110, eThrust = eThrustDefault;

function playerMove() {
  // stop player at the boundaries
  if (player.x > 570)			
    player.x = 570;
  if (player.y > 600)  
    player.y = 600;
  if (player.x < 40)			
    player.x = 40;
  if (player.y < 500)  
    player.y = 500;	  

  hitbox.x = player.x - 30;
  hitbox.y = player.y - 150;
  playerEdge.x = player.x + 100;
  playerEdge.y = player.y - 60;
}

function defaultPositions() {
  player.x = 100;
  player.y = 500;
  hitbox.x = player.x - 30;
  hitbox.y = player.y - 150;
  playerEdge.x = player.x + 100;
  playerEdge.y = player.y - 60;
  enemy.x = 600;
  enemy.y = 320;
  enemyArm.x = enemy.x;
  enemyArm.y = enemy.y;
  eSpear.x = enemy.x + esDefaultX + eThrustDefault;  
  eSpear.y = enemy.y + esDefaultY;
  enemyEdge.x = enemy.x - 115;
  enemyEdge.y = enemy.y + 80;
}