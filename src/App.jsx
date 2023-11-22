
import React, { useState } from "react";

const  FormValidation =  ()=> {
 
  const [Data , setData] = useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:''
  })


  const [Errors, setErrors] = useState({})

  const handleChange = (e) =>{

    const {name, value} = e.target;
     setData({
        ...Data, [name] : value
     })
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if( !Data.username.trim() ) {
      validationErrors.username = "username is required"
    }
    if(! Data.email.trim()) {
      validationErrors.email = "eamil is required"
    }
    // else if(/\S@\S+\.\S+/.test(Data.email)) {
    //   validationErrors.email = "email is not valid"
    // }

    if(! Data.password.trim()) {
      validationErrors.password = "password is required"
    }
    else if(Data.password.length < 8) {
      validationErrors.password = "password should be atleast 8 character"
    }

    if(Data.confirmpassword !== Data.password){
      validationErrors.confirmpassword = "password not matched.."
    }
  

  setErrors(validationErrors)
   if(Object.keys(validationErrors) .length === 0){
    alert("Thanks YOur Form is Submitted Successfully")
   }
  }

  return (

    <form  onSubmit={HandleSubmit}>
    <div className="form">
      
      <h1>Password Validation </h1>
    <div>
        <label > UserName: </label>
        <input type="text" name="username"  placeholder="UserName :"  onChange={handleChange} />
        {Errors.username && <span>{Errors.username}</span>}
    </div>

    <div>
      <label > Email:</label>
      <input type="email" name="email" placeholder="eamil@gmail.com:"  onChange={handleChange}/>
      {Errors.email && <span>{Errors.email}</span>}
    </div>

    <div>
      <label > Password:</label>
      <input type="password" name="password" placeholder="*****" onChange={handleChange} />
      {Errors.password && <span>{Errors.password}</span>}
    </div>

    {/* validation Tracker */}


    

    <div>
       <label >Confirm Password:</label>
      <input type="password" name="confirmpasssword" placeholder="*****" onChange={handleChange}/>
      {Errors.confirmpassword && <span>{Errors.confirmpassword}</span>}
    </div>

   <button type="submit">Submit</button>

    </div>
    </form>
  );
}

export default FormValidation;
