class Piratasdocaribe {
    constructor(posX, posY, lar, alt, piratasPos){
        this.corpo = Bodies.rectangle(posX, posY, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.piratasPos = piratasPos;
        this.imagem = loadImage("./assets/boat.png");
        World.add(world,this.corpo);
    }

    mostrar(){
        var pos = this.corpo.position;
        var ang = this.corpo.angle;

        push();
        translate(pos.x, pos.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.imagem, 0, this.piratasPos, this.lar, this.alt);
        pop();
    }
    naomostrar(index){
        setTimeout(()=>{
            Matter.World.remove(world,mutiversso[index].corpo);
            delete mutiversso[index];
        },2000)

    }
}