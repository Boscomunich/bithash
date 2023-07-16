import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Homemain = () => {
    return (
        <div>
             <div className="div1">
            <div className="divhero">
                <p className="p1">
                    We offer you the most profitable and reliable cloud mining contracts by providing daily payout for all the contracts in the currency of the the contract. Start cryptocurrency and stablecoins cloud mining today, and get the first payout tommorow
                </p>
                <br/>
                <p className="p2">Join over 200000 people with the world leading hashpower provider! It is super simple - Your mining rigs are already set up and running.As soon as you set up your account, you can start to mine your first coins using our Bitcoin cloud mining service!</p>
            </div>
        </div>
    <div className="divbody">
            <h1>Our Mining Contracts</h1>
            <h4>We offer you the most profitable and reliable cloud mining contracts by providing daily payouts for all the contracts in the currency of the contract. Start cryptocurrency and stablecoins cloud mining today, and get the first payout tomorrow!</h4>
        <div className="divcontracts">
            <div className="contacts">
                <img src="./assets/9.webp" alt="market"  style={{width: '200px', height: '200px', }} />
                <h2>Novice experience project - cloud mining <br/>
                $100 - $999</h2>
                <ul>
                    <li>payment methode: crypto currency</li>
                    <li>Available currency plan: usdt, btc and eth</li>
                    <li>Daily returns: 25% ROI</li>
                </ul>
                <br/>
                <Link to='/wallet/deposit'><button><h2>Buy Now</h2></button></Link>
            </div>
            <div className="contacts">
                <img src="./assets/2.webp" alt="market"  style={{width: '200px', height: '200px', }} />
                <h2>Medium experience project - cloud mining <br/>
                $1,000 - $4,999</h2>
                <ul>
                    <li>payment methode: crypto currency</li>
                    <li>Available currency plan: usdt, btc and eth</li>
                    <li>Daily returns: 25% ROI</li>
                </ul>
                <br/>
                <Link to='/wallet/deposit'><button><h2>Buy Now</h2></button></Link>
            </div>
            <div className="contacts">
                <img src="./assets/4.webp" alt="market"  style={{width: '200px', height: '200px', }} />
                <h2>Gold experience project - cloud mining <br/>
                $5,000 - $9,999</h2>
                <ul>
                    <li>payment methode: crypto currency</li>
                    <li>Available currency plan: usdt, btc and eth</li>
                    <li>Daily returns: 25% ROI</li>
                </ul>
                <br/>
                <Link to='/wallet/deposit'><button><h2>Buy Now</h2></button></Link>
            </div>
            <div className="contacts">
                <img src="./assets/3.webp" alt="market"  style={{width: '200px', height: '200px', }} />
                <h2>VIP experience project - cloud mining <br/>
                $10,000 - $1,000,000</h2>
                <ul>
                    <li>payment methode: crypto currency</li>
                    <li>Available currency plan: usdt, btc and eth</li>
                    <li>Daily returns: 30% ROI</li>
                </ul>
                <br/>
                <Link to='/wallet/deposit'><button><h2>Buy Now</h2></button></Link>
            </div>
        </div>
    </div>


        <div className="divp">
            <div className="div2">
                    Welcome to Bithash, your ultimate guide to the best cloud mining websites, platforms, and services. Cloud mining has revolutionized how individuals and businesses can participate in cryptocurrency mining without the hassle of managing hardware, electricity costs, and complex setups. Our platform has meticulously researched and compiled a list of the most reputable and efficient cloud mining service providers, ensuring a seamless experience for miners of all levels.
            </div>
                <div className="div2">
                    Cloud Mining Technology Services: Harnessing the power of cutting-edge technology, these cloud mining platforms offer services enabling users to mine various cryptocurrencies remotely. With advanced algorithms, secure infrastructure, and dedicated customer support, these services make mining more accessible, convenient, and profitable than ever before.
                </div>
                <div className="div2">
                    Top Cloud Mining Websites: Our list features industry-leading cloud mining websites that have earned a solid reputation for their reliability, transparency, and high returns. These platforms offer flexible mining contracts, competitive pricing, and a user-friendly interface catering to beginners and experienced miners.
                </div>
                <div className="div2">
                    Cloud Mining Service Providers: We have identified trustworthy cloud mining service providers that deliver exceptional mining experiences. These providers offer diverse mining plans, allowing users to mine popular cryptocurrencies such as Bitcoin, Ethereum, and more with minimal risk and maximum efficiency.
                </div>
        </div>
        <h1>Why you should choose us</h1>
        <div className='footer-container'>
            <div className='text-container'>
                <h2>
                    New state-of-the-art hardware
                </h2><br/>
                We use the newest ASIC and GPU mining gear from Bitmain, Canaan and Nvidia and advanced technologies in our centers.
            </div>
            <div className='text-container'>
                <h2>Stable profit</h2><br/>
                Your income is automatically updated on your portal everyday
            </div>
            <div className='text-container'>
                <h2>Fast Regular Payouts</h2><br/>
                All withdrawal requests are processed automatically through the portal.
            </div>
            <div className='text-container'>
                <h2>Safety & Credibility</h2><br/>
                SSL encryption communication and multi-layer cold storage of coins fully guarantee safety.
            </div>
            <div className='text-container'>
                <h2>Expert team</h2><br/>
                Our team of Blockchain engineers and IT experts have got you fully covered with the best technologies in the market.
            </div>
            <div className='text-container'>
                <h2>Low Threshold.</h2><br/>
                No need to buy hardware, immediate access to BTC mining
            </div>
            <div className='text-container'>
                <h2>Global Nodes</h2><br/>
                Deploys mining nodes in Europe, America etc. with 100% genuine hashrate.
            </div>
            <div className='text-container'>
                <h2>Daily Payouts</h2><br/>
                In BTC, ETH, USDT, earn outputs on a daily basis.
            </div>
        </div>
        </div>
    );
};

export default Homemain;