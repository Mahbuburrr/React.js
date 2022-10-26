import React, { useState } from 'react'
import style from './Form.module.css'

export default function Form() {

    const[user,setUser]=useState({name:'',email:'',password:''});
    const {name,email,password}=user;

    
    

    const handleChange=(e)=>{

        setUser({...user,[e.target.name]:e.target.value})
    }


    const handleSubmit=(e)=>{
        console.log("form is submitted");
       
        console.log(user)
        e.preventDefault();
    }
  return (
    <div>

        <center>
        <h1>Registration</h1>
        
        <form action="" onSubmit={handleSubmit} className={style.display}>

           <div className={style.formGroup}> 

           <label for="name">Name:</label>
            <input type="text" name="name" id="name" value={name} required onChange={handleChange}></input>
           </div>

           <div className={style.formGroup}>

           <label for="name">Email:</label>
            <input type="email" name="email" id="email" value={email} required onChange={handleChange}></input>
           </div>

           <div className={style.formGroup}>

           <label for="password">password:</label>
            <input type="password" name="password" id="password" value={password} required onChange={handleChange}></input>
           </div>
           

           <div>

           <button type='submit'>Registration</button>
           </div>
           
           



        </form>
        </center>
   
    </div>
  )
}
