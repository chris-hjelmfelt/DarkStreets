
function enemyAttack() {
  if (eWait == false){ // enough time has passed between hits
    if ((enemy.x - player.x < 70) && (Math.abs(enemy.y - player.y) < 50)){ // Swing weapon when in good position
      eWait = true;
      stance = Math.floor(Math.random()*5 + 1);
      if (stance > 1){      
        changeEnemyStance("E2");
        if (enemyNum == 1) {
          eDamage = 5;
        } else if (enemyNum == 2){
          eDamage = 10;
        } else if (enemyNum == 3){
          eDamage = 18;
        }        
      } else {  // default
        if (enemyNum == 1) {
          eDamage = 12;
        } else if (enemyNum == 2){
          eDamage = 20;
        } else if (enemyNum == 3){
          eDamage = 20;
        }
      }             
      // set enemy to defaults
      setTimeout(enemyReturn, 400);
    }
  }
}


function eHitCheck() {
  if (hitTestRectangle(enemyEdge, playerhitbox)) {  
    pHitWidth =  pHitWidth - eDamage;
    pHitPoints.clear();
    pHitPoints.beginFill(0xDE3249);
    pHitPoints.drawRect(50, 41, pHitWidth, 18);
    pHitPoints.endFill();
    if (pHitWidth <= 0){
      mainMessage.text = "Game Over";
      pHitPoints.clear();
      pHitPoints.beginFill(0xDE3249);
      pHitPoints.drawRect(550, 41, 0, 18);
      pHitPoints.endFill();
      endGame();
    }
  }
}

function enemyReturn() {
  if (stance < 2){
    eHitCheck();
  } else {    
    changeEnemyStance("E1");
  }
  setTimeout(function(){eWait = false;}, 800);
}


function changeEnemyStance(move){
  if (move == "E1") {
    enemy1.x = enemy.x;
    enemy1.y = enemy.y; 
    enemy2.visible = false;
    enemy1.visible = true; 
    enemy = enemy1;
    // check to see if enemy hit player
    setTimeout(eHitCheck, 10);
  } else if (move == "E2") {
    enemy2.x = enemy.x;
    enemy2.y = enemy.y; 
    enemy1.visible = false;
    enemy2.visible = true; 
    enemy = enemy2;
  }
}