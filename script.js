const matches=[

"Barcelona vs Chelsea",

"Arsenal vs Madrid",

"Lakers vs Celtics",

"Djokovic vs Alcaraz"

]

const box=

document.getElementById(
"matches"
)

matches.forEach(m=>{

box.innerHTML+=`

<div class="match">

${m}

<br><br>

<button
onclick="analyze('${m}')">

Analyze

</button>

</div>

`

})

function sport(name){

alert(
name+
" selected"
)

}

function analyze(match){

document.getElementById(
"suggestions"
).innerHTML=

`

<h3>

${match}

</h3>

<p>

Over 1.5

→ Higher

</p>

<p>

BTTS

→ Medium

</p>

<p>

Winner

→ Balanced

</p>

<button
onclick="save('${match}')">

Save Pick

</button>

`

}

function save(match){

document.getElementById(
"slip"
).innerHTML+=

"<div>✓ "+match+"</div>"

}
