
import React from "react"
import ReactDOM from "react-dom"



const pareant=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"i am in h1 tag"),
        React.createElement("h2",{},"i am in h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{}, "i am in h1 tag"),
        React.createElement("h2",{}," i am in h2 tag"),
    ]),
])
console.log(parent)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);