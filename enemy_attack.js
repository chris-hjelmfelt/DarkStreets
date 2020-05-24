
function enemyAttack() {
  if (eWait == false){ // enough time has passed between hits
    if ((enemy.x - player.x < 110) && (Math.abs(enemy.y - (player.y - 150)) < 50)){ // Swing weapon when in good position
      eWait = true;
      stance = Math.floor(Math.random()*5 + 1);
      if (stance > 1){      
        changeEnemyStance("E2");
        if (enemyNum == 1) {
          eDamage = 10;
        } else if (enemyNum == 2){
          eDamage = 20;
        } else if (enemyNum == 3){
          eDamage = 35;
        }        
      } else {  // default
        eThrust = -150;  
        if (enemyNum == 1) {
          eDamage = 25;
        } else if (enemyNum == 2){
          eDamage = 40;
        } else if (enemyNum == 3){
          eDamage = 40;
        }
      }             
      // set enemy to defaults
      setTimeout(enemyReturn, 400);
    }
  }
}


function eHitCheck() {
  if (hitTestRectangle(enemyEdge, hitbox)) {  
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
    eThrust = eThrustDefault;
    eHitCheck();
  } else {    
    changeEnemyStance("E1");
  }
  setTimeout(function(){eWait = false;}, 800);
}


function changeEnemyStance(move){
  if (move == "E1") {
    enemy1.x = enemy.x;
    eArm1.x = enemy2.x;
    enemy1.y = enemy.y; 
    eArm1.y = enemy2.y;
    enemy2.visible = false;
    eArm2.visible = false;
    enemy1.visible = true;    
    eArm1.visible = true;  
    eSpearPlaceX = esDefaultX;
    eSpearPlaceY = esDefaultY;
    eSpear.rotation = 0;
    enemy = enemy1;
    enemyArm = eArm1;
    // check to see if enemy hit player
    setTimeout(eHitCheck, 10);
  } else if (move == "E2") {
    enemy2.x = enemy.x;
    eArm2.x = enemy2.x;
    enemy2.y = enemy.y; 
    eArm2.y = enemy2.y;
    enemy1.visible = false;
    eArm1.visible = false;
    enemy2.visible = true;    
    eArm2.visible = true;  
    eSpearPlaceX = 85;
    eSpearPlaceY = 45;
    eSpear.rotation = 2.55;
    enemy = enemy2;
    enemyArm = eArm2;
  }
}