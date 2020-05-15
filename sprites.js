// Load Sprites
function addSprites() {
  //Use tilesets to get all sprites			
  //Create the `tileset` sprite from the texture and
  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture

  let city = new PIXI.Texture(loader.resources["Assets/Street.png"].texture﻿, new PIXI.Rectangle(0, 0, 400, 300));
  background = new Sprite(city); 
  background.x = 0;
  background.y = 0; 
  background.scale.x = 2;
  background.scale.y = 2;
  // add background
  app.stage.addChild(background);

  // Get Circle Sprite
  let shape = new PIXI.Texture(loader.resources["Assets/Circle.png"].texture﻿, new PIXI.Rectangle(0, 0, 100, 97));
  //Create the player sprite from the texture
  circle = new Sprite(shape);			
  //Position the player sprite on the canvas
  circle.x = 100;
  circle.y = 350;			
  // set its velocity
  circle.vx = 0;
  circle.vy = 0;			  
  //Add the player to the stage
  app.stage.addChild(circle);

  // Get Player Spear 
  let spear1 = new PIXI.Texture(loader.resources["Assets/Pspear.png"].texture﻿, new PIXI.Rectangle(0, 0, 150, 20));
  //Create the player sprite from the texture
  pSpear = new Sprite(spear1);			
  //Position the player sprite on the canvas
  pSpear.x = 200;
  pSpear.y = 300;	 
  //Add the player to the stage
  app.stage.addChild(pSpear);  

  // Get Player Sprites
  let players1 = new PIXI.Texture(loader.resources["Assets/Player01.png"].texture﻿, new PIXI.Rectangle(0, 0, 500, 250));
  //Create the player sprite from the texture
  player1 = new Sprite(players1);			
  //Position the player sprite on the canvas
  player1.x = 0;
  player1.y = 270;			
  // set its velocity
  player1.vx = 0;
  player1.vy = 0;			
  player1.visible = false;  
  //Add the player to the stage
  app.stage.addChild(player1);

  let players2 = new PIXI.Texture(loader.resources["Assets/Player02.png"].texture﻿, new PIXI.Rectangle(0, 0, 500, 250));
  //Create the player sprite from the texture
  player2 = new Sprite(players2);			
  //Position the player sprite on the canvas
  player2.x = 0;
  player2.y = 270;			
  // set its velocity
  player2.vx = 0;
  player2.vy = 0;		
  player2.visible = false; 	
  //Add the player to the stage
  app.stage.addChild(player2);

  let players3 = new PIXI.Texture(loader.resources["Assets/Player03.png"].texture﻿, new PIXI.Rectangle(0, 0, 500, 250));
  //Create the player sprite from the texture
  player3 = new Sprite(players3);			
  //Position the player sprite on the canvas
  player3.x = 0;
  player3.y = 270;			
  // set its velocity
  player3.vx = 0;
  player3.vy = 0;			
  player3.visible = false;  
  //Add the player to the stage
  app.stage.addChild(player3);

  // Get Enemy Sprites
  let enemies1 = new PIXI.Texture(loader.resources["Assets/Circle.png"].texture﻿, new PIXI.Rectangle(0, 0, 100, 97));
  enemy1 = new Sprite(enemies1);			
  enemy1.x = 600;
  enemy1.y = 350;			
  // set its velocity
  enemy1.vx = 0;
  enemy1.vy = 0;	    
  //Add the enemy to the stage
  app.stage.addChild(enemy1);

  let enemies2 = new PIXI.Texture(loader.resources["Assets/Enemy02.png"].texture﻿, new PIXI.Rectangle(0, 0, 500, 250));
  enemy2 = new Sprite(enemies2);			
  enemy2.x = 650;
  enemy2.y = 380;			
  // set its velocity
  enemy2.vx = 0;
  enemy2.vy = 0;	
  enemy2.visible = false;		
  enemy2.anchor.x = 0.5;
  enemy2.anchor.y = 0.5;
  enemy2.rotation = 3.14159;
  //Add the enemy to the stage
  app.stage.addChild(enemy2);

  let enemies3 = new PIXI.Texture(loader.resources["Assets/Enemy03.png"].texture﻿, new PIXI.Rectangle(0, 0, 500, 250));
  enemy3 = new Sprite(enemies3);			
  enemy3.x = 650;
  enemy3.y = 380;			
  // set its velocity
  enemy3.vx = 0;
  enemy3.vy = 0;			
  enemy3.anchor.x = 0.5;
  enemy3.anchor.y = 0.5;
  enemy3.rotation = 3.14159;
  enemy3.visible = false;  
  //Add the enemy to the stage
  app.stage.addChild(enemy3);

  // Get Enemy Spear
  let spear2 = new PIXI.Texture(loader.resources["Assets/Espear.png"].texture﻿, new PIXI.Rectangle(0, 0, 150, 20));
  //Create the player sprite from the texture
  eSpear = new Sprite(spear2);			
  //Position the player sprite on the canvas
  eSpear.x = 200;
  eSpear.y = 270;	  
  //Add the player to the stage
  app.stage.addChild(eSpear);

  player = circle;
  enemy = enemy1;
}