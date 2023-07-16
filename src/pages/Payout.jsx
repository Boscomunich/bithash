import React,{ useRef,useState,useEffect } from 'react'
import './Payout.css'
import 'tachyons'
import emailjs from '@emailjs/browser';

const Payout = () => {
    const [succesful, setsuccesful] = useState('')

    const submit = () => {
       setsuccesful ('your withdrawal request was succesful, please be patience while we process your withdrawal. you should recieve your funds before 6hrs')
    }

      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_guy6n9t', 'template_1hqkekt', form.current, 'sZfkn1OF982009yN5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return(
        <>
            <div className='div11'>
                <h1>Payout</h1>
            </div>
            <div className='div12'>
                <form ref={form} onSubmit={sendEmail}>
                    <h1>Withdraw funds</h1><br/><br/>
                    <span style={{color:'green'}}>{succesful}</span><br/><br/>
                    <div>{ succesful ==='' ?
                    <div>
                        <label className='payout-balance'>Balance</label><br/>
                        <input placeholder='select methode' type='text' name='user_type' list='crypto' style={{padding: '5px',width:'80%', height:'60px'}}/>
                        <datalist id='crypto'>
                            <option>BTC</option>
                            <option>USDT</option>
                            <option>ETH</option>
                        </datalist><br/><br/>
                        <label className='payout-balance'>Receiving address</label><br/>
                        <input placeholder="enter wallet address" type='text' name='user_name'style={{padding: '5px',width:'80%', height:'60px'}}/>
                        <br/>
                        <br/>
                        <label className='payout-balance'>Email</label><br/>
                        <input placeholder="enter your registered email" type='email' name='user_email' style={{padding: '5px',width:'80%', height:'60px'}}/>
                        <br/>
                        <br/>
                        <label className='payout-balance'>amount</label><br/>
                        <input placeholder="enter amount" type='number' name='message' style={{padding: '5px',width:'80%', height:'60px'}}/><br/><br/>
                        <div className="">
                        <input
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit"
                        onClick={submit}
                        value="Proceed"
                        />
                        </div>
                        </div>
                        :
                        <div ><img style={{height:'300px'}} src='/assets/succesful.png' alt='SUCCESFUL'/></div>
                    }
                    </div>
                    </form>
            </div>
        
        </>
    )
}
export default Payout