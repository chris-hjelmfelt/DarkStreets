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

  // Get player sprites
  let players1 = new PIXI.Texture(loader.resources["Assets/Player01.png"].texture﻿, new PIXI.Rectangle(0, 0, 400, 400));
  playerSprite1 = new Sprite(players1);	
  playerArray.push(playerSprite1);	
  let players2 = new PIXI.Texture(loader.resources["Assets/Player02.png"].texture﻿, new PIXI.Rectangle(0, 0, 400, 400));
  playerSprite2 = new Sprite(players2);
  playerArray.push(playerSprite2);
  let players3 = new PIXI.Texture(loader.resources["Assets/Player03.png"].texture﻿, new PIXI.Rectangle(0, 0, 400, 400));
  playerSprite3 = new Sprite(players3);
  playerArray.push(playerSprite3);
  let players4 = new PIXI.Texture(loader.resources["Assets/Player04.png"].texture﻿, new PIXI.Rectangle(0, 0, 400, 400));
  playerSprite4 = new Sprite(players4);
  playerArray.push(playerSprite4);

  for (i = 0; i < playerArray.length; i++) { 
    playerArray[i].x = 100;
    playerArray[i].y = 500;			
    playerArray[i].vx = 0;
    playerArray[i].vy = 0;	
    playerArray[i].scale.x = 0.6;
    playerArray[i].scale.y = 0.6;	    
    playerArray[i].anchor.x = 0.5;
    playerArray[i].anchor.y = 1;
    app.stage.addChild(playerArray[i]);
  }
  playerArray[1].anchor.x = 0.4;  // adjust stance 2
  playerArray[1].visible = false; 
  playerArray[2].visible = false; 
  playerArray[3].visible = false;   		
   

  // Get enemy sprites
  let enemies1 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(0, 0, 400, 400));
  enemySprite1 = new Sprite(enemies1);	
  enemyArray.push(enemySprite1);	
  let enemies2 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(400, 0, 400, 400));
  enemySprite2 = new Sprite(enemies2);
  enemyArray.push(enemySprite2);
  let enemies3 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(800, 0, 400, 400));
  enemySprite3 = new Sprite(enemies3);
  enemyArray.push(enemySprite3);
  let enemies4 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(1200, 0, 400, 400));
  enemySprite4 = new Sprite(enemies4);
  enemyArray.push(enemySprite4);
  for (i = 0; i < enemyArray.length; i++) { 
    enemyArray[i].x = 500;
    enemyArray[i].y = 500;			
    enemyArray[i].vx = 0;
    enemyArray[i].vy = 0;	
    enemyArray[i].scale.x = 0.6;
    enemyArray[i].scale.y = 0.6;	    
    enemyArray[i].anchor.x = 0.5;
    enemyArray[i].anchor.y = 1;
    app.stage.addChild(enemyArray[i]);
  }
  enemyArray[1].visible = false; 
  enemyArray[2].visible = false; 
  enemyArray[3].visible = false; 

  player = playerArray[0];
  enemy =  enemyArray[0]; 
}

function newEnemySprites(round) {
  if (round != 'Round 1') {
    // clear out the previous enemy
    enemyArray[0].visible = false;
    for (i = 0; i < enemyArray.length; i++) { 
      app.stage.removeChild(enemyArray[i]);
    }

    if (round == 'Round 2') {
      // Get new enemy sprites
      let enemies1 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(0, 400, 400, 400));
      enemySprite1 = new Sprite(enemies1);	
      enemyArray[0] = enemySprite1;	
      let enemies2 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(400, 400, 400, 400));
      enemySprite2 = new Sprite(enemies2);
      enemyArray[1] = enemySprite2;
      let enemies3 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(800, 400, 400, 400));
      enemySprite3 = new Sprite(enemies3);
      enemyArray[2] = enemySprite3;
      let enemies4 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(1200, 400, 400, 400));
      enemySprite4 = new Sprite(enemies4);
      enemyArray[3] = enemySprite4;    
    } else if (round == 'Round 3') {
      // Get new enemy sprites
      let enemies1 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(0, 800, 400, 400));
      enemySprite1 = new Sprite(enemies1);	
      enemyArray[0] = enemySprite1;	
      let enemies2 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(400, 800, 400, 400));
      enemySprite2 = new Sprite(enemies2);
      enemyArray[1] = enemySprite2;
      let enemies3 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(800, 800, 400, 400));
      enemySprite3 = new Sprite(enemies3);
      enemyArray[2] = enemySprite3;
      let enemies4 = new PIXI.Texture(loader.resources["Assets/EnemySprites01.png"].texture﻿, new PIXI.Rectangle(1200, 800, 400, 400));
      enemySprite4 = new Sprite(enemies4);
      enemyArray[3] = enemySprite4;
    }

    for (i = 0; i < enemyArray.length; i++) { 
      enemyArray[i].x = 500;
      enemyArray[i].y = 500;			
      enemyArray[i].vx = 0;
      enemyArray[i].vy = 0;	
      enemyArray[i].scale.x = 0.6;
      enemyArray[i].scale.y = 0.6;	    
      enemyArray[i].anchor.x = 0.5;
      enemyArray[i].anchor.y = 1;
      app.stage.addChild(enemyArray[i]);
    }
    enemyArray[1].visible = false; 
    enemyArray[2].visible = false; 
    enemyArray[3].visible = false; 

    enemy = enemyArray[0] ;
  }
}