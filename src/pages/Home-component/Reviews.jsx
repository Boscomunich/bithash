import React from 'react';
import './Home.css'

const Reviews = () => {
    return (
        <div>
            <div>
                <h2>Our Customers Say</h2>
                <p>We have many happy investors invest with us. Some impressions from our Customers! Please read some of the lovely things our Customers say about us.</p>
            </div>
            <div style={{textAlign: 'left', paddingLeft: '20px'}}>
                <div className='review'>
                    <h3>twest1*****sn.com</h3>
                    <div>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                    </div>
                </div>
                <br/>
                7/20/2021
                <br/>
                <br/>
                <p>I started investing in idmining in January. I purchased the novice plan for the first time. Until the end of the contract, I tried to withdraw my principal and profit, and it didn't take long for the account to arrive! Now I make small investments here every month, it's a great site to increase passive income!</p>
                <hr/>
            </div>
                <br/>
                <div style={{textAlign: 'left', paddingLeft: '20px'}}>
                <div className='review'>
                    <h3>keith.mar*****@gmail.com</h3>
                    <div>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                    </div>
                </div>
                <br/>
                8/22/2021
                <br/>
                
                <br/>
                <p>This website is superb.I am new to crypto but everything on this website seems clear to me.My friend referred me and I have deposited $500 to mine some coins for the meantime.</p>
                <hr/>
            </div>
            
            <br/>
                        <div style={{textAlign: 'left', paddingLeft: '20px'}}>
                <div className='review'>
                    <h3>kalini*****ail.com</h3>
                    <div>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                    </div>
                </div>
                <br/>
                9/22/2021
                <br/>
                <br/>
                <p>Hands down bithash is 2023 place to mine with BTC on the rise give bithas a try.</p>
                <hr/>
            </div>
            <br/>
                        <div style={{textAlign: 'left', paddingLeft: '20px'}}>
                <div className='review'>
                    <h3>l&lrealt*****gmail.com</h3>
                    <div>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                    </div>
                </div>
                <br/>
                10/27/2022
                <br/>
                <br/>
                <p>It's very easy and very fast way to earn easy money and the customer service are always available</p>
                <hr/>
            </div>
            <br/>
                        <div style={{textAlign: 'left', paddingLeft: '20px'}}>
                <div className='review'>
                    <h3>johnzh*****ail.com</h3>
                    <div>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                        <span className='checked'>&#9733;</span>
                    </div>
                </div>
                <br/>
                12/1/2022
                <br/>
                <br/>
                <p>I recommend this site, the processing speed is fast both for deposits and withdrawals. This is the best cloud mining site I have ever used</p>
                <hr/>
            </div>
            <br/>
            <form>
                <div style={{fontWeight: 'bold', color: 'blue'}}>leave a review</div>
                <div className='fieldgroup'>
                    <div className='name'>Email</div>
                    <div className='field'>
                        <input type='text'/>                    
                    </div>
                </div>
                <div className='fieldgroup'>
                    <div className='name'>Rate</div>
                    <div className='star-rating'>
                        <input type='radio' name='start' id='star-a' value='5'/>
                        <label htmlFor='star-a'></label>
                        <input type='radio'  name='start' id='star-b' value='4'/>
                        <label htmlFor='star-b'></label>
                        <input type='radio' name='start' id='star-c' value='3'/>
                        <label htmlFor='star-c'></label>
                        <input type='radio' name='start' id='star-d' value='2'/>
                        <label htmlFor='star-d'></label>
                        <input type='radio' name='start' id='star-e' value='1'/>
                        <label htmlFor='star-e'></label>
                    </div>
                </div>
                <div className='fieldgroup'>
                    <div className='name'>Title</div>
                    <div className='field'>
                        <input type='text'/>                    
                    </div>
                </div>
                <div className='fieldgroup'>
                    <div className='name'>Review</div>
                    <div className='review-field'>
                        <input type='text'/>                    
                    </div>
                </div>
                <button>SUBMIT</button>
            </form>
        </div>

    );
};

export default Reviews;