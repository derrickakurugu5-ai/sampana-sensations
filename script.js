const products = [

{
category:"Perfumes",
name:"Midnight Oud",
old:250,
price:220,
img:"https://images.unsplash.com/photo-1541643600914-78b084683601?w=800"
},

{
category:"Perfumes",
name:"Royal Mist",
old:350,
price:300,
img:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800"
},

{
category:"Body Splash",
name:"Golden Splash",
old:120,
price:90,
img:"https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800"
},

{
category:"Chilly",
name:"Velvet Chill",
old:200,
price:180,
img:"https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800"
}

]

let cart=[]

const shop=document.getElementById("shop")

function renderProducts(){

shop.innerHTML=""

const groups=["Perfumes","Body Splash","Chilly"]

groups.forEach(group=>{

shop.innerHTML+=`

<h2 style="grid-column:1/-1;color:#d4af37">

${group}

</h2>

`

products
.filter(p=>p.category===group)
.forEach((p,index)=>{

shop.innerHTML+=`

<div class="card">

<img src="${p.img}">

<h3>

${p.name}

</h3>

<div class="old">

GH₵${p.old}

</div>

<div class="price">

GH₵${p.price}

</div>

<button onclick="addCart(${index})">

Add To Cart

</button>

</div>

`

})

})

}

function addCart(index){

cart.push(products[index])

updateCart()

alert(
products[index].name+
" added to cart"
)

}

function updateCart(){

let total=0

let html=""

cart.forEach(item=>{

total+=item.price

html+=`

<div>

${item.name}

— GH₵${item.price}

</div>

`

})

document.getElementById(
"cartItems"
).innerHTML=html

document.getElementById(
"cartCount"
).innerText=

cart.length+
" item(s)"

document.getElementById(
"total"
).innerText=

"GH₵"+total

}

function checkoutWhatsApp(){

if(cart.length===0){

alert(
"Cart empty"
)

return

}

let total=0

let msg=

"Hello Sampana Sensations%0A%0A"

msg+="ORDER%0A%0A"

cart.forEach(i=>{

msg+=
"• "+
i.name+
" — GH₵"+
i.price+
"%0A"

total+=i.price

})

msg+=
"%0ATotal: GH₵"+
total

msg+=
"%0ADelivery: "+
document.getElementById("delivery").value

msg+=
"%0APayment: "+
document.getElementById("payment").value

window.location=

"https://wa.me/233535556878?text="+msg

}

renderProducts()
