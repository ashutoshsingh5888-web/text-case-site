const e = React.createElement

function App(){

return e("div",null,

e("section",{className:"hero"},

e("div",{className:"title"},"Text Case Converter"),

e("div",{className:"subtitle"},
"Convert text instantly using the right-click menu"
),

e("button",{className:"install"},
"Install Extension"
)

),

e("section",{className:"features"},

["UPPERCASE","lowercase","Title Case","camelCase","snake_case","kebab-case"]
.map(c => e("div",{className:"card"},c))

)

)

}

ReactDOM.createRoot(document.getElementById("root")).render(e(App))
