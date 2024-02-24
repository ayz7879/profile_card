import { useState } from "react";
import React from "react";
import "../Css/Contact.css";


const Contact = () => {
  const [form, setForm] = useState({
    name:'',
    email:'',
    phone:'',
  })

  const onChangeHandler = (e) => { 
    setForm({...form,[e.target.name]:[e.target.value]})
   }

  const Submit = (e) => { 
    alert("Submitted")
    e.preventDefault()
    setForm({name:'',email:'',phone:''})
   }
  return (
    <div className="contact">
      <form className="form">
        <label htmlFor="name">Name:-</label>
        <input name="name" type="text" value={form.name} onChange={onChangeHandler} />

        <label htmlFor="name">Email:-</label>
        <input name="email" type="email" value={form.email} onChange={onChangeHandler} />

        <label htmlFor="name">Phone:-</label>
        <input name="phone" type="number" value={form.phone} onChange={onChangeHandler} />

        <input onClick={Submit} type="submit" className="contact-btn"/>
      </form>
    </div>
  );
};

export default Contact;
