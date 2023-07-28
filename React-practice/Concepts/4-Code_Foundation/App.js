import React from 'react';
import ReactDOM from 'react-dom/client';

const headingjsx = (
    //JSX expression
    <h1 id="title" key="h1jsx">
        Heading using JSX
    </h1>
)

const Title = () => (
    <h1 id='titletag' key="titlekey">
        Title Heading
    </h1>
)

const HeadingComponent = () => (
    <div>
        {headingjsx} 
        <Title />
        <h1>Heading Functional Component</h1>
        <h2>Heading 2</h2>
    </div>
)
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)
