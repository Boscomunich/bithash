import React from "react";
import './Wallet.css'
import {Link, Outlet, NavLink} from 'react-router-dom'


const Wallet = () => {
    return (
    <>
        <Outlet />

        <div className="div5">
            <NavLink
            to="." 
            end 
            style={ ({isActive}) => isActive ? {backgroundColor: 'Black'} :  {textDecoration: 'none'}}>
                <div className="div6">
                    USDT
                </div>
            </NavLink>

            <NavLink
            to='btc' 
            style={ ({isActive}) => isActive ? {backgroundColor: 'Black'} :  {textDecoration: 'none'}}>
                <div className="div6">
                    BTC
                </div>
            </NavLink>

            <NavLink 
            to='eth'
            style={ ({isActive}) => isActive ? {backgroundColor: 'Black'} :  {textDecoration: 'none'}}>
                <div className="div6">
                    ETH
                </div>
            </NavLink>
        </div>

        <div className="divx">
            <Link to="/wallet/deposit">
                <input
                    className="b ph3 pv2 input-reset ba b--green br-pill bg-green grow pointer f6 dib" 
                    type="submit"
                    value="Deposit"
                />
            </Link>

            <Link to="/wallet/payout">
                <input
                    className="b ph3 pv2 input-reset ba b--yellow 
                    br-pill bg-yellow grow pointer f6 dib" 
                    type="submit"
                    value="WithDrawal"
                />
            </Link>
        </div>
        <Link to='/'><div style={{textAlign:'left', marginBottom:'5px', fontSize:'13px'}}>back to home</div></Link>
    </>
    )
}
export default Wallet