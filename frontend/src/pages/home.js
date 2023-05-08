import React from 'react';
import '../styles/home.css'
import ProductCard from '../components/ProductCard';

const home = () => {
    return (
        <div>
            <img src="https://cdn.pixabay.com/photo/2023/04/30/14/52/countryside-7960674__340.jpg" alt="hero-img"/>
            <div className='product-grid'>
                <ProductCard title="Camera" imgUrl="https://cdn.pixabay.com/photo/2012/04/13/17/00/camera-32871__340.png"/>
                <ProductCard title="T-shirt" imgUrl="https://cdn.pixabay.com/photo/2014/04/03/10/55/t-shirt-311732__340.png"/>
                <ProductCard title="Laptop" imgUrl="https://cdn.pixabay.com/photo/2017/06/20/23/15/coffee-2425303__340.jpg"/>
                <ProductCard />
            </div>
            
        </div>
    )
}

export default home;