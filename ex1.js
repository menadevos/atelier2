// 1. la fonctio constructeur Voiture
function Voiture(model, marque, annee, type, carburant) {
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.carburant = carburant;
}

//2.creer une liste des voitures
var voitures = [
    new Voiture("Model1", "Marque1", 2000, "Type1", "Essence"),
    new Voiture("Model2", "Marque2", 2001, "Type2", "Diesel"),
    new Voiture("Model3", "Marque3", 2009, "Type3", "essence"),
];
 //3. l'heritage avec hydai et ford 
function Hyndai(model, marque, annee, type, carburant, serie, hybride) {
    Voiture.call(this, model, marque, annee, type, carburant); 
    this.serie = serie;
    this.hybride = hybride;
}


Hyndai.prototype.alarmer = function () {
    console.log(` le model :${this.model} de marque :${this.marque}  , anne de fabriquation :${this.annee} , type :${this.type} , carburant :${this.carburant} , serie :${this.serie} , hybride :${this.hybride} `);
};

function Ford(model, marque, annee, type, carburant, options) {
    Voiture.call(this, model, marque, annee, type, carburant); 
    this.options = options;
}

//4.la fonction de tris selon annee
function trie() {
    voitures.sort((a, b) => a.annee - b.annee); 
    voitures.forEach(voiture => {
        console.log(`${voiture.marque} ${voiture.model} -annee: ${voiture.annee}`);
    });
}


trie();
