import React,{useState, useEffect} from 'react'
import axios from "axios";

function Loginscreen() {
  async function login() {

    const userl = {
      email,
      password
    }
    console.log(userl)
    try {
      const result = (await axios.post("api/users/login", userl)).data
      //const result = await axios.post('/api/users/register', {name:name, email:email, password:password}).data
    } catch (error) {
        
    }

  }

  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  return (
    <div>
      <div className='row justify-content-center mt-5 '>
        <div className='col-md-5 '>
          <div className='shadow'>
            <h2>Login</h2>
            <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }} />
            <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
            <button className='btn btn-primary mt-3' onClick={login}>Login</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Loginscreen