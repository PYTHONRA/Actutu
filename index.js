 let livres = [
    {
        titre: "L'Énigme de la chambre 622",
        auteur: "Joel Dicker",
        prix: 16.93,
        résumé: "Une nuit de décembre, un meurtre a lieu au Palace de Verbier, dans les Alpes suisses. L’enquête de police n’aboutira jamais. Des années plus tard, au début de l’été 2018, lorsqu’un écrivain se rend dans ce même hôtel pour y passer des vacances, il est loin d’imaginer qu’il va se retrouver plongé dans cette affaire.",
        image: "Lénigme-de-la-chambre-622.jpg"

    },
    {
        titre: "Le Livre des Baltimore",
        auteur: "Joel Dicker",
        prix: 22,
        résumé: "Huit ans après le drame, c’est l’histoire de sa famille que Marcus Goldman décide cette fois de raconter, lorsqu’en février 2012, il quitte l’hiver new-yorkais pour la chaleur tropicale de Boca Raton, en Floride, où il vient s’atteler à son prochain roman.",
        image: "Lénigme-de-la-chambre-622.jpg"

    },
    {
        titre: "Les Derniers jours de nos pères",
        auteur: "Joel Dicker",
        prix: 19,
        résumé: "Quelques mois plus tard, le jeune Paul-Émile quitte Paris pour Londres dans l’espoir de rejoindre la Résistance. Rapidement recruté par le SOE, il est intégré à un groupe de Français qui deviendront ses compagnons de cœur et d’armes.",
        image: "Lénigme-de-la-chambre-622.jpg"

    },
    {
        titre: "La Vérité sur l’Affaire Harry Quebert",
        auteur: "Joel Dicker",
        prix: 20,
        résumé: "Marcus Goldman, jeune écrivain à succès, est dans la tourmente : il est incapable d’écrire le nouveau roman qu’il doit remettre à son éditeur d’ici quelques mois. Le délai est près d’expirer quand soudain tout bascule pour lui : son ami et ancien professeur d’université, Harry Quebert, l’un des écrivains les plus respectés du pays, est rattrapé par son passé et se retrouve accusé d’avoir assassiné, en 1975, Nola Kellergan",
        image: "Lénigme-de-la-chambre-622.jpg"

    }
]
/*console.log(livres); */


function afficheRecommandation() {
    livresRandom1 = Math.floor(Math.random() * livres.length);
    //console.log(livres[0],livres[1],livres[2]);
    livresRandom2 = Math.floor(Math.random() * livres.length);
    livresRandom3 = Math.floor(Math.random() * livres.length);
}
nb = afficheRecommandation();


//console.log(livres[livresRandom1]);
//console.log(livres[livresRandom2]);
//console.log(livres[livresRandom3]);

 //afficheRecommandation();
 //function afficheLivres(prixMax){

 //}
 const prixMax = 20;
 livres.forEach(function(livre){
        if (livre.prix <= prixMax){
           console.log(livre); 
        } 
 }
 
 
 );


