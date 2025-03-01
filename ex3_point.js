class Point {
    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
    }
    affiche(){
        console.log(` [ ${this.x},${this.y} ]`)

    }
}
class Segment{
    constructor(orig2,orig1,extrem2,extrem1){
        this.orig=new Point(orig1,orig2);
        this.extrem= new Point(extrem1,extrem2);
        
    }
    affiche(){

    console.log("Segment : ");
    console.log("Origine :");
    this.orig.affiche();  
    console.log("Extrémité :");
    this.extrem.affiche();  
    }
}
let p1=new Point(1,3);
let S1= new Segment(1,2,4,7);
p1.affiche();
S1.affiche();