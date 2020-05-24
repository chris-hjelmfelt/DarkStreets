let pWait = false, eWait = false;
let pHitWidthDefault = 200, eHitWidthDefault = 200;
let pHitWidth = pHitWidthDefault, eHitWidth = eHitWidthDefault;
let pDamage = 0, eDamage = 0;


function playerAttack(attackNum) {
  if (pWait == false){ // enough time has passed between hits
    pWait = true;            
    if (attackNum == "1"){ 
      pDamage = 10;    
      changePlayerStance("P2");
      setTimeout(changePlayerStance.bind(null, "P1"), 200);
      setTimeout(function(){pWait = false;}, 400); // delay before another hit  
    } else if (attackNum == "2"){ 
      pDamage = 20;
      changePlayerStance("P4");
      setTimeout(changePlayerStance.bind(null, "P3"), 50);
      setTimeout(changePlayerStance.bind(null, "P4"), 200);
      setTimeout(changePlayerStance.bind(null, "P2"), 250);
      setTimeout(changePlayerStance.bind(null, "P1"), 400);
      setTimeout(function(){pWait = false;}, 600); // delay before another hit  
    }    
    // check to see if player hit enemy
    setTimeout(pHitCheck, 200);    
  }
}


function pHitCheck() {
  if (hitTestRectangle(playerEdge, enemy)) {  
    eHitWidth =  eHitWidth - pDamage;
    eHitPoints.clear();
    eHitPoints.beginFill(0xDE3249);
    eHitPoints.drawRect(550, 41, eHitWidth, 18);
    eHitPoints.endFill();   
    if (eHitWidth <= 0){
      mainMessage.text = "You Win!";
      eHitPoints.clear();
      eHitPoints.beginFill(0xDE3249);
      eHitPoints.drawRect(550, 41, 0, 18);
      eHitPoints.endFill();
      endGame();
    }
  }
}


function changePlayerStance(move){
  if (move == "P1") {
    player1.x = player.x;
    player1.y = player.y;
    player1.visible = true;  
    player = player1;     
    player2.visible = false;
    player3.visible = false;
    player4.visible = false;
  } else if (move == "P2") {
    player2.x = player.x;
    player2.y = player.y;     
    player2.visible = true; 
    player = player2;
    player1.visible = false;
    player3.visible = false;
    player4.visible = false;
  } else if (move == "P3") {
    player3.x = player.x;
    player3.y = player.y; 
    player3.visible = true; 
    player = player3;
    player1.visible = false;
    player2.visible = false;
    player4.visible = false;
  } else if (move == "P4") {
    player4.x = player.x;
    player4.y = player.y; 
    player4.visible = true; 
    player = player4;
    player1.visible = false;
    player2.visible = false;
    player3.visible = false;
  }
}


function endGame() {  
  mainMessage.visible = true;
  playTime = false;  
  defaultPositions();
  if (mainMessage.text == "You Win!") {
    if (round == "Round 1") {
      round = "Round 2"
      enemyNum = 2;
      startDelay = -100;
      playTime = true
      eSpear = spear4;
      spear4.visible = true;	
      spear3.visible = false;	
    } else if (round == "Round 2") {
      round = "Round 3"
      enemyNum = 3;
      startDelay = -100;
      playTime = true
      eSpear = spear2;
      spear2.visible = true;	
      spear4.visible = false;	
    } else if (round == "Round 3") {
      setTimeout(finish, 1000);
    }
  } else {
    setTimeout(finish, 1000);
  }
  
}


// reset HitPoints
function resetRound() {
  pHitWidth = pHitWidthDefault;
  pHitPoints.clear();
  pHitPoints.beginFill(0xDE3249);
  pHitPoints.drawRect(50, 41, pHitWidth, 18);
  pHitPoints.endFill();
  eHitWidth = eHitWidthDefault;  
  eHitPoints.clear();
  eHitPoints.beginFill(0xDE3249);
  eHitPoints.drawRect(550, 41, eHitWidth, 18);
  eHitPoints.endFill();  
  pWait = false; 
  eWait = false;
}


// Take player to an end screen
function finish() {
  console.log(mainMessage.text)
  if (mainMessage.text == "You Win!") {
    window.location.href = "won.html";
  } else {
    window.location.href = "lost.html";
  }
}