let container = document.querySelector(".root");

// h1 and p tag
let heading = React.createElement("h1", {className: "heading"}, "Topics covered");
let paragraph1 = React.createElement("p", {}, "The following is a list of all the topics we cover in the MDN learning area.");

// First Div
let anchor1 = React.createElement("a", {href:"#", className:"link"}, "Getting started with the web");
let paragraph2 = React.createElement("p", {className: "para"}, "Provides a practical introduction to web development for complete beginners.")
let div1 = React.createElement("div", {className: "div1"}, anchor1, paragraph2);

// Second Div
let anchor2 = React.createElement("a", {href:"#", className:"link"}, "HTML- Structuring the web");
let paragraph3 = React.createElement("p", {className: "para"}, "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.")
let div2 = React.createElement("div", {className: "div2"}, anchor2, paragraph3);

// Third Div
let anchor3 = React.createElement("a", {href:"#", className:"link"}, "CSS-Styling the web");
let paragraph4 = React.createElement("p", {className: "para"}, "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.")
let div3 = React.createElement("div", {className: "div3"}, anchor3, paragraph4);

let data = React.createElement("div", {className: "dataDiv"}, heading , paragraph1, div1, div2, div3);

ReactDOM.render(data, container);