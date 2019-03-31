
//leaving the leafvars in here bc i still wanna get the leaves moving i just dont know how yet and i don't really have time rn 

var LeafaX = 262.167
var LeafaY = 354.861
var LeafbX = 290.977
var LeafbY = 334.722
var LeafcX = 308.945
var LeafcY = 319.444
var LeafdX = 341.334
var LeafdY = 301.389

var recX = 44

var speed1 = 0.5

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(103,172,157);
  
//the yellow things
fill(255,253,158)
 
    //yellow1  
    beginShape()
  
      vertex(155.929, 134.821)
      vertex(208.588, 63.164)
      vertex(329.477, 151.984)
      vertex(276.829, 223.642)
    
    endShape()
  
    //yellow2
    beginShape()
  
      vertex(209.88, 225.239)
      vertex(157.231, 153.582)
      vertex(278.12, 64.761)
      vertex(330.769, 136.418)
  
    endShape()
  
//stem and leaf
    fill(97,203,90)
    stroke(97,203,90)
    strokeWeight(4)
    //stem
  rect(233.014,292.751, 22.861,0)
  rect(245.153,290.751, 0, 158.249)
  rect(242.118, 331.5, 0, 68.75)
  rect(248.049, 346.07, 0, 39.611)
    //leaf
  rect(LeafaX, LeafaY, 28.81, 15.278)
  rect(LeafbX, LeafbY, 27.778, 27.778)
  rect(LeafcX, LeafcY, 40.722, 26.625)
  rect(LeafdX, LeafdY, 42.111, 30.112)
  
//pot windowsill thing idk man
        fill(186,205,204)
        noStroke()
  rect(recX,445, 409,23)
  
  
//the petals i guess
  
        fill(255,255,255)
        stroke(226,226,218)
        strokeWeight(3)
  
  //petals clockwise starting from top 
  //fuck me the angled ones dont work 
  //you gotta connect the first and last vertex UUUUUU
    rect(225.123, 3.467, 38.944, 85.528)
  
      beginShape()
  
        vertex(272.17, 89.85)
        vertex(333.996, 31.241)
        vertex(360.272, 58.96)
        vertex(298.44, 117.57)
        vertex(272.17, 89.85)
  
      endShape()
  
    rect(297.26, 121.483, 86.185, 40.457)
  
      beginShape()
  
        vertex(298.443, 169.773)
        vertex(360.273, 228.384)
        vertex(333.996, 256.103)
        vertex(272.167, 197.493)
        vertex(298.443, 169.773)
  
      endShape()
  
    rect(225.123, 199.223, 38.944, 85.528)
  
      beginShape()
  
        vertex(215.045, 197.492)
        vertex(153.216, 256.104)
        vertex(126.94, 228.385)
        vertex(188.768, 169.773)
        vertex(215.045, 197.492)
  
      endShape()
  
    rect(104.555, 121.483, 86.185, 40.457)
  
      beginShape()
  
        vertex(188.768, 117.572)
        vertex(126.94, 58.96)
        vertex(153.217, 31.241)
        vertex(215.045, 89.853)
        vertex(188.768, 117.572)
  
      endShape()
  
  noStroke()
  //center
  fill(255,215,130)
  circle(242, 143.5, 93.065/2)
  
  if (recX > width-409){ 
    speed1 = -0.5
  }
  else if (recX < 0){
    speed1 = 0.5
  }
  recX = recX + speed1
}
