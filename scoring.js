// add bars to display remaining hitpoints
function addHealthBars() {
  const eHitBar= new PIXI.Graphics(); // Rectangle + line 
  eHitBar.lineStyle(2, 0x000000, 1);
  eHitBar.beginFill(0xFFFFFF);
  eHitBar.drawRect(550, 40, 200, 20);
  eHitBar.endFill();
  app.stage.addChild(eHitBar);

  eHitPoints = new PIXI.Graphics(); // Rectangle + line 
  eHitPoints.beginFill(0xDE3249);
  eHitPoints.drawRect(550, 41, 200, 18);
  eHitPoints.endFill();
  app.stage.addChild(eHitPoints);

  const pHitBar= new PIXI.Graphics(); // Rectangle + line 
  pHitBar.lineStyle(2, 0x000000, 1);
  pHitBar.beginFill(0xFFFFFF);
  pHitBar.drawRect(50, 40, 200, 20);
  pHitBar.endFill();
  app.stage.addChild(pHitBar);

  pHitPoints = new PIXI.Graphics(); // Rectangle + line 
  pHitPoints.beginFill(0xDE3249);
  pHitPoints.drawRect(50, 41, 200, 18);
  pHitPoints.endFill();
  app.stage.addChild(pHitPoints);
}


// Text Displays
function addMessages() {  
  playerHP = new PIXI.Text("Player HP ");
  playerHP.position.set(50, 10);
  playerHP.style = {fill: "Black", font: "14px PetMe64"};  
  app.stage.addChild(playerHP);

  enemyHP = new PIXI.Text("Enemy HP ");			
  enemyHP.position.set(550, 10);
  enemyHP.style = {fill: "Black", font: "14px PetMe64"}; 
  app.stage.addChild(enemyHP);

  mainMessage = new PIXI.Text("Game Over");
  mainMessage.anchor.x = 0.5;
  mainMessage.anchor.y = 0.5;
  mainMessage.position.set(400, 300);
  mainMessage.visible = false;
  mainMessage.style = {fill: "Black", fontSize: 60, fontWeight: 'bold', font: "PetMe64"};
  app.stage.addChild(mainMessage);   
     
  countMessage = new PIXI.Text("3");    
  countMessage.anchor.x = 0.5;
  countMessage.anchor.y = 0.5;
  countMessage.position.set(400, 400);
  countMessage.visible = false;
  countMessage.style = {fill: "Black", fontSize: 60, fontWeight: 'bold', font: "PetMe64"};
  app.stage.addChild(countMessage);  
}