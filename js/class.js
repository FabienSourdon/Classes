class voiture{

    Marque;
    Modele;
    Couleur;

    constructor(marque,modele,couleur){
        this.Marque=marque;
        this.Modele=modele;
        this.Couleur=couleur;
    }

    roule(){
        return "Vrouuuuuum!"
    }
    
    get brand(){
        return "La "+this.Marque;
    }
    
    set brand(laMarque){
        this.Marque= laMarque;
    }

    get model(){
        return "de modèle "+this.Modele;
    }
    
    set model(leModele){
        this.Marque= leModele;
    }

}
