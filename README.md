# GhostFace Destroyer

Demostración de navegador: haz clic en los "fantasmas" para destruirlos y aumentar tu puntuación.

## Archivos principales

- [index.html](index.html) — página principal
- [styles.css](styles.css) — estilos y animaciones
- [script.js](script.js) — lógica de aparición y destrucción

## Ejecutar localmente

1. Desde la carpeta del proyecto, inicia un servidor HTTP estático:

```bash
python3 -m http.server 8000
```

2. Abre en tu navegador: `http://localhost:8000/`

3. Pulsa "Start the hunt" y haz clic en los fantasmas para destruirlos.

## Notas

- No hay dependencias externas; solo un navegador moderno.
- También puedes usar la extensión Live Server de VS Code.

---
Actualizado automáticamente.
/* =========================
   GHOSTFACE DESTROYER CSS
========================= */

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

html{
scroll-behavior:smooth;
}

body{
background:#050505;
color:white;
overflow-x:hidden;
}

/* HEADER */

header{
position:fixed;
top:0;
left:0;
width:100%;
height:80px;
background:rgba(0,0,0,.9);
backdrop-filter:blur(10px);
display:flex;
justify-content:space-between;
align-items:center;
padding:0 30px;
z-index:999;
border-bottom:2px solid #ff0000;
}

.logo{
font-size:28px;
font-weight:900;
color:#ff0000;
text-shadow:
0 0 10px red,
0 0 20px red;
}

nav{
display:flex;
gap:20px;
}

nav a{
text-decoration:none;
color:white;
font-weight:600;
transition:.3s;
}

nav a:hover{
color:#ff0000;
}

.header-actions{
display:flex;
gap:10px;
align-items:center;
}

#searchInput{
padding:10px;
border:none;
border-radius:10px;
background:#111;
color:white;
width:220px;
}

/* HERO */

.hero{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
position:relative;
background:
linear-gradient(rgba(0,0,0,.75),
rgba(0,0,0,.85)),
url("https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c");
background-size:cover;
background-position:center;
}

.hero-content{
position:relative;
z-index:2;
}

.hero h1{
font-size:80px;
font-weight:900;
color:#ff0000;
text-shadow:
0 0 20px red,
0 0 40px red;
}

.hero p{
font-size:22px;
margin-top:15px;
}

/* BOTÓN RGB FUEGO */

.btn-fire,
.share-btn,
.btn-small{

position:relative;
border:none;
cursor:pointer;
overflow:hidden;
color:white;
font-weight:700;

background:#111;
}

.btn-fire{

padding:15px 35px;
border-radius:15px;
margin-top:20px;
}

.share-btn{

width:45px;
height:45px;
border-radius:50%;
}

.btn-small{

padding:10px 15px;
border-radius:10px;
}

.btn-fire::before,
.share-btn::before,
.btn-small::before{

content:"";
position:absolute;
top:-3px;
left:-3px;
right:-3px;
bottom:-3px;

background:linear-gradient(
45deg,
red,
orange,
yellow,
lime,
cyan,
blue,
violet,
red
);

background-size:600%;
border-radius:inherit;

z-index:-2;

animation:rgb 6s linear infinite;
}

.btn-fire::after,
.share-btn::after,
.btn-small::after{

content:"";
position:absolute;
inset:3px;
background:#111;
border-radius:inherit;
z-index:-1;
}

.btn-fire:hover,
.share-btn:hover,
.btn-small:hover{

transform:scale(1.08);

box-shadow:
0 0 20px red,
0 0 40px orange,
0 0 60px yellow;
}

@keyframes rgb{

0%{
background-position:0%;
}

50%{
background-position:100%;
}

100%{
background-position:0%;
}

}

/* CATEGORÍAS */

.categories{
display:flex;
gap:15px;
padding:30px;
justify-content:center;
flex-wrap:wrap;
background:#090909;
}

