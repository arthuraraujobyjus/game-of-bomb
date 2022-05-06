class Canhao {
    constructor(posX, posY){
        var options = {
            isStatic: true
        }
        this.r = 30;
        this.corpo = Bodies.circle(posX, posY, this.r, options);
        this.imagem = loadImage("./assets/cannonball.png");
        World.add(world,this.corpo);
    }
receba(){
    Matter.Body.setStatic(this.corpo,false);
    Matter.Body.setVelocity(this.corpo,{x:30,y:-20});
}
    mostrar(){
        var pos = this.corpo.position;
        push();
        imageMode(CENTER);
        image(this.imagem, pos.x, pos.y, this.r, this.r);
        pop();
    }
}