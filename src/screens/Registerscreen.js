import React,{useState, useEffect} from 'react'
import axios from "axios";

function Registerscreen() {
    async function register(){
        if(password==cpassword){
            const user = {
                name,
                email,
                password,
                cpassword
            }
            console.log(user)
            try {
                const result = (await axios.post("api/users/register", user)).data
                //const result = await axios.post('/api/users/register', {name:name, email:email, password:password}).data
            } catch (error) {
                
            }
            
        }else{
            alert("not same")
    
        }
    }
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [cpassword, setcpassword] = useState();
  return (
    <div>
        <div className='row justify-content-center mt-5 '>
            <div className='col-md-5 '>
                <div className='shadow'>
                <h2>Register</h2>
                <input type = "text" className = "form-control" placeholder="Name" value = {name} onChange = {(e)=>{setname(e.target.value)}}/>
                <input type = "text" className = "form-control" placeholder="Email" value = {email} onChange = {(e)=>{setemail(e.target.value)}}/>
                <input type = "text" className = "form-control" placeholder="Password" value = {password} onChange = {(e)=>{setpassword(e.target.value)}}/>
                <input type = "text" className = "form-control" placeholder="Confirm password" value = {cpassword} onChange = {(e)=>{setcpassword(e.target.value)}}/>
                <button className='btn btn-primary mt-3' onClick={register}>Register</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Registerscreen