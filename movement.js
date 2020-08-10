
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

  playerhitbox.x = player.x - 30;
  playerhitbox.y = player.y - 75;
  playerEdge.x = player.x + 100;
  playerEdge.y = player.y - 60;
}

function defaultPositions() {
  player.x = 100;
  player.y = 500;
  playerhitbox.x = player.x - 30;
  playerhitbox.y = player.y - 75;
  playerEdge.x = player.x + 100;
  playerEdge.y = player.y - 60;
  enemy.x = 630;
  enemy.y = 500;
  enemyEdge.x = enemy.x - 85;
  enemyEdge.y = enemy.y - 60;
  enemyhitbox.x = enemy.x + 30;
  enemyhitbox.y = enemy.y - 80;
}