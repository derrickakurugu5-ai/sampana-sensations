const products=[

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
category:"Body Spray",
name:"Fresh Spray",
old:110,
price:85,
img:"https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800"
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

const shop=
document.getElementById("shop")

function showCategory(category){

shop.innerHTML=""

products

.filter(
p=>p.category===category
)

.forEach(product=>{

shop.innerHTML+=`

<div class="card"><img src="${product.img}"><h3>${product.name}

</h3><div class="old">GH₵${product.old}

</div><div class="price">GH₵${product.price}

</div><button onclick="addCart('${product.name}')">Add To Cart

</button></div>`

})

}

showCategory(
"Perfumes"
)

function addCart(name){

const existing=

cart.find(
i=>i.name===name
)

if(existing){

existing.qty++

}

else{

const item=

products.find(
p=>p.name===name
)

cart.push({

...item,

qty:1

})

}

showToast()

renderCart()

}

function removeItem(name){

cart=

cart.filter(
i=>i.name!==name
)

renderCart()

}

function changeQty(name,val){

const item=

cart.find(
i=>i.name===name
)

if(!item)return

item.qty+=val

if(item.qty<=0){

removeItem(name)

return

}

renderCart()

}

function renderCart(){

const items=

document.getElementById(
"cartItems"
)

const count=

document.getElementById(
"cartCount"
)

const totalBox=

document.getElementById(
"total"
)

items.innerHTML=""

let total=0

cart.forEach(item=>{

total+=
item.price*
item.qty

items.innerHTML+=`

<div><b>${item.name}

</b><br>Qty:

<button onclick="changeQty('${item.name}',-1)">−</button>

${item.qty}

<button onclick="changeQty('${item.name}',1)">+</button>

<br>GH₵

${item.price*item.qty}

<button onclick="removeItem('${item.name}')">❌

</button></div>`

})

count.innerText=

cart.length+

" item(s)"

totalBox.innerText=

"GH₵"+

total

}

function checkoutWhatsApp(){

if(
cart.length===0
){

alert(
"Cart empty"
)

return

}

let msg=

"Hello Sampana Sensations%0A%0A"

msg+=

"ORDER:%0A%0A"

let total=0

cart.forEach(item=>{

msg+=

"• "

+ 

item.name

+ 

" ×"

+ 

item.qty

+ 

" — GH₵"

+ 

item.price*
item.qty

+ 

"%0A"

total+=

item.price*
item.qty

})

msg+=

"%0ATotal: GH₵"

+ 

total

msg+=

"%0ADelivery: "

+ 

document
.getElementById(
"delivery"
)
.value

msg+=

"%0APayment: "

+ 

document
.getElementById(
"payment"
)
.value

window.open(

"https://wa.me/233535556878?text="+msg,

"_blank"

)

}

function showToast(){

const toast=

document.createElement(
"div"
)

toast.innerText=

"✓ Added to Cart"

toast.style=
"position:fixed;bottom:20px;right:20px;background:#d4af37;color:black;padding:12px;border-radius:12px"

document.body.appendChild(
toast
)

setTimeout(
()=>toast.remove(),
1800
)

}
