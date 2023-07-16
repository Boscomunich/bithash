import './App.css';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home-component/Home'
import Wallet from './pages/Wallet-component/Wallet'
import Payout from './pages/Payout'
import Deposit from './pages/Deposit'
import Login from './pages/Login'
import Register from './pages/Register'
import Protected from './pages/Wallet-component/Protected'
import Btc from './pages/Wallet-component/Btc'
import Usdt from './pages/Wallet-component/Usdt'
import Eth from './pages/Wallet-component/Eth'
import Terms from './pages/Home-component/Terms';
import About from './pages/Home-component/About';
import Reviews from './pages/Home-component/Reviews';
import Homemain from './pages/Home-component/Homemain';
import Privacy from './pages/Home-component/Privacy';
import Loding from './pages/Loding';

class App extends React.Component{
  constructor(){
  super()
  this.state = {
    user: {
      id: '',
      name: '',
      username:'',
      email: ''
    },
    loading: false
  }
}

componentDidMount() {
  this.setState({loading:true})
    fetch('https://bithash-server.onrender.com/check-session', {
      method: 'get',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.loadUser(data)
        }
      });
      this.setState({loading:false})
  }

loadUser = (data) => {
this.setState({user: {
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email
    }})
}

  render() {
    return (
      <>
      { this.state.loading === true ? <Loding loading={this.state.loading}/> :
        <Routes>
          <Route path="/" element={<Home username={this.state.user.username}/>}>
            <Route index element={<Homemain/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='privacy' element={<Privacy/>}/>
            <Route path='reviews' element={<Reviews/>}/>
            <Route path='terms' element={<Terms/>}/>
            <Route path="/login" element={<Login loadUser={this.loadUser}/>}/>
          <Route path="/register" element={<Register loadUser={this.loadUser}/>}/>
          </Route>
          <Route element={<Protected email={this.state.user.email}/>}>
            <Route path='/wallet' element={<Wallet/>}>
              <Route index element={<Usdt user={this.state.user}/>}/>
              <Route path='btc'element={<Btc user={this.state.user}/>}/>
              <Route path='eth' element={<Eth user={this.state.user}/>}/>
            </Route>
          </Route>
          <Route path='/wallet/payout' element={<Payout/>}/>
          <Route path='/wallet/deposit' element={<Deposit/>}/>
        </Routes>}
      </>
  )
  }
}



export default App
