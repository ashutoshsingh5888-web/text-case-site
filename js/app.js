const e = React.createElement

function App(){

return e("div",null,

hero(),

features(),

fakeRightClick(),

converter()

)

}

function hero(){

return e("section",{className:"hero"},

e("div",{className:"title"},"Text Case Converter"),

e("div",{className:"subtitle"},
"Convert text instantly with a right click"
),

e("a",
{
href:"https://chrome.google.com/webstore",
target:"_blank"
},
e("button",{className:"install"},"Install Extension")
)

)

}

function features(){

const list=[
"UPPERCASE",
"lowercase",
"Title Case",
"camelCase",
"snake_case",
"kebab-case"
]

return e("section",{className:"section"},

e("h2",null,"Supported Formats"),

e("div",{className:"features"},
list.map(i=>e("div",{className:"card"},i))
)

)

}

function fakeRightClick(){

return e("section",{className:"section"},

e("h2",null,"Right Click → Convert"),

e("div",{className:"demo-menu"},

e("div",null,"Convert Text Case"),
e("div",null,"UPPERCASE"),
e("div",null,"lowercase"),
e("div",null,"camelCase"),
e("div",null,"snake_case"),
e("div",null,"kebab-case")

)

)

}

function converter(){

return e("section",{className:"section"},

e("h2",null,"Try It Live"),

e("div",{className:"converter"},

e("textarea",
{
id:"inputText",
placeholder:"Type text here..."
}
),

e("div",{className:"case-buttons"},

btn("UPPERCASE","upper"),
btn("lowercase","lower"),
btn("camelCase","camel"),
btn("snake_case","snake"),
btn("kebab-case","kebab")

)

)

)

}

function btn(label,type){

return e("button",
{
onClick:()=>convert(type)
},
label
)

}

ReactDOM.createRoot(document.getElementById("root")).render(e(App))
