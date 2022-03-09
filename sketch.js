const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var bolaborrachula;
var stone;


function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600, height, 1200, 20)
    hammer = new Hammer(10, 100);
    bolaborrachula = new Rubber(10, 10, 40);
    stone = new Stone(200,700,30,30);


}

function draw() {
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    bolaborrachula.display();
    hammer.display();
    stone.display();

}