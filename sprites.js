// Load Sprites
function addSprites() {
  //Use tilesets to get all sprites			
  //Create the `tileset` sprite from the texture and
  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture

  let city = new PIXI.Texture(loader.resources["Assets/NoirCity.png"].texture﻿, new PIXI.Rectangle(0, 0, 1197, 1061));
  background = new Sprite(city); 
  background.x = 0;
  background.y = 0; 
  background.scale.x = .7;
  background.scale.y = .6;
  app.stage.addChild(background);  

  let hb = new PIXI.Texture(loader.resources["Assets/HitBox.png"].texture﻿, new PIXI.Rectangle(0, 0, 50, 120));
  playerhitbox = new Sprite(hb); 
  playerhitbox.x = 0;
  playerhitbox.y = 0; 
  playerhitbox.anchor.x = 0;
  playerhitbox.anchor.y = 0;	 
  app.stage.addChild(playerhitbox);  
  enemyhitbox = new Sprite(hb); 
  enemyhitbox.x = 0;
  enemyhitbox.y = 0; 
  enemyhitbox.anchor.x = 0;
  enemyhitbox.anchor.y = 0;	 
  app.stage.addChild(enemyhitbox);  

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
  player1.x = 100;
  player1.y = 500;			
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
  player2.x = 100;
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
  player3.x = 100;
  player3.y = 500;	  		
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
  player4.x = 100;
  player4.y = 500;	  		
  player4.scale.x = 0.6;
  player4.scale.y = 0.6;		
  player4.vx = 0;
  player4.vy = 0;		
  player4.anchor.x = 0.5;
  player4.anchor.y = 1;
  player4.visible = false; 	
  app.stage.addChild(player4);  

  // Get Enemy Sprites
  let enemies1 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(0, 0, 400, 400));
  enemy1 = new Sprite(enemies1);			
  enemy1.x = 500;
  enemy1.y = 500;			
  enemy1.vx = 0;
  enemy1.vy = 0;	
  enemy1.scale.x = 0.6;
  enemy1.scale.y = 0.6;	    
  enemy1.anchor.x = 0.5;
  enemy1.anchor.y = 1;
  app.stage.addChild(enemy1);

  let enemies2 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(800, 0, 400, 400));
  enemy2 = new Sprite(enemies2);			
  enemy2.x = 500;
  enemy2.y = 500;			
  enemy2.vx = 0;
  enemy2.vy = 0;	
  enemy2.visible = false;		
  enemy2.scale.x = 0.6;
  enemy2.scale.y = 0.6;
  enemy2.anchor.x = 0.5;
  enemy2.anchor.y = 1;
  app.stage.addChild(enemy2);

  player = player1;
  enemy = enemy1; 
}

function newEnemySprites(round) {
  if (round != 'Round 1') {
    enemy1.visible = false;
    if (round == 'Round 2') {
      enemies1 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(0, 400, 400, 400));
      enemies2 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(800, 400, 400, 400));    
    } else if (round == 'Round 3') {
      enemies1 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(0, 800, 400, 400));
      enemies2 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(800, 800, 400, 400));    
    }
    enemy1 = new Sprite(enemies1);			
    enemy1.x = 500;
    enemy1.y = 500;			
    enemy1.vx = 0;
    enemy1.vy = 0;	
    enemy1.scale.x = 0.6;
    enemy1.scale.y = 0.6;	    
    enemy1.anchor.x = 0.5;
    enemy1.anchor.y = 1;    
    app.stage.addChild(enemy1);

    enemy2 = new Sprite(enemies2);			
    enemy2.x = 500;
    enemy2.y = 500;			
    enemy2.vx = 0;
    enemy2.vy = 0;	
    enemy2.visible = false;		
    enemy2.scale.x = 0.6;
    enemy2.scale.y = 0.6;    
    enemy2.anchor.x = 0.5;
    enemy2.anchor.y = 1;
    app.stage.addChild(enemy2);

    enemy = enemy1;
  }
}