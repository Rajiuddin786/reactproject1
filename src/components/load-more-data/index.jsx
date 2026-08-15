import { useState,useEffect } from 'react';

import './styles.css';

export default function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            if(!response.ok){
                throw new Error("Response not ok")
            }
            const result = await response.json();
            console.log(result)
            
            if (result && result.products && result.products.length) {
                setProducts((prevData)=>[...prevData,...result.products])
                setLoading(false)
            }

        } catch (error) {
            setLoading(false)
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        fetchProducts();
    },[count]);

    if(loading){
        return <div>Loading.....</div>
    }
    return (
        <div className="load-more-product">
            <div className='product-container'>
                {
                    products && products.length ?
                        products.map(item =>
                            <div key={item.id} className='product'>
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                />
                                <p>{item.title}</p>
                            </div>
                        )
                        :
                        null
                }
            </div>
            <div className='button-container'>
                <button onClick={()=>setCount(count+1)}>Load More Product</button>
            </div>
        </div>
    );
}