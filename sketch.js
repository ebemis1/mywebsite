//i am going to shit bricks if this doesn't start working right 
//coords txt (540.289,461.836,93.577,22.827)

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
var speed2 = 0.5
var speed3 = 0.5
var speed4 = 0.5 

function setup() {
    var canvas = createCanvas(windowWidth, 500);
    
}

function draw() {
  background(131,184,195);
  
//the yellow things
fill(255,253,158)
  noStroke()
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
    fill(173,234,166)
    stroke(173,234,166)
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
        noStroke()
        //stroke(226,226,218)
        strokeWeight(3)
  
  //petals clockwise starting from top 
  //fuck me the angled ones dont work 
  //you gotta connect the first and last vertex UUUUUU
  
    //petal1
      rect(225.123, 3.467, 38.944, 85.528)
    //petal2
        beginShape()
         vertex(272.17, 89.85)
         vertex(333.996, 31.241)
         vertex(360.272, 58.96)
         vertex(298.44, 117.57)
         vertex(272.17, 89.85)
        endShape()
    //petal3
      rect(297.26, 121.483, 86.185, 40.457)
    //petal4
        beginShape()
          vertex(298.443, 169.773)
          vertex(360.273, 228.384)
          vertex(333.996, 256.103)
          vertex(272.167, 197.493)
          vertex(298.443, 169.773)
        endShape()
    //petal5
      rect(225.123, 199.223, 38.944, 85.528)
    //petal6
        beginShape()
          vertex(215.045, 197.492)
          vertex(153.216, 256.104)
          vertex(126.94, 228.385)
          vertex(188.768, 169.773)
          vertex(215.045, 197.492)
        endShape()
    //petal7
    rect(104.555, 121.483, 86.185, 40.457)
    //petal8
        beginShape()
          vertex(188.768, 117.572)
          vertex(126.94, 58.96)
          vertex(153.217, 31.241)
          vertex(215.045, 89.853)
          vertex(188.768, 117.572)
        endShape()
  
  //these are going to be the rotated petals
  //petals are clockwise starting from the top right
            //petalr1
              beginShape()
                  vertex(247.552,86.063)
                  vertex(279.149, 6.944)
                  vertex(314.619,21.11)
                  vertex(283.023,100.228)
                  vertex(247.552,86.063)
              endShape()
            //petalr2
              beginShape()
                  vertex(290.066,104.404)
                  vertex(369.497,73.602)
                  vertex(383.306,109.213)
                  vertex(303.875,140.015)
                  vertex(290.066,104.404)
              endShape()
            //petalr3
              beginShape()
                  vertex(300.434, 145.292)
                  vertex(380.105, 175.467)
                  vertex(366.577,211.186)
                  vertex(286.906, 181.011)
                  vertex(300.434, 145.292)
              endShape()
            //petalr4
              beginShape()
                  vertex(284.087,188.32)
                  vertex(319.086,265.994)
                  vertex(284.264,281.684)
                  vertex(249.264, 204.011)
                  vertex(284.087,188.32)
              endShape()
            //petalr5
              beginShape()
                  vertex(240.418, 202.257)
                  vertex(208.821, 281.376)
                  vertex(173.351, 267.21)
                  vertex(204.947, 188.092)
                  vertex(240.418, 202.257)
              endShape()
            //petalr6
              beginShape()
                  vertex(196.405, 182.358)
                  vertex(116.974, 213.16)
                  vertex(103.165, 177.549)
                  vertex(182.596, 146.747)
                  vertex(196.405, 182.358)
              endShape()
            //petalr7
               beginShape()
                  vertex(188.253,138.141)
                  vertex(108.581, 107.966)
                  vertex(122.109, 72.247)
                  vertex(201.781, 102.422)
                  vertex(188.253,138.141)
              endShape()
            //petalr8
               beginShape()
                  vertex(202.383, 98.442)
                  vertex(167.386, 20.768)
                  vertex(202.208, 5.078)
                  vertex(237.206, 82.752)
                  vertex(202.383, 98.442)
              endShape();
  noStroke()
  //center
  fill(255,215,130)
  circle(244, 143.403, 93.065/2)
  
  //circlethingthat makes it not ugly 
  noFill()
  stroke(255,255,255)
  strokeWeight(11)
  circle(243.915,143.336,111.165/2)
  
//leafbox1 animation
  if (LeafaY < 347.07){
  speed1 = 0.1
  }
  else if (LeafaY > 369){
  speed1 = -0.1
  }
  LeafaY = LeafaY + speed1
//leafbox2 animation
  if (LeafbY < 335){
  speed2 = 0.01 
  }
  else if (LeafbY > 345){
  speed2 = -0.01         
  }
   LeafbY = LeafbY + speed2
//leafbox3 animation
  if (LeafcY < 200.07){
  speed1 = 0.3
  }
  else if (LeafcY > 369.4){
  speed1 = -0.3 
  }
   LeafcY = LeafcY + speed1
//leafbox4 animation 
  if(LeafdY < 200.07){
  speed1 = 0.3
  }
  else if(LeafdY > 369.6){
  speed1 = -0.3
  }
   LeafdY = LeafdY + speed1
  
  noStroke()
  fill(255,255,255)
  textSize(24)
  text('Erin Bemis',480,461)
}

