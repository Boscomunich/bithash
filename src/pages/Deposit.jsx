import React, {useState, useRef} from 'react'
import './Payout.css'

const Deposit = () => {

    const [selectedValue, setselectedValue] = useState('')
    const [Route, setRoute] = useState('deposit')
        const [copySuccess, setcopySuccess] = useState('');
        const textRef = useRef('')

        const copyToclipboard = (e) => {
        navigator.clipboard.writeText(textRef.current.innerText);
        setcopySuccess('copied')
    }
    const handleChange = (event) => {
        setselectedValue(event.target.value);
    };
    const onRoutechange = () => {
        setRoute('wallet-address')
    }

    return(
        <>
                <div className='div11'>
                    <h1>Invest</h1>
                </div>
                <div className='div12' style={{wordWrap:'break-word'}}>
                    { Route === 'deposit' ?
                    <div>
                        <h1>Deposit funds</h1><br/><br/>
                            <label className='payout-balance'>Select Crypto</label><br/>
                            <input placeholder='select methode' type='text' list='crypto' onChange={handleChange} style={{padding: '5px', width:'80%', height:'60px'}}/>
                            <datalist id='crypto'>
                                <option value='btc'>btc</option>
                                <option value='usdt'></option>
                                <option value='eth'></option>
                            </datalist>
                            <br/>
                            <br/>
                            <label className='payout-balance'>amount</label><br/>
                            <input placeholder="enter amount" type='number' style={{padding: '5px', width:'80%', height:'60px'}}/><br/><br/>
                        <div className="">
                            <input
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit"
                            value="Proceed"
                            onClick={onRoutechange}
                            />
                        </div>
                    </div>
                    :
                    <div className='address'>
                        { selectedValue === 'btc' ?
                        (<div style={{wordWrap:'break-word'}}>
                            <p ref={textRef}>0x3f229108e72f45a648ea419e167ba771c0fef5c3</p>
                            {copySuccess}
                            <button style={{padding:'5px', backgroundColor:'blue', color:'white'}} onClick={copyToclipboard}>copy</button><br/><br/><br/><br/><br/>
                            <p>make sure to use <strong>BTC
                            Bitcoin</strong> network for deposit to avoid loss of funds</p>
                        </div>)
                        :selectedValue === 'usdt' ?
                        (<div style={{wordWrap:'break-word'}}>
                            <p ref={textRef}>0x3f229108e72f45a648ea419e167ba771c0fef5c3</p>
                            {copySuccess}
                            <button style={{padding:'5px', backgroundColor:'blue', color:'white'}} onClick={copyToclipboard}>copy</button><br/><br/><br/><br/><br/>
                            <p>make sure to use <strong>ERC20</strong> network for deposit to avoid loss of funds</p>
                        </div>)
                        : selectedValue === 'eth' ?
                        (<div style={{wordWrap:'break-word'}}>
                            <p ref={textRef}>0x3f229108e72f45a648ea419e167ba771c0fef5c3</p>
                            {copySuccess}
                            <button style={{padding:'5px', backgroundColor:'blue', color:'white'}} onClick={copyToclipboard}>copy</button><br/><br/><br/><br/><br/>
                            <p>make sure to use <strong>ERC20</strong> network for deposit to avoid loss of funds</p>
                        </div>)
                        : (<div> select currency type</div>)
                    }
                    </div>
                }
            </div>
                    
        </>
    )
}
export default Deposit