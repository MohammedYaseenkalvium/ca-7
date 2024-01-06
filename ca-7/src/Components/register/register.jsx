import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./register.css";  // Importing the style the form
import { ToastContainer, toast } from 'react-toastify';  // Importing toastify
import 'react-toastify/dist/ReactToastify.css';  // Importing the styles for toastify

const RegisterForm = () => {
  // using useForm hook
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isRegistered, setIsRegistered] = useState(false);

  // Function to handle form submission
  const onSubmit = (data) => {
    // Check if there are errors
    if (Object.keys(errors).length === 0) {
      // if no error then go to homepage
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
      //show succes toast
      toast.success("Thank You Your Form is submitted successfully!");
      setIsRegistered(true);  // Set isRegistered to true
    } else {
      // show error if any
      toast.error("Form not submitted. Please fix the errors.");
    }
    
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Register Now</h2>

        <br />

        {/* for name*/}
        <div>
          <label>Name</label>  <br />
          <input
            type="text"
            name="name"
            {...register('name', { 
              required: 'Name is required', 
              minLength: { value: 3, message: 'Name should be at least 3 characters' }, 
              maxLength: { value: 30, message: 'Name should not exceed 30 characters' } 
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <br />

        {/* for email*/}
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            {...register('email', { 
              required: 'Email is required', 
              pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email address' } 
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <br />

        {/* for password*/}
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            {...register('password', { 
              required: 'Password is required', 
              minLength: { value: 10, message: 'Password should be at least 10 characters' }, 
              pattern: { value: /^(?=.*[!@#$%^&*])/i, message: 'Your password should have at least one special character' } 
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <br />

        {/* Input field to repeat the user's password */}
        <div>
          <label>Repeat Password</label>
          <br />
          <input
            type="password"
            name="repeatPassword"
            {...register('repeatPassword', { 
              required: 'Repeat Password is required', 
              validate: value => value === watch('password') || 'Passwords do not match' 
            })}
          />
          {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
        </div>

        <br />

        {/* Submit button */}
        <button type="submit">Sign Up</button>
      </form>

      {/* Container for toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;

