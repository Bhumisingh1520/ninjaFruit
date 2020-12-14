  var PLAY = 1;
  var END = 0;
  var gameState = PLAY;
  var fruit1, fruit2, fruit3, fruit4;
  var alein1, alein2;
  var Sword, SwordImage;
  var gameOver, gameOverImage;
  var score = 0;

  function preload() {
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
    
  alein1 = loadImage("alien1.png");
  alein2 = loadImage("alien2.png");

  SwordImage = loadImage("sword.png");

  gameOverImage = loadImage("gameover.png");  }


  function setup() {

  createCanvas(600, 600);

  fruitA1 = new Group();
  fruitA2 = new Group();
  fruitA3 = new Group();
  fruitA4 = new Group();
  objectA1 = new Group();
  objectA2 = new Group();

  Sword = createSprite(50, 250, 10, 80);
  Sword.addImage("Sword", SwordImage);

  gameOver = createSprite(300, 250, 10, 80);
  gameOver.addImage("gameOver", gameOverImage);
  gameOver.visible = false;

  Sword.setCollider("circle", 10, -20, 20);
  Sword.debug = false;      }

  function draw() {
  background("skyblue");
  text("Score: " + score, 270, 30);

  if (gameState === PLAY)        {
  if (Sword.isTouching(fruitA1)) {
  fruitA1.destroyEach();
  score = score + 1;             }

  if (Sword.isTouching(fruitA2)) {
  fruitA2.destroyEach();
  score = score + 3;             }

  if (Sword.isTouching(fruitA3)) {
  fruitA3.destroyEach();
  score = score + 5;             }

  if (Sword.isTouching(fruitA4)) {
  fruitA4.destroyEach();
  score = score + 2;             }
      
  var select_object = Math.round(random(1, 6));

  if (World.frameCount % 60 == 0)
  if (select_object == 1)      {
       redfruit();             }
  else if (select_object == 2) {
           greenfruit();       }
  else if (select_object == 3) {
          orangefruit();       }
  else if (select_object == 4) {
           yellowfruit();}
  else if (select_object == 5) {
           createAlein1();     }
  else if (select_object == 6) {
        createAlein2();        }
      
    
      Sword.y = World.mouseY;
      Sword.x = World.mouseX;  }


    if (gameState === END) {

      objectA1.destroyEach();
      objectA2.destroyEach();
      fruitA1.destroyEach();
      fruitA2.destroyEach();
      fruitA3.destroyEach();
      fruitA4.destroyEach();
      Sword.x = 50;
      Sword.y = 250;
      gameOver.visible = true;}

    if (Sword.isTouching(objectA1)) {
      gameState = END;              }

    if (Sword.isTouching(objectA2)) {
      gameState = END;              }

    drawSprites(); }

  function greenfruit() {
    var fruit = createSprite(Math.round(random(300, 400)), 40, 40);
    fruit.addImage(fruit1);
    fruit.velocityX = -15;
    fruit.lifetime = 300;
    fruit.scale = 0.2;
    fruit.x = 600;
    fruit.y = 400;
    fruitA1.add(fruit); }

  function yellowfruit() {
    var fruit = createSprite(Math.round(random(30, 300)), 30, 30);
    fruit.addImage(fruit2);
    fruit.velocityX = -15;
    fruit.lifetime = 300;
    fruit.scale = 0.2;
    fruit.x = 600;
    fruit.y = 300;
    fruitA2.add(fruit);  }

  function redfruit() {
    var fruit = createSprite(Math.round(random(20, 200)), 20, 20);
    fruit.addImage(fruit3);
    fruit.velocityX = -15;
    fruit.lifetime = 300;
    fruit.scale = 0.2;
    fruit.x = 600;
    fruit.y = 200;
    fruitA3.add(fruit); }

  function orangefruit() {
    var fruit = createSprite(Math.round(random(10, 100)), 10, 10);
    fruit.addImage(fruit4);
    fruit.velocityX = -15;
    fruit.lifetime = 300;
    fruit.scale = 0.2;
    fruit.x = 600;
    fruit.y = 100;
    fruitA4.add(fruit);  }


  function createAlein1() {
    var alein = createSprite(Math.round(random(10, 100)), 10, 10);
    alein.addImage(alein1);
    alein.velocityX = -8;
    alein.lifetime = 300;
    alein.scale = 1;
    alein.x = 600;
    alein.y = 50;
    objectA1.add(alein);  }


  function createAlein2() {
    var alein3 = createSprite(Math.round(random(10, 100)), 10, 10);
    alein3.addImage(alein2);
    alein3.velocityX = -8;
    alein3.lifetime = 300;
    alein3.scale = 1;
    alein3.x = 600;
    alein3.y = 500;
    objectA2.add(alein3);  }