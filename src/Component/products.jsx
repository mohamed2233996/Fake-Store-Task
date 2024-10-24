import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([])
    const [currentlimit, setCurrentlimit] = useState(
        10
    )

    // Fetching products from API
    useEffect(() => {
        fetch("https://fakestoreapi.in/api/products")
            .then(res => res.json())
            .then(res => setProducts(
                res.products.slice(0, currentlimit)
                ))
    }, [currentlimit]);

    return (
        <>
            <section className='py-16'>
                <div className="container m-auto flex flex-col items-center">
                    <h2 className='text-primary mb-6 text-4xl font-bold'>Our Products</h2>
                    <p className='text-gray-700'>
                        Here are some of our latest products. You can add them to your cart by clicking the "Add to Cart" button.
                    </p>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {
                            products?.map(product => (
                                <div key={product.id} className="card bg-base-100 shadow-xl">
                                    <figure>
                                        <img src={product.image} alt={product.title} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{product.title.substring(0, 18)}</h2>
                                        <p>{product.description.substring(0, 30)}</p>
                                        <div className="card-actions flex-nowrap flex-row justify-between">
                                            <div className="mb-5 mt-2.5 flex items-center justify-between">
                                                <div className='flex items-center'>
                                                    <svg
                                                        className="h-5 w-5 text-yellow-300"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                                        5.0
                                                    </span>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary hover:bg-transparent border border-primary hover:text-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* view more */}
                    <div className='flex justify-center mt-8'>
                        <button className='btn btn-primary' onClick={
                            () => {
                                setCurrentlimit(currentlimit + 10)
                                if (currentlimit > products.length) {
                                    setCurrentlimit(products.length)
                                    alert('No more products to view.')
                                }
                            }
                        } >View More</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products;
