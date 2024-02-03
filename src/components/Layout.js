import { Outlet, Link } from "react-router-dom";
import '../css/Layout.css'

function Layout(props){

    const handleLink = (e) => {
        var linksList = document.querySelectorAll('.nav-link');
        for(var i=0; i<linksList.length; i++){
            linksList[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }

    return(
        <div className="layout">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className='navbar-brand' 
                    to='/products'><h3>SuperKids</h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li key='home' className='nav-item'>
                            <Link className='nav-link active main-color-hover' onClick={handleLink}
                            to='/home'>Home</Link>
                        </li>
                        <li key='about' className='nav-item'>
                            <Link className='nav-link main-color-hover' onClick={handleLink}
                            to='/about'>About</Link>
                        </li>
                        <li key='products' className='nav-item'>
                            <Link className='nav-link main-color-hover' onClick={handleLink}
                            to={props.isSignedUp ? '/products': '/must-sign-up'}>
                            Supplies</Link>
                        </li>
                        <li key='registration' className='nav-item'>
                            <Link className='nav-link main-color-hover' onClick={handleLink}
                            to='/registration'>Registration</Link>
                        </li>
                        <li key='login' className='nav-item'>
                            <Link className='nav-link main-color-hover' onClick={handleLink}
                            to='/login'>Login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link main-color-hover" onClick={handleLink} 
                            to={props.isSignedUp ? '/cart': '/must-sign-up'}>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="link-name">Cart</span>
                                {props.cartCount > 0 ? 
                                    <span className="notifications">{props.cartCount}</span>: ''
                                }
                            </Link>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
            <Outlet />
        </div>
    );
}

export default Layout;


