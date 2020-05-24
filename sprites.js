// Load Sprites
function addSprites() {
  //Use tilesets to get all sprites			
  //Create the `tileset` sprite from the texture and
  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture

  let city = new PIXI.Texture(loader.resources["Assets/NoirCity.png"].texture﻿, new PIXI.Rectangle(0, 0, 1200, 1061));
  background = new Sprite(city); 
  background.x = 0;
  background.y = 0; 
  background.scale.x = .7;
  background.scale.y = .6;
  app.stage.addChild(background);  

  let hb = new PIXI.Texture(loader.resources["Assets/HitBox.png"].texture﻿, new PIXI.Rectangle(0, 0, 50, 120));
  hitbox = new Sprite(hb); 
  hitbox.x = 0;
  hitbox.y = 0; 
  hitbox.anchor.x = 0;
  hitbox.anchor.y = 0;	 
  app.stage.addChild(hitbox);  

  let sharp = new PIXI.Texture(loader.resources["Assets/Pspear.png"].texture﻿, new PIXI.Rectangle(0, 0, 50, 5));
  playerEdge = new Sprite(sharp);			
  playerEdge.x = 480;
  playerEdge.y = 430;	  
  playerEdge.anchor.x = 0.5;
  playerEdge.anchor.y = 0.5;
  app.stage.addChild(playerEdge);
  enemyEdge = new Sprite(sharp);			
  enemyEdge.x = 480;
  enemyEdge.y = 430;	  
  enemyEdge.anchor.x = 0;
  enemyEdge.anchor.y = 0;
  app.stage.addChild(enemyEdge);

  // Get Player Sprites
  let players1 = new PIXI.Texture(loader.resources["Assets/Player01.png"].texture﻿, new PIXI.Rectangle(0, 0, 400, 400));
  //Create the player sprite from the texture
  player1 = new Sprite(players1);			
  //Position the player sprite on the canvas
  player1.x = 0;
  player1.y = 320;			
  player1.scale.x = 0.6;
  player1.scale.y = 0.6;
  // set its velocity
  player1.vx = 0;
  player1.vy = 0;		
  player1.anchor.x = 0.5;
  player1.anchor.y = 1;	 
  //Add the player to the stage
  app.stage.addChild(player1);

  let players2 = new PIXI.Texture(loader.resources["Assets/Player02.png"].texture﻿, new PIXI.Rectangle(0, 0, 400, 400));
  player2 = new Sprite(players2);			
  player2.x = 0;
  player2.y = 500;	  		
  player2.scale.x = 0.6;
  player2.scale.y = 0.6;		
  player2.vx = 0;
  player2.vy = 0;		
  player2.anchor.x = 0.4;
  player2.anchor.y = 1;
  player2.visible = false; 	
  app.stage.addChild(player2);

  let players3 = new PIXI.Texture(loader.resources["Assets/Player03.png"].texture﻿, new PIXI.Rectangle(0, 0, 400, 400));
  player3 = new Sprite(players3);			
  player3.x = 0;
  player3.y = 320;	  		
  player3.scale.x = 0.6;
  player3.scale.y = 0.6;		
  player3.vx = 0;
  player3.vy = 0;		
  player3.anchor.x = 0.5;
  player3.anchor.y = 1;
  player3.visible = false; 	
  app.stage.addChild(player3);

  let players4 = new PIXI.Texture(loader.resources["Assets/Player04.png"].texture﻿, new PIXI.Rectangle(0, 0, 400, 400));
  player4 = new Sprite(players4);			
  player4.x = 0;
  player4.y = 320;	  		
  player4.scale.x = 0.6;
  player4.scale.y = 0.6;		
  player4.vx = 0;
  player4.vy = 0;		
  player4.anchor.x = 0.5;
  player4.anchor.y = 1;
  player4.visible = false; 	
  app.stage.addChild(player4);  

  // Get Enemy Sprites
  let enemies1 = new PIXI.Texture(loader.resources["Assets/Enemy01.png"].texture﻿, new PIXI.Rectangle(0, 0, 150, 300));
  enemy1 = new Sprite(enemies1);			
  enemy1.x = 600;
  enemy1.y = 350;			
  enemy1.vx = 0;
  enemy1.vy = 0;	
  enemy1.scale.x = 0.6;
  enemy1.scale.y = 0.6;	    
  app.stage.addChild(enemy1);

  let enemies2 = new PIXI.Texture(loader.resources["Assets/Enemy02.png"].texture﻿, new PIXI.Rectangle(0, 0, 150, 300));
  enemy2 = new Sprite(enemies2);			
  enemy2.x = 600;
  enemy2.y = 350;			
  enemy2.vx = 0;
  enemy2.vy = 0;	
  enemy2.visible = false;		
  enemy2.scale.x = 0.6;
  enemy2.scale.y = 0.6;
  app.stage.addChild(enemy2);

  // Enemy weapons
  let spears2 = new PIXI.Texture(loader.resources["Assets/WeaponSprites.png"].texture﻿, new PIXI.Rectangle(0, 80, 200, 20));
  spear2 = new Sprite(spears2);			
  spear2.x = 675;
  spear2.y = 420;	  
  spear2.anchor.x = 1;
  spear2.anchor.y = 0.5;
  spear2.visible = false;	
  app.stage.addChild(spear2);

 
  let spears3 = new PIXI.Texture(loader.resources["Assets/WeaponSprites.png"].texture﻿, new PIXI.Rectangle(0, 30, 200, 42));
  spear3 = new Sprite(spears3);			
  spear3.x = 675;
  spear3.y = 420;	  
  spear3.anchor.x = 0.9;
  spear3.anchor.y = 0.1;  
  app.stage.addChild(spear3);

  let spears4 = new PIXI.Texture(loader.resources["Assets/WeaponSprites.png"].texture﻿, new PIXI.Rectangle(0, 100, 200, 30));
  spear4 = new Sprite(spears4);			
  spear4.x = 675;
  spear4.y = 420;	  
  spear4.anchor.x = 0.9;
  spear4.anchor.y = 0.5;
  spear4.visible = false;	
  app.stage.addChild(spear4);


  // Enemy Arm Sprites
  let eArms1 = new PIXI.Texture(loader.resources["Assets/Enemy01arm.png"].texture﻿, new PIXI.Rectangle(0, 0, 150, 300));
  eArm1 = new Sprite(eArms1);			
  eArm1.x = 600;
  eArm1.y = 450;  
  eArm1.scale.x = 0.6;
  eArm1.scale.y = 0.6;	 
  app.stage.addChild(eArm1);

  let eArms2 = new PIXI.Texture(loader.resources["Assets/Enemy02arm.png"].texture﻿, new PIXI.Rectangle(0, 0, 150, 300));
  eArm2 = new Sprite(eArms2);			
  eArm2.x = 600;
  eArm2.y = 450;  
  eArm2.scale.x = 0.6;
  eArm2.scale.y = 0.6;	 
  eArm2.visible = false;  
  app.stage.addChild(eArm2);

  player = player1;
  enemy = enemy1;
  enemyArm = eArm1;
  eSpear = spear3;
}