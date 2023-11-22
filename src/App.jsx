
import React, { useState } from "react";
import { Icon } from 'react-icons-kit';
import { arrows_circle_check } from "react-icons-kit/linea/arrows_circle_check";
import { arrows_exclamation } from "react-icons-kit/linea/arrows_exclamation";


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
  // Form Validation

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
   if(Object.keys(validationErrors).length === 0){
    alert("Thanks Your Form is Submitted Successfully")
   }
  }
   
  // Password Validation
  const [Lowervalidate, setLowervalidate] = useState(false);
  const [Uppervalidate, setUppervalidate] = useState(false);
  const [Numbervalidate, setNumbervalidate] = useState(false);
  const [SpecialCharactervalidate, setSpecialCharactervalidate] = useState(false);
  const [Lengthvalidate, setLengthvalidate] = useState(false);

  const pswrdchange = (value) => {
    // regex
    const Lower = new RegExp('(?=.*[a-z])');
    const Upper = new RegExp('(?=.*[A-Z])');
    const Number = new RegExp('(?=.*[0-9])');
    const Specialcharacter = new RegExp('(?=.*[@,$,&])');
    const Length = new RegExp('(?=.*{<8})');
 
    // Lowercase validation
    if(Lower.test(value)){
      setLowervalidate(true);
    }
    else{setLowervalidate(false);
    }

    // Uppercase Validation
    if(Upper.test(value)){
      setUppervalidate(true);
    }
    else{setUppervalidate(false);
    }

    // Number Validation
    if(Number.test(value)){
      setNumbervalidate(true);
    }
    else{setNumbervalidate(false);
    } 

    // SpecialCharacter Validation
    if(Specialcharacter.test(value)){
      setSpecialCharactervalidate(true);
    }
    else{setSpecialCharactervalidate(false);
    }

    // Length Validation
    if(Length.test(value)){
      setLengthvalidate(true);
    }
    else{setLengthvalidate(false);
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
      <input type="password" name="password" placeholder="*****" onChange={pswrdchange} />
      {Errors.password && <span>{Errors.password}</span>}
    </div>

    {/* validation Tracker */}
      <div>
          <div className={Lowervalidate?'validate':'not-validate'}>
           {Lowervalidate?(
            <span className="list-icon">
              <Icon icon={arrows_circle_check} size={18} />
            </span>
            ):(
              <span className='list-icon'>
              <Icon icon={arrows_exclamation} />
            </span>
            )}

          At least one Lower letter
          </div>

        <div  className={Uppervalidate?'validate':'not-validate'}>
        {Uppervalidate?(
            <span className="list-icon">
              <Icon icon={arrows_circle_check} size={18} />
            </span>
            ):(
              <span className='list-icon'>
              <Icon icon={arrows_exclamation} />
            </span>
            )}
          At least one Upper letter
          </div>

        <div className={SpecialCharactervalidate?'validate':'not-validate'}>
        {SpecialCharactervalidate?(
            <span className="list-icon">
              <Icon icon={arrows_circle_check} size={18} />
            </span>
            ):(
              <span className='list-icon'>
              <Icon icon={arrows_exclamation} />
            </span>
            )}
          At least one Special Character
          </div>

        <div className={Numbervalidate?'validate':'not-validate'}>
        {Numbervalidate?(
            <span className="list-icon">
              <Icon icon={arrows_circle_check} size={18} />
            </span>
            ):(
              <span className='list-icon'>
              <Icon icon={arrows_exclamation} />
            </span>
            )}
          At least one Number
          </div>

        <div className={Lengthvalidate?'validate':'not-validate'}>
        {Lengthvalidate?(
            <span className="list-icon">
              <Icon icon={arrows_circle_check} size={18} />
            </span>
            ):(
              <span className='list-icon'>
              <Icon icon={arrows_exclamation} />
            </span>
            )}

          At least 8 Character</div>
       </div>



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
