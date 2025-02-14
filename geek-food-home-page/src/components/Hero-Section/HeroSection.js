import React from 'react';
import  "./HeroSection.css"

export default function HeroSection(){
    return(
        <>
        <div className='heroSection'>
            <div className='container'>
                <h1>Let us find your<br/><strong>Forever Food.</strong></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>

                <div className='btns'>
                    <button className='SearchNow'>Search Now</button>
                    <button className='knowMore'>Know More</button>
                </div>
            </div>
        </div>

        <div className='heroSection2'>
            <div className='img'>
                <img src='https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'></img>
            </div>
            <div className='GetInTouchDiv'>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <button>Get in Touch</button>
            </div>
        </div>
        </>
    );
}