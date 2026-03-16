function convert(type){

let text=document.getElementById("inputText").value

if(type==="upper")
text=text.toUpperCase()

if(type==="lower")
text=text.toLowerCase()

if(type==="camel")
text=text.replace(/(?:^\w|[A-Z]|\b\w)/g,(w,i)=>i===0?w.toLowerCase():w.toUpperCase()).replace(/\s+/g,'')

if(type==="snake")
text=text.toLowerCase().replace(/\s+/g,"_")

if(type==="kebab")
text=text.toLowerCase().replace(/\s+/g,"-")

document.getElementById("inputText").value=text

}
