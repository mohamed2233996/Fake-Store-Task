
import { useEffect, useState } from 'react';

const Header = () => {
    const [categorys, setcategorys] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.in/api/products/category")
            .then(res => res.json())
            .then(res => setcategorys(res.categories)
            )
    }, []);


    return (
        <div className="navbar  bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li>
                            <a>categorys</a>
                            <ul className="p-2 z-50">
                                {categorys?.map((category) => {
                                    return <li key={category.id}><a>{category.name}</a></li>
                                })}
                            </ul>
                        </li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Face Store</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li>
                        <details>
                            <summary>categorys</summary>
                            <ul className="p-2 z-50">
                            {categorys?.map((item) => {
                                    return <li key={item}><a>{item}</a></li>
                                })}
                            </ul>
                        </details>
                    </li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Explore</a>
            </div>
        </div>
    );
}

export default Header;
