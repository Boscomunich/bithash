import React from 'react';
import './Home.css'
const About = () => {
    return (
        <div>
            <br/><div className='about-us'><h2>About Us</h2></div><br/>
            <div>
                <div>
                    <div className='performance'>
                    <h3>Performance</h3>
                    <img src='/assets/performance.png' alt='per' style={{height: '30px'}}/>
                    </div>
                    Ultimate performance at low cost
                </div><br/>

                <div>
                    <div className='performance'>
                    <h3>World Wide Services</h3>
                    <img src='/assets/world.png' alt='per' style={{height: '30px'}}/>
                    </div>
                    Servicing over 90,621 + customers from 100+ countries
                </div><br/>

                 <div>
                    <div className='performance'>
                    <h3>Multiple cryptocurrency</h3>
                    <img src='/assets/cryptoicon.png' alt='per' style={{height: '30px'}}/>
                    </div>
                    We are offering 3 minable cryptocurrencies.
                </div><br/><hr/><br/>

            </div>
                <div className='how-we-work-header'>
                    <h2>How we work</h2>
                    Learn about our work process. You need to follow the steps below to start your first mining.
                </div>
                <div className='hww-maindiv'>
                    <div className='how-we-work'>
                        <h3>Create An Account</h3><br/><br/>
                        Create a user profile for yourself using the register option and get ready to mining.New User Get $5~50 USD For Free
                    </div>
                    <div className='how-we-work'>
                        <h3>Start Mining</h3><br/><br/>
                        Now you are ready to mine! Mining will start automatically after purchasing the plan without any action required.
                    </div>
                    <div className='how-we-work'>
                        <h3>Choose Plan</h3><br/><br/>
                        Top up your balance and buy plans at the most reasonable price.
                    </div>
                    <div className='how-we-work'>
                        <h3>Get Mining Output</h3><br/><br/>
                        You will periodically receive mining output from your designated wallet. Try our mining platform now!
                    </div>
            </div><br/><hr/><br/>
            <div className='why-choose'>
                <h2>Why Choose us</h2>
                We are combining all the key aspects of conducting an efficient cryptocurrency mining activity. From building a highly efficient data center to providing a robust mining system for our users.
            </div>
            <div className='wc-main'>
                <div className='why-choose-us'>
                    <div className='image'>
                        <img src='/assets/global.png' alt='g'/>
                        <h3>MultiLingual</h3>
                    </div>
                    As we run our business in 100+ countries we have a multilingual feature in your system.
                </div>
                <div className='why-choose-us'>
                    <div className='image'>
                        <img src='/assets/payment.png' alt=''/>
                        <h3>Easy Payment System</h3>
                    </div>
                    We have diffrent crypto payment methods in our system. You can easily complete your payment.
                </div>
                <div className='why-choose-us'>
                    <div className='image'>
                        <img src='/assets/wallet1.png' alt=''/>
                        <h3>Daily Mining Output</h3>
                    </div>
                    Our system will automatically add your daily mining results to your account. Also, you are able to withdraw that amount.
                </div>
                <div className='why-choose-us'>
                    <div className='image'>
                        <img src='/assets/secure.png' alt=''/>
                        <h3>Secure And Private</h3>
                    </div>
                    We support cryptocurrencies that promote privacy, so we try to keep user data collected to a minimum and will only require information.
                </div>
                <div className='why-choose-us'>
                    <div className='image'>
                        <img src='/assets/market2.png' alt='' style={{height: '50px'}}/>
                        <h3>Market Insight</h3>
                    </div>
                    Our system contains all your crypto mining data and charts.
                </div>
                <div className='why-choose-us'>
                    <div className='image'>
                        <img src='/assets/mining.png' alt=''/>
                        <h3>Robust Mining Technology</h3>
                    </div>
                    For each of the blockchain algorithms that we have proposed, we are providing some of the highest performance mining systems available.
                </div>
            </div>
        </div>
    );
};

export default About;