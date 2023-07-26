import React from 'react';
import ReactDOM from 'react-dom/client';
//React.createElement => Object => HTML(DOM)
// const heading = React.createElement(
//     "h1",
//     {
//       id: "title1",
//       key: "h1"
//     },
//     "heading"
//   );
// JSX(HTML like syntax) => React.createElement => Object => HTML(DOM)
//Babel converts JSX to React.createElements
//1- React Element
const headingjsx = (
    //JSX expression
    <h1 id="title" key="h1jsx">
        Heading using JSX
    </h1>
)
// React Components- Functional(new way), Class Based(old way)
//2- Functional Component(JS function which returns JSX/react element)
//Name of component starts with capital letter(not mandatory)
//Method One-
const HeadingComponentOneLine = () => {
    return <div><h1>Heading Using One liner</h1><h2>H2 tag</h2></div>;
}
const HeadingComponent = () => {
    return (
        <div>
            <h1>Heading Functional Component</h1>
            <h2>Heading 2</h2>
        </div>
    )
}

//  Method Two - without return (Default)
const Title = () => (
    <h1 id='titletag' key="titlekey">
        Title Heading
    </h1>
)
var xyz =10;
// const data = api.getData()
// Write anything between {} and JSX does sanitization to secure data from XSS(Cross side scripting) attack. 
// {data}
//Component Composition OR Composing components.
const HeadingComponentTwo = () => (
    <div>
        // Any JS code 
        {xyz +20}
        
        //To render a react element
        {headingjsx} 
        //To render a functional component
        <Title />
        {HeadingComponentOneLine()}
        <h1>Heading Functional Component</h1>
        <h2>Heading 2</h2>
    </div>
)
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
//   root.render(heading);
//   root.render(headingjsx);
// root.render(<HeadingComponentOneLine />);
// root.render(HeadingComponent());
root.render(<HeadingComponentTwo />)
