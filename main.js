// Fonction qui change la couleur de l'élément ciblé par l'id dans le DOM au clic d'une div

function colorInBrown(){
    document.getElementById("texte").style.color="brown";
}
function colorInBeige(){
    document.getElementById("texte").style.color="burlywood";
}
function colorInBlue(){
    document.getElementById("texte").style.color="cadetblue";
}



// OR nom de fonction commune aux trois "onclick" dans le HTML : 
// onclick="coloringText('texte', 'brown')"
// onclick="coloringText('texte', 'burlywood')"
// onclick="coloringText('texte', 'cadetblue')"

/*
function coloringText(id, color){
    document.getElementById(id).style.color=color;
}
*/

// OR presque pareil avec seulement un argument dans la fonction et un paramètre dans le HTML aux "onclick"
// onclick="coloringText('brown')"
// onclick="coloringText('burlywood')"
// onclick="coloringText('cadetblue')"

/*
function coloringText(newColor){
    document.getElementById(texte).style.color=newColor;
}
*/



// Syntaxe avec onclick qui représente le gestionnaire d’évènement pour l’évènement click de l’élément courant
// --> fonction nommée classique : 

// element.event = function (){ } --> idInput.event = function functionName() {instructions;}

// let element = document.getElementById("name");

// function displayAlert(){
    //alert(`Merci !`);
// }

// element.event = functionName;

/*
let texte = document.getElementById("texte");
let div1 = document.getElementById("d1");
let div2 = document.getElementById("d2");
let div3 = document.getElementById("d3");

function colorInBrown(){
    texte.style.color = "brown";
}
function colorInBeige(){
    texte.style.color = "burlywood";
}
function colorInBlue(){
    texte.style.color = "cadetblue";
}

div1.onclick = colorInBrown;
div2.onclick = colorInBeige;
div3.onclick = colorInBlue;
*/



// Méthode addEventListener() qui permet d’enregistrer une fonction qui sera appelée lors du déclenchement 
// de l'évènement => fonction fléchée :

// 1- Stockage des différents éléments HTML

/*
let texte = document.getElementById("texte");
let div1 = document.getElementById("d1");
let div2 = document.getElementById("d2");
let div3 = document.getElementById("d3");
*/

// 2- On attache ensuite un gestionnaire d’évènement click aux boutons avec addEventListener()
// On passe deux arguments à cette méthode : le nom de l'évènement qu’on souhaite prendre en charge 
// et le code à exécuter (qui prendra souvent la forme d’une fonction) en cas de déclenchement de cet évènement

/*
div1.addEventListener("click", () => {
    texte.style.color = "brown";
});

div2.addEventListener("click", () => {
    texte.style.color = "burlywood";
});

div3.addEventListener("click", () => {
    texte.style.color = "cadetblue";
});
*/