let mesVoitures=[
    new voiture("Ford","Mustang","Vert Emeraude"),
    new voiture("Bat","Mobile","Noir"),
    new voiture("DMC","Delorean","Grise"),
    new voiture("Cadillac","Ecto-1","Blanche")
]

function creeTrVoit(x){
    var tab= document.getElementById('tab');
    var creaTr = document.createElement('tr');
    var creaMarque = document.createElement('td');
    var creaModele = document.createElement('td');
    var creaCouleur = document.createElement('td');
    creaMarque.innerHTML = x.Marque;
    creaModele.innerHTML = x.Modele;
    creaCouleur.innerHTML = x.Couleur;
    creaTr.appendChild(creaMarque);
    creaTr.appendChild(creaModele);
    creaTr.appendChild(creaCouleur);
    tab.appendChild(creaTr);
}

for(i=0;i<mesVoitures.length; i++){
    creeTrVoit(mesVoitures[i]);
}



