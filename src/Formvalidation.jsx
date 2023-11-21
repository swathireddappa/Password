
import React, { useState } from "react";

const  FormValidation =  ()=> {
 
  const [Data , setData] = useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:''
  })

  const handleChange = (e) =>{

    const {name, value} = e.target;
     setData({
        ...Data, [name] : value
     })
  }

  return (

    <form  >

    <div className="App">
      
      <h1>Password Validation </h1>
    <div>
        <label > UserName: </label>
        <input type="text" name="username"  placeholder="UserName :" onChange={handleChange} />
    </div>



    <div>
      <label > Email:</label>
      <input type="email" name="email" placeholder="eamil@gmail.com:" />
    </div>



    <div>
      <label > Password:</label>
      <input type="password" name="password" placeholder="*****" />
    </div>



    <div>
       <label >Confirm Password:</label>
      <input type="password" name="confirmpasssword" placeholder="*****" />
    </div>


   <button type="submit">Submit</button>

    </div>
    </form>
  );
}

export default FormValidation;
