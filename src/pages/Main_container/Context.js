import React from 'react'
import style from '../Main_container/style.module.css'
const Context = () => {
  return (
    <div className={style.container}>
   <div className={style.ser}>
       <h1>Registration form</h1>
       <img src='1.jpeg'  style={{height:"100px" , width:"100px" , borderRadius:"100px" ,}}/>
   <form>
   <label for="name">Name:</label>
   <input type="text" id="name" name="name" required/>
   
   <label for="email">Email:</label>
   <input type="email" id="email" name="email" required/>
   
   <label for="password">Password:</label>
   <input type="password" id="password" name="password" required/>
   
   <button type="submit">Submit</button>
 </form>
 

   </div>
  </div>



  )
}

export default Context