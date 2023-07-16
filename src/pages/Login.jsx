
import React, {useState, useEffect}from 'react'
import 'tachyons'
import {Link, useNavigate} from 'react-router-dom'


const Login = (props) => {
  const [signinEmail, setsigninEmail] = useState('');
  const [signinPassword, setsigninPassword] = useState('');
  const[error, seterror] = useState('')

  const navigate = useNavigate()
  const onEmailchange = (event) => {
    setsigninEmail( event.target.value )
  }
   const onPasswordchange = (event) => {
    setsigninPassword( event.target.value )
  }

    
    const onSubmitsignin = () => {
      fetch('https://bithash-server.onrender.com/login',{
        method: 'post',
        mode: 'cors',
        redirect: 'follow',
        credentials: 'include',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
         email: signinEmail,
         password: signinPassword
        })
      }).then(response => response.json())
        .then(data => {
          if ( data.email === signinEmail) {
            props.loadUser(data)
            localStorage.setItem('sessionData', JSON.stringify(data));
            navigate('/')
          }else{
            seterror(data)
          }
        })
    }

return(
  <>
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main className="pa4 black-80">
        <div className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
        <span style={{fontSize: '12px', color: 'red'}}>{error}</span>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"  
          id="email-address"
          onChange={onEmailchange}
        />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password"
          onChange={onPasswordchange}
        />
        </div>
        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
      </fieldset>
      <div className="">
        <input
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit"
        value="Sign in"
        onClick={onSubmitsignin}
        />
      </div>
      <Link to="/register">
      <div className="lh-copy mt3">
        <p className="f6 link dim black db">Register</p>
      </div>
      </Link>
    </div>
  </main>
  </article>
  </>
  )
}



export default Login