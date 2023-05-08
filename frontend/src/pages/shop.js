import React, { useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const fetchProductData = async () => {
    const res = await axios.get('http://localhost:4000/products');
    console.log(res);
    const data = res.data;
    return data;
};

const Shop = () => {
    const [data, setData] = useState([]);

    const assignData = async () => {
        const fetchedData = await fetchProductData();
        setData(fetchedData);
    }

    useEffect(() => {
        assignData();
    }, []);
    return (
        <div className='store-container'>
            {/* <ProductCard title={data[0].title} imgUrl={data[0].imgUrl}/> */}
            {data.map((product) => {
                return(
                    <ProductCard
                    title={product.title}
                    imgUrl={product.imgUrl} key={product._id}
                    />

                )
            })}
        </div>
    
    )
        
    
}

export default Shop;