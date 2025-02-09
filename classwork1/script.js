let container = document.querySelector(".root");
// Heading
let heading = React.createElement("h1", {className:"heading"}, "Learn web development");

// First Div with p tag

let paragraph1 = React.createElement("p", {className: "para"}, "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.");
let div1 = React.createElement("div", {className: "div1"}, paragraph1);

// Second div
let anchor = React.createElement("a", { href: "#", className: "link" }, "the rest of MDN");

let paragraph2 = React.createElement("p", { className: "para" }, 
    "The aim of this area of MDN is not to take you from 'beginner' to 'expert' but to take you from 'beginner' to 'comfortable.' From there, you should be able to start making your way, learning from ", 
    anchor, 
    ", and other intermediate to advanced resources that assume a lot of previous knowledge."
);
let div2 = React.createElement("div", {className: "div2"}, paragraph2);

// Third div
let paragraph3 = React.createElement("p", {className: "para"}, "If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.");
let div3 = React.createElement("div", {className: "div3"}, paragraph3);

let data = React.createElement("div",{className:"datadiv"}, heading, div1, div2, div3);
ReactDOM.render(data, container);


ReactDOM.render(data,container);

