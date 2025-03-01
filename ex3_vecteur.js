class Vecteur2D {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    affiche() {
        console.log( ` vecteur : x: ${this.x}, y: ${this.y}`);
    }
    add(v){
       let xa= this.x += v.x;
       let ya=this.y += v.y;
       return new Vecteur2D(xa,ya);
    }
}

let v1= new Vecteur2D(1, 2);
console.log(v1);
let v2= new Vecteur2D();
console.log(v2);
 // instancier et afficher la somme des deux vecteurs
 let v4=new Vecteur2D(3,4);
 v4.affiche();
 let v5=new Vecteur2D(1,6);
 v5.affiche();
 let v3=v4.add(v5);
 console.log("la somme des deux vecteurs est :")
 v3.affiche(); 