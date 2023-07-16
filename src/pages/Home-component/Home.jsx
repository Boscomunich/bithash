import React from "react";
import './Home.css'
import {Link, Outlet, Navigate,} from 'react-router-dom'
import 'tachyons'

const Home = ({username}) => {

    return (
    <>
             <div className="header">
            <div className="divbit">
                <h2>BITHASH</h2>
            </div>
            {
                username ? 
            <div className="profile" style={{display: 'block'}}> 
                <img src="/assets/logo1.png" alt="profile"/>
                <Link style={{textDecoration:'none', color:'white'}} to='login'><div>{username}</div></Link>
            </div>
                :
                <div className="login">
                <Link to='/login'style={{textDecoration: 'none'}}>
                    <div className="divlogin">LOGIN</div>
                </Link>
                <Link to='/register' style={{textDecoration: 'none'}}>
                    <div className="divjoin">JOIN</div>
                </Link>
            </div>
                }
        </div>

        <Outlet/>
         <div className="footer">
            <div className="footer-element">
                <h2>RESOURSES</h2>
                <ul>
                    <Link to='reviews'style={{textDecoration: 'none'}}>
                        <li>Reviews</li>
                    </Link>
                    <Link to='login'style={{textDecoration: 'none'}}><li>Log in</li></Link>
                    <Link to='register'style={{textDecoration: 'none'}}>
                        <li>Register</li>
                    </Link>
                </ul>
            </div>
            <div>
                <h2>COMPANY</h2>
                <ul>
                    <Link to='about' style={{textDecoration: 'none'}}><li>About us</li></Link>

                    <Link to='terms' style={{textDecoration: 'none'}}><li>Terms of Services</li></Link>
                    <Link to='privacy' style={{textDecoration: 'none'}}><li>Privacy Policy</li></Link>
                </ul>
            </div>
            <div>
                <h2>CONTACT US</h2>
                <ul>
                    <li>BithashTeam@outlook.com</li>
                </ul>
            </div>
        </div>
        <div className="copyright">
                <h3>
                    copyright &#169; 2019-2023 Bithash. All rights reserved 
                </h3>
        </div>


        <div className="div3">
            <Link to='about'>
                <img src="./assets/about.png" alt="market"  style={{width: '35px', height: '35px', }} />
            </Link>
            <Link to='/'>
                <img src="./assets/home3.png" alt="home"  style={{width: '35px', height: '35px', }} />
            </Link>
            <Link to="/wallet">
                    <img src="./assets/wallet4.png" alt="wallet"  style={{width: '35px', height: '35px'}} />
            </Link>
        </div>
    </>
    )
}
export default Home