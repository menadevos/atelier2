//ici  on l'objet native avec la methode etudier
/*
var etudiant ={
    nom: 'assil',
    prenom : 'salma',
    age:'26',
    cne:'R134567900',

    etudier(){
        console.log(`c'est un etudaint`);
    }
};*/
 var professeur ={ 
    nom:'salim',
    age:'56',
    cin:'BH49040',
    
    enseigner(){
        console.log(`c'est un professeur`);
    }
};
 

// pour la fonction trie on a besoin de plusiurs etudiants pour trier 

var etudiants = [
    { nom: 'Assil', prenom: 'Salma', age: 26, cne: 'R134567900' },
    { nom: 'Bakri', prenom: 'Sanae', age: 26, cne: 'R134567901' },
    { nom: 'Chakri', prenom: 'Oussama', age: 26, cne: 'R134567902' }
]; 

function compareEtudiants(a, b) {
    
    return a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom);
}
etudiants.sort(compareEtudiants);
console.log("etudiants trie :");
etudiants.forEach(etudiant => {
    console.log(`${etudiant.nom} ${etudiant.prenom}`);
});



