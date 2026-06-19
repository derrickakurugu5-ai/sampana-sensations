const products=[

{

name:"Midnight Oud",

old:250,

price:220,

img:
"https://images.unsplash.com/photo-1541643600914-78b084683601"

},

{

name:"Golden Splash",

old:120,

price:90,

img:
"https://images.unsplash.com/photo-1523293182086-7651a899d37f"

},

{

name:"Royal Mist",

old:350,

price:300,

img:
"https://images.unsplash.com/photo-1615634260167-c8cdede054de"

},

{

name:"Velvet Chill",

old:200,

price:180,

img:
"https://images.unsplash.com/photo-1587017539504-67cfbddac569"

}

]

let cart=[]

const shop=

document
.getElementById(
"shop"
)

products
.forEach(
(
p,
i
)=>{

shop
.innerHTML+=`

<div
class="card"
><img
src="${p.img}"

«»

<h3>${p.name}

</h3><div
class="old"
>GH₵${p.old}

</div><div
class="price"
>GH₵${p.price}

</div><button
onclick="
addCart(${i})
"

«»

Select Item

</button></div>`

}
)

function addCart(i){

cart.push(
products[i]
)

renderCart()

}

function renderCart(){

let total=0

document
.getElementById(
"cartItems"
)
.innerHTML=
""

cart
.forEach(
p=>{

total+=
p.price

document
.getElementById(
"cartItems"
)

.innerHTML+=`

<div>${p.name}

—

GH₵${p.price}

</div>`

}
)

document
.getElementById(
"total"
)

.innerText=

"GH₵"+total

}

function checkoutWhatsApp(){

if(
cart.length===0
){

alert(
"Select items first"
)

return

}

let text=

"Hello Sampana Sensations%0A%0AItems:%0A"

let total=0

cart
.forEach(
p=>{

text+=

"- "

+ 

p.name

+ 

" GH₵"

+ 

p.price

+ 

"%0A"

total+=
p.price

}
)

text+=

"%0ATotal: GH₵"

+ 

total

text+=

"%0A%0ADelivery: "

+ 

document
.getElementById(
"delivery"
)
.value

text+=

"%0APayment: "

+ 

document
.getElementById(
"payment"
)
.value

window.location=

"https://wa.me/233535556878?text="

+ 

text

}
