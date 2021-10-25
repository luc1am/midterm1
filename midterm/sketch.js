var thingList; //user things
var feelSlider;
var desc;
var button;
//files
var poemTemp;
var poem ={
  template: "",
  userThings: [], //array of string "thingList"
  generate: function(){ pass; },
  display: function(){ pass; },
}

//obtain basic poem file
function preload(){
  //havent yet created the file, poetry is hard
  //poemTemp = loadStrings("temp.txt");
}

function setup() {
  createCanvas(windowWidth,500);

  thingList = createInput("give me some things")
  thingList.position(100,100);

  //returns happiness level
  //createSlider(min,max, start)
  feelSlider = createSlider(0,100,50);
  feelSlider.position(100,50);

  desc = createP("sad /\t/ happy");
  desc.position(135,20);

  button = createButton("create Poem");
  button.mousePressed(formulatePoem);

}

function draw() {
  background(200,150,180);
  fill(100,200,200,80);
  noStroke();
  rect(windowWidth/2, 250, windowWidth-50, 450);
  rectMode(CENTER);
  fill(0);
  text("please separate by comma", 100,133)
  //poem.display();
}

//not sure yet if I will generate poem in Object
//or outside of it
function formulatePoem(){
  //make user input into an array
  var things = thingList.value().split(',');

}

function restart(){
  clearCanvas();
  background(200,150,180);
}
