let lastDir = 2; // last direction the enemy was traveling (don't change directions constantly)

function playerMove() {
  // stop player at the boundaries
  if (player.x > 500)			
    player.x = 500;
  if (player.y > 470)  
    player.y = 470;
  if (player.x < 0)			
    player.x = 0;
  if (player.y < 350)  
    player.y = 350;	

  // Place Spear
  pSpear.x = player.x + Pthrust;
  pSpear.y = player.y + 40;
}

function enemyMove() {
  let moveDir = Math.floor(Math.random()*100 + 1);  // which direction to move (1-8 is a new dir. 9-100 is the same as previous)
  let newX = 0, newY = 0;
  let wall = false;    // is it backed up against the wall?
  let updown = 0; // whether to move up and down to match player location

  if ((player.x + 150) > enemy.x) { // try to stay to the right of the player
    enemy.x += 5
    lastDir = 2;
    wall = false;
  } else if (player.y > enemy.y && updown == 20){ // preference for trying to line up with the player
    enemy.y += 5;
    updown = 0;
  } else if (player.y < enemy.y && updown == 20){
    enemy.y += -5
    updown = 0;
  } else {    
    if (moveDir > 8){ // give preference to the direction traveled last
      if (wall == true)
        moveDir = 1;
      else
        moveDir = lastDir;
    }

    // place to move to next
    if (moveDir <= 5) {
      newY = -5;
      lastDir = 1;
    } else if (moveDir == 6) {
      newX = 5;
      lastDir = 6;
    } else if (moveDir == 7) {
      newY = 5;
      lastDir = 7;
    } else if (moveDir == 8){
      newX = -5;
      lastDir = 8;
    }      

    enemy.x += newX;
    enemy.y += newY;

    // stop enemy at the boundaries
    if (enemy.x > 730)	{		
      enemy.x = 730;
      wall = true;
    } else if (enemy.y > 470) {  
      enemy.y = 470;
      wall = true;
    } else if (enemy.x < 220)	{		
      enemy.x = 220;
      wall = true;
    } else if (enemy.y < 350) {
      enemy.y = 350;
      wall = true;
    } else  {
      wall = false;	
    }   
  }
  // Place Spear
  eSpear.x = enemy.x + Ethrust;
  eSpear.y = enemy.y + 40;
} 

function defaultPositions() {
  player.x = 100;
  player.y = 350;
  pSpear.x = player.x + 40;
  pSpear.y = player.y + 40;
  enemy.x = 600;
  enemy.y = 350;
  eSpear.x = enemy.x - 80;
  eSpear.y = enemy.y + 40;
}