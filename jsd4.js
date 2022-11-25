// function displayer(sum) {
//     setTimeout(function () {
//         console.log("sum:"+sum)
//     }, 5000);
// }
// function calculator(num1, num2, callback) {
//     let sum = num1 + num2;
//     callback(sum);
// }
// calculator(5, 5, displayer);
// console.log("suite");

function perso(nom,type,force,vitalite){
    this.nom=nom
    this.type=type
    var strengh=force
    var vitality=vitalite
    this.carac=function(){
        alert(`Vous avez créer ${this.nom} ayant comme métier ${this.type} ayant ${strengh} force et ${vitality} de vitalité `)
    }
    this.damage=function(dmg){
        vitality-=dmg
    }
    this.getvitality=function(){
        return vitality
    }
    this.getstrengh=function(){
        return strengh
    }
}
function combat(joueur1,joueur2){
    while (joueur1.getvitality()>0 && joueur2.getvitality()>0){
        joueur1.damage(joueur2.getstrengh())
        if (joueur1.getvitality()>0){
            joueur2.damage(joueur1.getstrengh())
        }
    }
    return (joueur1.getvitality()>0?`${joueur1.nom} a gagné`:`${joueur2.nom} a gagné`)
}
// function creanbrperso(nom,type,force,vitalite){
//         let nom=new perso(nom,type,force,vitalite);
//         return function(){
//             return passage++;
//         };
// }
function geneperso() {
    let passage = 0;
    return function (nom,type,force,vitalite) {
        passage++;
        return [new perso(nom,type,force,vitalite),passage]
    };
}

let persos = geneperso();
let Guillius=persos("Guillius","Chevalier",20,100)[0];
let Illumi=persos("Illumi","Magicienne",60,50)[0];
Guillius.carac();
Illumi.carac();
// console.log(Guillius.carac());
// console.log(Illumi.carac());
console.log(Guillius.getvitality());
// console.log(Guillius.damage());
console.log(Illumi.getvitality());
console.log(combat(Illumi,Guillius));
console.log(passage);