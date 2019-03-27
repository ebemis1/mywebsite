var sunY = 238.5
var sunRadius = 167/2

function setup() {
  createCanvas(500, 500);
}

function draw() {
  
  //sky
  background(0,187,214);
  
  //sun
  stroke(248,219,148)
  strokeWeight(14)
  fill(244,187,58)
  circle(322.5,sunY,sunRadius)
  
  //ground
  noStroke()
  fill(176,126,9)
  rect(0,height/2,width,height/2)
  
  //mountain
  noStroke()
  fill(214,86,43)
  beginShape()
    vertex(121,352)
    vertex(256,81)
    vertex(390,352)
  endShape(close)
  
  sunY = sunY-1
if (sunY <= 0-sunRadius){sunY = 500} 

}