.category{
padding:12px 20px;
background:#111;
color:white;
border:1px solid red;
border-radius:50px;
cursor:pointer;
transition:.3s;
}

.category:hover{
background:red;
}

/* SECCIONES */

.section{
padding:100px 40px 50px;
}

.section h2{
margin-bottom:30px;
color:#ff0000;
font-size:32px;
}

/* GRID */

.movies-grid{
display:grid;
grid-template-columns:
repeat(auto-fill,minmax(220px,1fr));
gap:25px;
}

/* CARD */

.movie-card{

background:#111;
border-radius:15px;
overflow:hidden;
transition:.3s;
}

.movie-card:hover{

transform:translateY(-10px);

box-shadow:
0 0 20px red;
}

.movie-card img{

width:100%;
height:320px;
object-fit:cover;
display:block;
}

.movie-info{
padding:15px;
}

.movie-info h3{
margin-bottom:10px;
}

.card-buttons{
display:flex;
gap:10px;
}

/* ADMIN */

.admin-panel{

margin:50px;
padding:30px;

background:#111;

border-radius:20px;
}

.admin-panel h2{
margin-bottom:20px;
color:red;
}

.admin-panel input,
.admin-panel select{

width:100%;
padding:15px;
margin-bottom:15px;

background:#222;
color:white;

border:none;
border-radius:10px;
}

/* MODAL */

.modal{

display:none;

position:fixed;
top:0;
left:0;

width:100%;
height:100%;

background:rgba(0,0,0,.8);

justify-content:center;
align-items:center;

z-index:1000;
}

.modal-content{

background:#111;
padding:30px;
border-radius:20px;
width:90%;
max-width:500px;
text-align:center;
}

.close{

float:right;
font-size:30px;
cursor:pointer;
}

/* FOOTER */

footer{

background:#090909;
padding:50px;
text-align:center;
border-top:2px solid red;
}

.footer-content h3{
font-size:30px;
margin-bottom:10px;
color:red;
}

/* RESPONSIVE */

@media(max-width:768px){

header{
flex-direction:column;
height:auto;
padding:15px;
gap:15px;
}

nav{
flex-wrap:wrap;
justify-content:center;
}

.hero h1{
font-size:45px;
}

.hero p{
font-size:18px;
}

#searchInput{
width:100%;
}

.section{
padding:80px 20px;
}

.admin-panel{
margin:20px;
}

}
app.js
/* =========================
   GHOSTFACE DESTROYER JS
========================= */

const moviesContainer =
document.getElementById("moviesContainer");

const seriesContainer =
document.getElementById("seriesContainer");

const favoritesContainer =
document.getElementById("favoritesContainer");

/* PELÍCULAS PREDETERMINADAS */

const defaultMovies = [

{
title:"Joker",
image:"https://picsum.photos/300/450?11",
type:"movie"
},

{
title:"Interstellar",
image:"https://picsum.photos/300/450?12",
type:"movie"
},

{
title:"Deadpool",
image:"https://picsum.photos/300/450?13",
type:"movie"
},

{
title:"Avatar",
image:"https://picsum.photos/300/450?14",
type:"movie"
}

];

const defaultSeries = [

{
title:"Wednesday",
image:"https://picsum.photos/300/450?21",
type:"series"
},

{
title:"The Boys",
image:"https://picsum.photos/300/450?22",
type:"series"
},

{
title:"Stranger Things",
image:"https://picsum.photos/300/450?23",
type:"series"
},

{
title:"Breaking Bad",
image:"https://picsum.photos/300/450?24",
type:"series"
}

];

/* INICIO */

window.onload = () => {

loadContent();

loadFavorites();

};

/* CREAR TARJETA */

