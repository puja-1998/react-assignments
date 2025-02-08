let container = document.querySelector(".root");

let data = (
    <div className="dataDiv">
        <h1 className="heading">Topics covered </h1>
        <p>The following is a list of all the topics we cover in the MDN learning area.  </p> 

        <div className="div1">
            <a href="#" style={{lineHeight: "2.6" }}>Getting started with the web </a>
            <p className="para">Provides a practical introduction to web development for complete beginners. </p>
        </div>

        <div className="div2">
            <a href="#" style={{lineHeight: "2.6" }}>HTML- Structuring the web </a> 
            <p className="para">HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail. </p>
        </div>

        <div className="div3">
            <a href="#" style={{lineHeight: "2.6" }}>CSS-Styling the web </a>
            <p className="para">CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>
        </div>
    </div>
);

ReactDOM.render(data, container);