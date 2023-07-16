import React, {useEffect, useState} from 'react'
import 'tachyons'
import {Navigate, useNavigate}from 'react-router-dom'



const Register = (props) => {
const navigate = useNavigate()
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [name, setname] = useState('')
const [username, setusername] = useState('')
const[disabled, setdisabled] = useState(true)
const[error, seterror] = useState('')


useEffect(()=> {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(password === ''|| (email ==='' || !emailRegex.test(email))||name ===''|| username===''){
  setdisabled(true)
}
else {setdisabled(false)}
},[password,username,email,name])


  const onEmailchange = (event) => {
    setemail( event.target.value )
  }

  const onNamechange = (event) => {
    setname( event.target.value )
  }

    const onPasswordchange = (event) => {
    setpassword( event.target.value )
  }

    const onUsernamechange = (event) => {
    setusername( event.target.value )
  }

  const onSubmitsignin = () => {
      fetch('https://bithash-server.onrender.com/register', {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
         email: email,
         password: password,
         name: name,
         username: username
        })
      }).then(response => response.json())
        .then(data =>{
          if ( data.email === email) {
            props.loadUser(data)
            navigate('/')
          }else {
           seterror(data)
          }
        })
    }

  return(
<>
<article className="br2 ba dark-gray b--black-10 mv4 w-200 w-100-m w-25-l mw5 center">
<main className="pa4 black-80">
  <div className="measure center">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <span style={{fontSize: '12px', color: 'red'}}>{error}</span>
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="name"  
        id="name"
        onChange={onNamechange}
        />
      </div>
       <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">UserName</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="username"  
        id="username"
        onChange={onUsernamechange}
        />
      </div>
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
    </fieldset>
    <div className="">
      <input
       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit"
      value="register"
      disabled={disabled}
      onClick={onSubmitsignin}
       />
    </div>
  </div>
</main>
</article>
</>
    );

}
export default Register