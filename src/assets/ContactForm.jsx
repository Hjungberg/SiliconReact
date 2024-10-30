import React from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {

  const { register, handleSubmit, formState : {errors} ,reset} = useForm()

  return (
    <section>
      <form action="" className='contactForm'>
        <p className='h2'>Get Online Consultation</p>
        <label className='contactLabel' htmlFor="fullName">Full Name</label>
        <input type="text" id='fullName' className='contactFormText'/>
        <label className='contactLabel' htmlFor="email">Email</label>
        <input type="text" id='email' className='contactFormText'/>
        <label className='contactLabel' htmlFor="specialist">Specialist</label>
        <select name="specialist" id="specialist" className='contactFormText'>
          <option value="0"></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <button type="submit" className='btn btn-primary btn-contact'> Make an appointment</button>
        
        
      </form>
    </section>
  )
}

export default ContactForm