/*1. Ajouter "clic n°X" dès que l'utilisateur clique sur le footer*/

let clickableFooter = document.getElementsByTagName("footer")[0];
var i = 1;
let onFooterClick = function(){
  console.log(`Clic n°${i}`);
  i ++;
};
clickableFooter.addEventListener("click", onFooterClick);

/*2. Faire fonctionner le menu déroulant*/

let hamburgerMenu = document.getElementById("navbarHeader");
let toggleButton = document.querySelectorAll("button.navbar-toggler")[0];

let onMenuClick = function(){
  hamburgerMenu.classList.toggle("collapse");
};

toggleButton.addEventListener("click", onMenuClick);

/*3. Mettre le texte de la première carte en rouge en cliquant sur Edit (irréversible)*/

let firstCard = document.querySelectorAll("div.card")[0];
let firstCardEditButton = firstCard.querySelectorAll("button.btn-outline-secondary")[0];
let firstOnEditClick = function(){
  firstCard.style.color = 'red';
};
firstCardEditButton.addEventListener("click", firstOnEditClick);

/*4. Mettre le texte de la deuxième carte en vert en cliquant sur Edit (réversible)*/

let secondCard = document.querySelectorAll("div.card")[1];
let secondCardEditButton = secondCard.querySelectorAll("button.btn-outline-secondary")[0];

let toggleTextColor = function(el, value){
  if(el.style.color === value){
    el.style.color = "inherit";
  }
  else {el.style.color = value};
};

let secondOnEditClick = function(){
  toggleTextColor(secondCard,"green");
};

secondCardEditButton.addEventListener("click", secondOnEditClick);

/*5. Enlever et remettre Bootstrap en double cliquant sur le header*/

let navbar = document.getElementsByClassName("navbar")[0];
let removeBootstrap = function(){
  if (document.querySelectorAll("head > link")[0].href == "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
    document.querySelectorAll("head > link")[0].removeAttribute("href");
  }
  else {document.querySelectorAll("head > link")[0].href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"};
};
navbar.addEventListener("dblclick",removeBootstrap);

/*6. Réduire les cartes en passant sur le bouton View*/

let cards = document.querySelectorAll("div.card");

let shrinkContent = function(){
  if (this.closest('.card').getElementsByTagName('img')[0].style.width !== '20%'){
    this.closest('.card').getElementsByTagName('img')[0].style.width = '20%';
  }
  else {
    this.closest('.card').getElementsByTagName('img')[0].style.width = '100%';
    }
  this.closest('.card').getElementsByTagName('p')[0].classList.toggle("collapse");
};

cards.forEach(card => card.querySelectorAll("button.btn-success")[0].addEventListener("mouseenter", shrinkContent));

/*7. Changer l'ordre des cartes en cliquant sur le bouton "==>"*/

let shuffleRightButton = document.querySelectorAll("section.jumbotron > div.container > p > a.btn-secondary")[0];
shuffleRightButton.setAttribute("onclick","shuffleCardsRight()");
let cardGroup = document.querySelectorAll("div.col-md-4")[0].parentNode;

let shuffleCardsRight = function(){
  let swapCard = cardGroup.lastChild;
  cardGroup.insertBefore(swapCard, cardGroup.childNodes[0]);
};

shuffleRightButton.addEventListener("click", shuffleCardsRight);

/*8. Faire tourner les cartes dans l'autre sens avec le bouton "<=="*/

let shuffleLeftButton = document.querySelectorAll("section.jumbotron > div.container > p > a.btn-primary")[0];
shuffleLeftButton.href = "#";
shuffleLeftButton.setAttribute("onclick","shuffleCardsLeft()");

let shuffleCardsLeft = function(){
  let swapCard = cardGroup.firstChild;
  cardGroup.insertBefore(swapCard, null);
};

shuffleLeftButton.addEventListener("click", shuffleCardsLeft);

/*9. Ajouter des événements en fonction des touches enfoncées sur le clavier*/

let reorganizeContent = function(event){
  if (event.which === 65){
    document.getElementsByTagName('body')[0].className = "";
    document.getElementsByTagName('body')[0].classList.add("col-4");}
  else if (event.which === 89){
    document.getElementsByTagName('body')[0].className = "";
    document.getElementsByTagName('body')[0].classList.add("col-4","offset-md-4");
  }
  else if (event.which === 80){
    document.getElementsByTagName('body')[0].className = "";
    document.getElementsByTagName('body')[0].classList.add("col-4","offset-md-8");
  }
  else if (event.which === 66){
    document.getElementsByTagName('body')[0].className = "";
  }
}

navbar.addEventListener("focus", reorganizeContent)
navbar.addEventListener("keydown", reorganizeContent)