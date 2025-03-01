class Rectangle{
    constructor(width =0,height=0){
        this.width=width;
        this.height=height;
         this.nom ='rectangle'}

         affiche(){
             console.log(`${this.nom} :: [${this.width}, ${this.height}]`);
         }
         surface(){
            surf=this.x * this.y;
            return surf;
         }}

class Carre extends Rectangle{
      constructor(cote=0){
        super(cote,cote);
        this.nom='carre';
      }
        }

//prpgramme principale

let R1= new Rectangle(1,3);
let C1= new Carre(3);
R1.affiche();
C1.affiche();
    

