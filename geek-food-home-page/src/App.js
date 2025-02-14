import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from '../src/components/Hero-Section/HeroSection';
import CardSection from './components/CardSection/CardSection';
import Footer from './components/Footer/Footer';


function App() {
  const [blogList] = useState([
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
      blogImg: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      title: "Gladis Lennon",
      dept: "Head of SEO",
    },
    {
      id: 2,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.",
      blogImg: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      title: "Gladis Lennon",
      dept: "Head of SEO",
    },
    {
      id: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.",
      blogImg: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      title: "Gladis Lennon",
      dept: "Head of SEO",
    },
    {
      id: 4,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.",
      blogImg: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      title: "Gladis Lennon",
      dept: "Head of SEO",
    },
    {
      id: 5,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
      blogImg: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      title: "Gladis Lennon",
      dept: "Head of SEO",
    },
    {
      id: 6,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.",
      blogImg: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      title: "Gladis Lennon",
      dept: "Head of SEO",
    },
  ]);
  


  return (
    <div className="App">
      {/* Header Section */}
      <div>
        <Header/>
      </div>

      {/* Hero Section */}
      <div> <HeroSection/></div>

       {/* Card Section */}
       
       <div className='card-grid'>
        {blogList.map((blog) => (
          <CardSection key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Footer Section */}
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
