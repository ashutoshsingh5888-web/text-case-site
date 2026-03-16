const e = React.createElement

function App(){

return e("div",null,

e("section",{className:"hero"},

e("div",{className:"title"},"Text Case Converter"),

e("div",{className:"subtitle"},
"Convert text instantly with a right click."
),

e("button",{className:"install"},
"Install Extension"
)

),

e("section",{className:"section"},

e("h2",null,"Supported Cases"),

e("div",{className:"features"},

e("div",{className:"card"},"UPPERCASE"),
e("div",{className:"card"},"lowercase"),
e("div",{className:"card"},"Title Case"),
e("div",{className:"card"},"camelCase"),
e("div",{className:"card"},"snake_case"),
e("div",{className:"card"},"kebab-case")

)

)

)

}

ReactDOM.createRoot(document.getElementById("root")).render(e(App))
