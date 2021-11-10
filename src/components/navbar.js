import React from 'react';
import '../assets/scss/navbar.scss';
import '../assets/icomoon/style.scss';
import { useSelector } from 'react-redux';
import { Link ,Outlet} from 'react-router-dom';

export default function Navbar() {
    const state=useSelector(state=>state.shoppingCard);
    return (
        <div className="navbar">
             <Link to="/"> <span className="icon icon-quill"></span></Link>
             <Link to="/shopping-card">
             <span className="icon icon-cart"></span><span className='badge badge-warning' id='lblCartCount'> {state.totalProducts} </span>
             </Link>
             <Outlet/>
        </div>
    )
}
