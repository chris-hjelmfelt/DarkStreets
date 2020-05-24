// KEYBOARD FOR MOVEMENT
//Capture the keyboard arrow keys
let left = keyboardHelper(37),
    up = keyboardHelper(38),
    right = keyboardHelper(39),
    down = keyboardHelper(40),
    wKey = keyboardHelper(87), // W
    dKey = keyboardHelper(68), // D
    sKey = keyboardHelper(83), // S
    aKey = keyboardHelper(65); // A
    hitKey1 = keyboardHelper(49);  // 1 (attack 1)
    hitKey2 = keyboardHelper(50);  // 2 (attack 2)

//Left arrow key `press` method
left.press = () => {
  //Change the player's velocity when the key is pressed
  player.vx = -5;
  player.vy = 0;
};
//Left arrow key `release` method
left.release = () => {
  //If the left arrow has been released, and the right arrow isn't down,
  //and the player isn't moving vertically:
  //Stop the player
  if (!right.isDown && player.vy === 0) {
    player.vx = 0;
  }
};

// Up
up.press = () => {
  player.vy = -5;
  player.vx = 0;
};
up.release = () => {
  if (!down.isDown && player.vx === 0) {
    player.vy = 0;
  }
};

// Right
right.press = () => {
  player.vx = 5;
  player.vy = 0;
};
right.release = () => {
  if (!left.isDown && player.vy === 0) {
    player.vx = 0;
  }
};

// Down
down.press = () => {
  player.vy = 5;
  player.vx = 0;
};
down.release = () => {
  if (!up.isDown && player.vx === 0) {
    player.vy = 0;
  }
};

// WASD Keys
wKey.press = () => {
  player.vy = -5;
  player.vx = 0;
};
wKey.release = () => {
  if (!down.isDown && player.vx === 0) {
    player.vy = 0;
  }
};

dKey.press = () => {
  player.vx = 5;
  player.vy = 0;
};
dKey.release = () => {
  if (!left.isDown && player.vy === 0) {
    player.vx = 0;
  }
};

sKey.press = () => {
  player.vy = 5;
  player.vx = 0;
};
sKey.release = () => {
  if (!up.isDown && player.vx === 0) {
    player.vy = 0;
  }
};

aKey.press = () => {  
  player.vx = -5;
  player.vy = 0;
}; 
aKey.release = () => {   
  if (!right.isDown && player.vy === 0) {
    player.vx = 0;
  }
};

hitKey1.press = () => {  
  playerAttack("1");
}; 
hitKey1.release = () => {   
 
};

hitKey2.press = () => {  
  playerAttack("2");
}; 
hitKey2.release = () => {   
 
};

//The `keyboard` helper function
function keyboardHelper(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };
  //The `upHandler`
  key.upHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };
  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}