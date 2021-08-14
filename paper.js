class paper{
   constructor(x,y){
      var options={
    restitutio: 0.2,
    friction: 0,
    density: 0.3

      }
this.body=Bodies.circle(x,y,30)
World.add(world,this.body)
this.paperImage=loadImage("paper.png")
   }
display(){
var pos=this.body.position
imageMode (CENTER)
image(this.paperImage,pos.x,pos.y,80,80)





}







}
   