function createCard(item){

const card =
document.createElement("div");

card.classList.add("movie-card");

card.innerHTML = `

<img src="${item.image}" alt="${item.title}">

<div class="movie-info">

<h3>${item.title}</h3>

<div class="card-buttons">

<button
class="btn-small"
onclick="openMovie('${item.title}')">

Ver

</button>

<button
class="btn-small"
onclick="addFavorite('${item.title}','${item.image}')">

⭐

</button>

<button
class="btn-small"
onclick="shareMovie('${item.title}')">

📤

</button>

</div>

</div>

`;

return card;

}

/* CARGAR CONTENIDO */

function loadContent(){

let savedMovies =
JSON.parse(
localStorage.getItem("movies")
) || defaultMovies;

let savedSeries =
JSON.parse(
localStorage.getItem("series")
) || defaultSeries;

moviesContainer.innerHTML = "";
seriesContainer.innerHTML = "";

savedMovies.forEach(movie=>{

moviesContainer.appendChild(
createCard(movie)
);

});

savedSeries.forEach(series=>{

seriesContainer.appendChild(
createCard(series)
);

});

}

/* AGREGAR CONTENIDO */

function addContent(){

const title =
document.getElementById("movieTitle").value;

const image =
document.getElementById("movieImage").value;

const type =
document.getElementById("movieType").value;

if(title === "" || image === ""){

alert("Completa todos los campos");

return;

}

const item = {

title,
image,
type

};

if(type === "movie"){

let movies =
JSON.parse(
localStorage.getItem("movies")
) || defaultMovies;

movies.push(item);

localStorage.setItem(
"movies",
JSON.stringify(movies)
);

}else{

let series =
JSON.parse(
localStorage.getItem("series")
) || defaultSeries;

series.push(item);

localStorage.setItem(
"series",
JSON.stringify(series)
);

}

loadContent();

document.getElementById(
"movieTitle"
).value="";

document.getElementById(
"movieImage"
).value="";

}

/* FAVORITOS */

function addFavorite(title,image){

let favorites =
JSON.parse(
localStorage.getItem("favorites")
) || [];

const exists =
favorites.find(
f=>f.title===title
);

if(!exists){

favorites.push({
title,
image
});

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);

loadFavorites();

alert(
title +
" agregado a favoritos"
);

}

}

function loadFavorites(){

let favorites =
JSON.parse(
localStorage.getItem("favorites")
) || [];

favoritesContainer.innerHTML = "";

favorites.forEach(item=>{

favoritesContainer.appendChild(
createCard(item)
);

});

}

/* BUSCADOR */

const searchInput =
document.getElementById(
"searchInput"
);

searchInput.addEventListener(
"keyup",
function(){

const text =
this.value.toLowerCase();

const cards =
document.querySelectorAll(
".movie-card"
);

cards.forEach(card=>{

const title =
card.innerText.toLowerCase();

card.style.display =
title.includes(text)
? "block"
: "none";

});

}
);

/* MODAL */

function openMovie(title){

document.getElementById(
"modalTitle"
).innerText = title;

document.getElementById(
"movieModal"
).style.display = "flex";

}

function closeModal(){

document.getElementById(
"movieModal"
).style.display = "none";

}

/* COMPARTIR PÁGINA */

async function shareWebsite(){

if(navigator.share){

try{

await navigator.share({

title:
"Ghostface Destroyer",

text:
"Mira esta increíble web de películas",

url:
window.location.href

});

}catch(e){}

}else{

navigator.clipboard.writeText(
window.location.href
);

alert(
"Enlace copiado"
);

}

}

/* COMPARTIR PELÍCULA */

async function shareMovie(title){

if(navigator.share){

try{

await navigator.share({

title:title,

text:
"Te recomiendo ver " + title,

url:
window.location.href

});

}catch(e){}

}else{

navigator.clipboard.writeText(
title
);

alert(
"Título copiado"
);

}

}

/* BOTÓN HERO */

function scrollToMovies(){

document
.getElementById("peliculas")
.scrollIntoView({

behavior:"smooth"

});

}
