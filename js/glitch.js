const canvas=document.getElementById("bg")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const size=16
const columns=canvas.width/size

const drops=[]

for(let i=0;i<columns;i++){
drops[i]=1
}

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="#22c55e"
ctx.font=size+"px monospace"

for(let i=0;i<drops.length;i++){

const text=letters[Math.floor(Math.random()*letters.length)]

ctx.fillText(text,i*size,drops[i]*size)

if(drops[i]*size>canvas.height && Math.random()>0.975){
drops[i]=0
}

drops[i]++

}

}

setInterval(draw,33)
