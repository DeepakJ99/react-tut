import React from 'react'

const Navbar = (
    <nav>
        <h1>Bob's bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
console.log("Hey there!")
ReactDOM.render(<Navbar/>, document.getElementById("root"))