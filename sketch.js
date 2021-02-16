
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter = 50;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	bobDiameter = width<height?width/7:height/7;
	let canvasMouse = Matter.Mouse.create(canvas.elt);
	canvasMouse.pixelRatio = pixelDensity();

	let options = {
		mouse:canvasMouse
	}
	mConstraint = Matter.MouseConstraint.create(engine,options);
	World.add(world,mConstraint);
	console.log(mConstraint);

	bob1 = new Pendulum(width/2-bobDiameter*2,height-bobDiameter,bobDiameter/2,"red");
	rope1 = new Sling(bob1.body,{x:width/2-bobDiameter*2,y:50});

	bob2 = new Pendulum(width/2-bobDiameter,height-bobDiameter,bobDiameter/2,"yellow");
	rope2 = new Sling(bob2.body,{x:width/2-bobDiameter,y:50});

	bob3 = new Pendulum(width/2,height-bobDiameter,bobDiameter/2,"purple");
	rope3 = new Sling(bob3.body,{x:width/2,y:50});

	bob4 = new Pendulum(width/2+bobDiameter,height-bobDiameter,bobDiameter/2,"blue");
	rope4 = new Sling(bob4.body,{x:width/2+bobDiameter,y:50});

	bob5 = new Pendulum(width/2+bobDiameter*2,height-bobDiameter,bobDiameter/2,"orange");
	rope5 = new Sling(bob5.body,{x:width/2+bobDiameter*2,y:50});

	Engine.run(engine);
}

function draw() {
  background(200);
  Engine.update(engine);


  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();

 
}
/*function mouseDragged(){
		Matter.Body.setPosition(bob1.body,{x:mouseX, y:mouseY});
}
*/

