// React.createElement(type, props, ...children)- similar to document.createElement() and .appendChild()
// ReactDOM.createRoot(document.getElementById("root"))- This API is a
// Client-side API that lets you create a root to display React components inside
// a browser DOM mode. It returns an object with 2 functions/methods :- render and
// unmount
// root.render("React Node")
const heading1 = React.createElement("h1", {
    id:"title1"
}, 
    "Heading 1 from react"
);
const heading2 = React.createElement("h2", {
    id: "title2",
    hello: "world"
}, 
    "Heading 2 from react"
);
const container = React.createElement("div",{id:"container"}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);