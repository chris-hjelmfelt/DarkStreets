
function enemyAttack() {
  if (eWait == false){ // enough time has passed between hits
    if ((enemy.x - player.x < 70) && (Math.abs(enemy.y - player.y) < 50)){ // Swing weapon when in good position
      eWait = true;
      stance = Math.floor(Math.random()*5 + 1);
      if (stance <= 2){  // default
        changeEnemyStance("E2");
        if (enemyNum == 1) {
          eDamage = 12;
        } else if (enemyNum == 2){
          eDamage = 20;
        } else if (enemyNum == 3){
          eDamage = 20;
        }        
      } else {      
        changeEnemyStance("E3");
        if (enemyNum == 1) {
          eDamage = 5;
        } else if (enemyNum == 2){
          eDamage = 10;
        } else if (enemyNum == 3){
          eDamage = 18;
        } 
        setTimeout(changeEnemyStance.bind(null, "E4"), 200);   
        setTimeout(changeEnemyStance.bind(null, "E2"), 350);       
      }             
      // set enemy to defaults
      setTimeout(changeEnemyStance.bind(null, "E1"), 400);
      setTimeout(function(){eWait = false;}, 800);
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



function changeEnemyStance(move){
  if (move == "E1") {
    enemyArray[0].x = enemy.x;
    enemyArray[0].y = enemy.y;
    enemyArray[0].visible = true;  
    enemy =  enemyArray[0];     
    enemyArray[1].visible = false;
    enemyArray[2].visible = false;
    enemyArray[3].visible = false;
    // check to see if enemy hit player
    setTimeout(eHitCheck, 10);
  } else if (move == "E2") {
    enemyArray[1].x = enemy.x;
    enemyArray[1].y = enemy.y;     
    enemyArray[1].visible = true; 
    enemy = enemyArray[1];
    enemyArray[0].visible = false;
    enemyArray[2].visible = false;
    enemyArray[3].visible = false;
  } else if (move == "E3") {
    enemyArray[2].x = enemy.x;
    enemyArray[2].y = enemy.y; 
    enemyArray[2].visible = true; 
    enemy = enemyArray[2];
    enemyArray[0].visible = false;
    enemyArray[1].visible = false;
    enemyArray[3].visible = false;
  } else if (move == "E4") {
    enemyArray[3].x = enemy.x;
    enemyArray[3].y = enemy.y; 
    enemyArray[3].visible = true; 
    enemy = enemyArray[3];
    enemyArray[0].visible = false;
    enemyArray[1].visible = false;
    enemyArray[2].visible = false;
  }
}