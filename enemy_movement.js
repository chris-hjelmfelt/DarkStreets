let lastDir = 2; // last direction the enemy was traveling (don't change directions constantly)
let xupdownx = 0;
let barrier = 50

function enemyMove() {
  let moveDir = Math.floor(Math.random()*100 + 1);  // which direction to move (1-8 is a new dir. 9-100 is the same as previous)
  let newX = 0, newY = 0;
  let wall = false;    // is it backed up against the wall?
  if (enemyNum == 1) {
    let updown = 0; // whether to move up and down to match player location

    if ((player.x + barrier) > enemy.x) { // try to stay to the right of the player
      enemy.x += 5
      lastDir = 1;
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
      if (moveDir <= 4) {
        newY = -5;
        lastDir = 1;
      } else if (moveDir == 5) {
        newX = 5;
        lastDir = 5;
      } else if (moveDir == 6) {
        newY = 5;
        lastDir = 6;
      } else if (moveDir <= 8){
        newX = -5;
        lastDir = 8;
      }      

      enemy.x += newX;
      enemy.y += newY;

      checkBoundaries();
      
    }
  } else if (enemyNum == 2) {
    xupdownx += 1;
    if ((player.x + barrier) > enemy.x) { // try to stay to the right of the player
      enemy.x += 5
      lastDir = 2;
      wall = false;
    } else if ((player.y - 180) > enemy.y && xupdownx >= 3){ // preference for trying to line up with the player
      enemy.y += 5;      
    } else if ((player.y - 180) < enemy.y && xupdownx >= 3){
      enemy.y += -5
    } else {    
      xupdownx = 0;
      if (moveDir > 12){ // give preference to the direction traveled last
        if (wall == true)
          moveDir = 1; 
        else
          moveDir = lastDir;
      }
  
      // place to move to next
      if ((player.x + barrier) < enemy.x && moveDir <= 5) {
        newX = -5;
        lastDir = 1;
      } else if (moveDir <= 7) {
        newY = -5;
        lastDir = 6;
      } else if (moveDir <= 9) {
        newY = 5;
        lastDir = 8;
      } else if (moveDir <= 12){
        newX = 5;
        lastDir = 10;
      }      
  
      enemy.x += newX;
      enemy.y += newY;

      checkBoundaries();
    }
  } else if (enemyNum == 3) {
    xupdownx += 1;
    if ((player.x + barrier) > enemy.x) { // try to stay to the right of the player
      enemy.x += 5
      lastDir = 2;
      wall = false;
    } else if ((player.y - 180) > enemy.y && xupdownx >= 2){ // preference for trying to line up with the player
      enemy.y += 5;      
    } else if ((player.y - 180) < enemy.y && xupdownx >= 2){
      enemy.y += -5
    } else {    
      xupdownx = 0;
      if (moveDir > 20){ // give preference to the direction traveled last
        if (wall == true)
          moveDir = 1; 
        else
          moveDir = lastDir;
      }
  
      // place to move to next
      if ((player.x + barrier) < enemy.x && moveDir <= 17) {
        newX = -5;
        lastDir = 1;
      } else if (moveDir == 18) {
        newY = -5;
        lastDir = 18;
      } else if (moveDir == 19) {
        newY = 5;
        lastDir = 19;
      } else if (moveDir == 20){
        newX = 5;
        lastDir = 20;
      }      
  
      enemy.x += newX;
      enemy.y += newY;

      checkBoundaries();  
    }
  }
  enemyhitbox.x = enemy.x + 30;
  enemyhitbox.y = enemy.y - 155;
  enemyEdge.x = enemy.x - 85;
  enemyEdge.y = enemy.y - 60;
} 

// stop enemy at the given boundaries 
function checkBoundaries() {  
  if (enemy.x > 710)	{		
    enemy.x = 710;
    wall = true;
  } else if (enemy.y > 600) {  
    enemy.y = 600;
    wall = true;
  } else if (enemy.x < 270)	{		
    enemy.x = 270;
    wall = true;
  } else if (enemy.y < 500) {
    enemy.y = 500;
    wall = true;
  } else  {
    wall = false;	
  }   
}