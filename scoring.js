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