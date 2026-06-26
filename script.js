const games=[

"Barcelona vs Chelsea",

"Arsenal vs Madrid",

"Lakers vs Celtics",

"Djokovic vs Alcaraz"

]

const matches=

document.getElementById(
"matches"
)

games.forEach(game=>{

matches.innerHTML+=`

<div class="match">

<h3>

${game}

</h3>

<button
onclick="analyze('${game}')">

View Statistics

</button>

</div>

`

})

function sport(name){

document.getElementById(
"suggestions"
).innerHTML=

"Selected: "+name

}

function analyze(game){

document.getElementById(
"suggestions"
).innerHTML=

`

<h3>

${game}

</h3>

<br>

Over 1.5 → Higher

<br><br>

BTTS → Medium

<br><br>

Winner → Balanced

<br><br>

<button
onclick="save('${game}')">

Add To Slip

</button>

`

}

function save(game){

document.getElementById(
"slip"
).innerHTML+=

`<div>

✓ ${game}

</div>`

}
