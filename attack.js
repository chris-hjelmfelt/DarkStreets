let pWait = false, eWait = false;
let eHitWidth = 200, pHitWidth = 200;;

function playerAttack(a) {
  //console.log(a)
  if (pWait == false){
    pWait = true;
    /*
    player2.x = player.x;
    player2.y = player.y;
    player1.visible = false;
    player2.visible = true;
    player = player2;
    */
    Pthrust = 90;  
    if (hitTestRectangle(pSpear, enemy)) {  // check for a collision between the player and the box
        eHitWidth =  eHitWidth - 10;
        eHitPoints.clear();
        eHitPoints.beginFill(0xDE3249);
        eHitPoints.drawRect(550, 41, eHitWidth, 18);
        eHitPoints.endFill();   
        if (eHitWidth <= 0){
          mainMessage.text = "You Win!";
          endGame();
        }    
    }	
    setTimeout(playerReturn, 200);
  }
}

function playerReturn() {
  Pthrust = 40;
  setTimeout(function(){pWait = false;}, 400);
}

function enemyAttack() {
  if (eWait == false){
    if ((enemy.x - player.x < 220) && (Math.abs(enemy.y - player.y) < 40)){
      eWait = true;
      /*
      enemy2.x = enemy.x;
      enemy2.y = enemy.y;
      enemy1.visible = false;
      enemy2.visible = true;
      enemy = enemy2;  
      */      
      Ethrust = -130;      
			if (hitTestRectangle(eSpear, player)) {  // check for a collision between the player and the box
        pHitWidth =  pHitWidth - 10;
        pHitPoints.clear();
        pHitPoints.beginFill(0xDE3249);
        pHitPoints.drawRect(50, 41, pHitWidth, 18);
        pHitPoints.endFill();
        if (pHitWidth <= 0){
          mainMessage.text = "Game Over";
          endGame();          
        } 
      }
      setTimeout(enemyReturn, 200);
    }
  }
}

function enemyReturn() {
  Ethrust = -80;
  setTimeout(function(){eWait = false;}, 500);
}

function endGame() {  
  mainMessage.visible = true;
  playTime = false;
  defaultPositions();
}