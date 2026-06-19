const products=[

{
name:"Midnight Oud",
old:250,
price:220,
img:"https://images.unsplash.com/photo-1541643600914-78b084683601?w=800"
},

{
name:"Golden Splash",
old:120,
price:90,
img:"https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800"
},

{
name:"Royal Mist",
old:350,
price:300,
img:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800"
},

{
name:"Velvet Chill",
old:200,
price:180,
img:"https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800"
}

]

let cart=[]

const shop=document.getElementById("shop")

products.forEach((p,i)=>{

shop.innerHTML+=`

<div class="card"><img src="${p.img}"><h3>${p.name}</h3><div class="old">GH₵${p.old}

</div><div class="price">GH₵${p.price}

</div><button onclick="addCart(${i})">Add To Cart

</button></div>`

})

function addCart(i){

cart.push(products[i])

renderCart()

alert(

products[i].name+

" added to cart"

)

}

function renderCart(){

let total=0

let list=""

cart.forEach(item=>{

total+=item.price

list+=`

<div>${item.name}

—

GH₵${item.price}

</div>`

})

document.getElementById(
"cartItems"
).innerHTML=list

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

"Your cart is empty"

)

return

}

let text=

"Hello Sampana Sensations%0A%0AOrder:%0A"

let total=0

cart.forEach(i=>{

text+=

"- "+

i.name+

" GH₵"+

i.price+

"%0A"

total+=i.price

})

text+=

"%0ATotal: GH₵"+

total

window.location=

"https://wa.me/233535556878?text="+text

}
